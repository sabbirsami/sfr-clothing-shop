import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Header from "./Header";
import PageTitle from "./PageTitle";

const Cart = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [customers, setCustomers] = useState([]);
    // useEffect(() => {
    //     fetch("feedback.json")
    //         .then((res) => res.json())
    //         .then((result) => {
    //             setCustomers(result);
    //             console.log(result);
    //         });
    // }, []);
    const {
        data: product,
        isLoading,
        refetch,
    } = useQuery("product", () =>
        fetch(`https://sfr-clothing-store.herokuapp.com/products/${id}`).then(
            (res) => res.json()
        )
    );

    const [orderQuantity, setOrderQuantity] = useState(1);
    // const { productImage, setProductImage } = useState("");

    if (isLoading || loading) {
        return <p>Loading..</p>;
    }

    const { name, price, brand, stock, description, image, details } =
        product[0];

    const subtractOrderQuantity = () => {
        if (orderQuantity > 1) {
            setOrderQuantity(orderQuantity - 1);
        }
    };
    const addOrderQuantity = () => {
        if (orderQuantity < stock) {
            setOrderQuantity(orderQuantity + 1);
        }
    };
    // const handleSetProductImage = (image) => {
    //     setProductImage(image);
    // };

    const handleAddToCart = () => {
        const order = {
            id: id,
            email: user.email,
            name: name,
            price: price,
            total: parseFloat(price) * orderQuantity,
            quantity: orderQuantity,
            image: image,
        };
        console.log(order);
        fetch("https://sfr-clothing-store.herokuapp.com/orders", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Successfully added!");
                console.log("Success:", data);
                refetch();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <PageTitle title="Cart -"></PageTitle>
            <Header />
            <div>
                <div className="container py-5">
                    <div className="row py-lg-5">
                        <div className="col-lg-5">
                            <div className="p-2 bg-light rounded">
                                <img
                                    className="img-fluid rounded-2"
                                    src={image}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-lg-4">
                                <h5 className="mb-0">{brand}</h5>
                                <h1 className="mb-3">{name}</h1>
                                <h1>${price}</h1>
                                <p className=" fw-semibold mb-4 fs-6">
                                    Stock: {stock}
                                </p>
                                <div className="d-flex ">
                                    <div className="col-lg-2 col-6">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text
                                                className="pe-auto p-0"
                                                onClick={subtractOrderQuantity}
                                            >
                                                <button className="btn">
                                                    {" "}
                                                    -
                                                </button>
                                            </InputGroup.Text>
                                            <Form.Control
                                                aria-label="Amount (to the nearest dollar)"
                                                value={orderQuantity}
                                            />
                                            <InputGroup.Text
                                                className="pe-auto p-0"
                                                onClick={addOrderQuantity}
                                            >
                                                <button className="btn">
                                                    {" "}
                                                    +
                                                </button>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className="btn rounded-1 mb-3 ms-3 text-white btn-bg px-4"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                                <p className="mt-3 fw-semibold">{details}</p>
                                {description?.map((des, index) => (
                                    <li className=" fw-semibold" key={index}>
                                        {des}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div className="row pb-5">
                        <h1 className="display-5">Review</h1>
                        {customers.map((customer) => (
                            <div className="col-lg-4">
                                <div className="p-3 border border-1">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="w-10"
                                            src={customer.img}
                                            alt=""
                                        />

                                        <div className="ps-3 pt-3">
                                            <h5 className="fw-bold m-0 pt-2">
                                                {customer.name}
                                            </h5>
                                            <p>{customer.position}</p>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <p>{customer.dis}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Cart;
