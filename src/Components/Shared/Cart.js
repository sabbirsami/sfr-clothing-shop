import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Cart = () => {
    const { id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const { data: product, isLoading } = useQuery("product", () =>
        fetch(`http://localhost:5000/products/${id}`).then((res) => res.json())
    );
    const [orderQuantity, setOrderQuantity] = useState(1);
    const { productImage, setProductImage } = useState("");

    if (isLoading || loading) {
        return <p>Loading..</p>;
    }

    const {
        name,
        price,
        brand,
        quantity,
        description,
        image,
        image_1,
        image_2,
        image_3,
        image_4,
        details,
    } = product[0];

    const subtractOrderQuantity = () => {
        if (orderQuantity > 1) {
            setOrderQuantity(orderQuantity - 1);
        }
    };
    const addOrderQuantity = () => {
        if (orderQuantity < quantity) {
            setOrderQuantity(orderQuantity + 1);
        }
    };
    const handleSetProductImage = (image) => {
        setProductImage(image);
    };

    const handleAddToCart = () => {
        const order = {
            id: id,
            email: user.email,
            name: name,
            price: price,
            quantity: orderQuantity,
            image: image,
        };
        console.log(order);
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Successfully added!");
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
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
                        <div className="d-flex">
                            <button
                                onClick={() => handleSetProductImage(image_2)}
                                className="btn p-0 m-0 btn-outline-none border-0"
                            >
                                <div className="p-2 bg-light m-1 rounded">
                                    <img
                                        className="img-fluid rounded-2"
                                        src={image_2}
                                        alt=""
                                    />
                                </div>
                            </button>
                            <button className="btn p-0 m-0 btn-outline-none border-0">
                                <div className="p-2 bg-light m-1 rounded">
                                    <img
                                        className="img-fluid rounded-2"
                                        src={image_3}
                                        alt=""
                                    />
                                </div>
                            </button>
                            <button className="btn p-0 m-0 btn-outline-none border-0">
                                <div className="p-2 bg-light m-1 rounded">
                                    <img
                                        className="img-fluid rounded-2"
                                        src={image_1}
                                        alt=""
                                    />
                                </div>
                            </button>
                            <button className="btn p-0 m-0 btn-outline-none border-0">
                                <div className="p-2 bg-light m-1 rounded">
                                    <img
                                        className="img-fluid rounded-2"
                                        src={image_4}
                                        alt=""
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-lg-4">
                            <h5 className="mb-0">{brand}</h5>
                            <h1 className="mb-3">{name}</h1>
                            {/* <p className="mb-0">Price</p> */}
                            <h1>${price}</h1>
                            <p className=" fw-semibold mb-4 fs-6">
                                Stock: {quantity}
                            </p>
                            <div className="d-flex ">
                                <div className="col-2">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text
                                            className="pe-auto p-0"
                                            onClick={subtractOrderQuantity}
                                        >
                                            <button className="btn"> -</button>
                                        </InputGroup.Text>
                                        <Form.Control
                                            aria-label="Amount (to the nearest dollar)"
                                            value={orderQuantity}
                                        />
                                        <InputGroup.Text
                                            className="pe-auto p-0"
                                            onClick={addOrderQuantity}
                                        >
                                            <button className="btn"> +</button>
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
                            {description.map((des, index) => (
                                <li className=" fw-semibold" key={index}>
                                    {des}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
