import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const ShippingBag = () => {
    const { data: orders, isLoading } = useQuery("orders", () =>
        fetch("http://localhost:5000/orders").then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-lg-9">
                        <div className="py-5 px-2">
                            <div className="d-flex align-items-center justify-content-between pb-4">
                                <h2>Shopping Cart</h2>
                                <h2>2 Items</h2>
                            </div>
                            <div className="">
                                <div
                                    className="row align-items-center justify-content-between rounded-2 mb-3 py-4"
                                    style={{ backgroundColor: "#F5F6FA" }}
                                >
                                    <div className="col-4 fw-semibold">
                                        PRODUCT DETAILS
                                    </div>
                                    <div className="col-2 fw-semibold">
                                        QUANTITY
                                    </div>
                                    <div className="col-1 fw-semibold">
                                        PRICE
                                    </div>
                                    <div className="col-1 fw-semibold">
                                        TOTAL
                                    </div>
                                    <div className="col-1 fw-semibold">
                                        REMOVE
                                    </div>
                                </div>
                                {orders.map((order) => (
                                    <div className="">
                                        <div className="row bg-light py-2 mb-1 rounded-3 align-items-center justify-content-between">
                                            <div className="col-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="product-image col-lg-2 bg-light rounded">
                                                        <img
                                                            className="img-fluid rounded"
                                                            src={order.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="product-name ms-4">
                                                        <h4 className="fw-light">
                                                            {order.name}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                {order.quantity}
                                            </div>
                                            <div className="col-1">
                                                ${order.price}
                                            </div>
                                            <div className="col-1">
                                                ${order.price * order.quantity}
                                            </div>
                                            <div className="col-1 text-start">
                                                <button className="btn ps-0 border-0 text-danger">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="py-5">
                                <Link
                                    to={"/shop"}
                                    style={{ color: "#456edd" }}
                                    className="btn border-0 fs-5 fw-semibold"
                                >
                                    <HiOutlineArrowNarrowLeft /> Continue
                                    Shopping
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-3"
                        style={{ backgroundColor: "#F5F5F6" }}
                    >
                        <div className="py-5 px-2">
                            <div className="pb-4 border-bottom">
                                <h2>Order Summary</h2>
                            </div>
                            <div className="d-flex align-items-center mb-3 fw-semibold justify-content-between pt-4">
                                <p>3 ITEMS</p>
                                <p>$666</p>
                            </div>
                            <div className="mb-3">
                                <p className="fw-semibold mb-1">SHIPPING</p>
                                <div className="bg-white">
                                    <p className="px-3 py-3 mb-0">
                                        Standard Delivery - $3.00
                                    </p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <p className="fw-semibold mb-1">PROMO CODE</p>
                                <div className="bg-white">
                                    <p className="px-3 py-3 mb-0">
                                        Enter your code
                                    </p>
                                </div>
                            </div>
                            <button className="btn btn-primary rounded-0 px-4">
                                APPLY
                            </button>
                            <hr className="mt-5 mb-4" />
                            <div className="d-flex align-items-center mb-3 fw-semibold justify-content-between">
                                <p>TOTAL COST</p>
                                <p>$663</p>
                            </div>
                            <button
                                className="btn w-100 rounded-0 text-white"
                                style={{ backgroundColor: "#456edd" }}
                            >
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingBag;
