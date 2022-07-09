import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Cart = () => {
    const { id } = useParams();

    const { data: product, isLoading } = useQuery("product", () =>
        fetch(`http://localhost:5000/products/${id}`).then((res) => res.json())
    );
    if (isLoading) {
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
                    </div>
                    <div className="col-lg-7">
                        <div className="p-lg-4">
                            <h5 className="mb-0">{brand}</h5>
                            <h1 className="mb-3">{name}</h1>
                            {/* <p className="mb-0">Price</p> */}
                            <h1>${price}</h1>
                            <p className=" fw-semibold fs-6">
                                Stock: {quantity}
                            </p>
                            <button className="btn rounded-1 text-white btn-bg px-4">
                                ADD TO CART
                            </button>
                            <p className="mt-5 fw-semibold">{details}</p>
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
