import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Loading from "./Loading";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Header from "./Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
    "pk_test_51L2vNMJH0mXagrhOdzLEhBYwbNjUZQy6o9TQRQP00TOEqz5YJutO7I2OjEflJDptHPmz9U3iLzgX9sBRtIlYTIB900kUiVeM24"
);

const ShippingBag = () => {
    const [user, loading] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {
        data: allOrders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch(
            `https://sfr-clothing-store.herokuapp.com/orders/${user?.email}`,
            {
                method: "GET",
            }
        ).then((res) => res.json())
    );

    if (isLoading || loading) {
        return <Loading />;
    }
    console.log(allOrders);

    const handleCancel = (id) => {
        console.log(id);
        fetch(`https://sfr-clothing-store.herokuapp.com/orders/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Cancel.");
                refetch();
            });
    };
    return (
        <>
            <Header />
            <div>
                <div className="container">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Pay
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="row justify-content-evenly">
                        <div className="col-lg-9">
                            <div className="py-5 px-3">
                                <div className="d-flex align-items-center border-bottom justify-content-between pb-4">
                                    <h2>Shopping Cart</h2>
                                    <h2>{allOrders.count} Items</h2>
                                </div>
                                <div className="">
                                    <div
                                        className="row align-items-center justify-content-between rounded-2 py-4"
                                        // style={{ backgroundColor: "#F5F6FA" }}
                                    >
                                        <div className="col-4 fw-semibold">
                                            PRODUCT DETAILS
                                        </div>
                                        <div className="col-1 fw-semibold">
                                            QUANTITY
                                        </div>
                                        <div className="col-1 fw-semibold">
                                            PRICE
                                        </div>
                                        <div className="col-1 fw-semibold">
                                            TOTAL
                                        </div>
                                        <div className="col-2 fw-semibold">
                                            <RiDeleteBin2Fill />
                                        </div>
                                    </div>
                                    {allOrders.orders.map((order) => (
                                        <div className="">
                                            <div className="row bg-light py-2 mb-1 rounded-3 align-items-center justify-content-between">
                                                <div className="col-4">
                                                    <div className="d-flex align-items-center">
                                                        <div className="product-image col-lg-2 bg-light rounded">
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={
                                                                    order.image
                                                                }
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
                                                <div className="col-1">
                                                    {order.quantity}
                                                </div>
                                                <div className="col-1">
                                                    ${order.price}
                                                </div>
                                                <div className="col-1">
                                                    $
                                                    {order.price *
                                                        order.quantity}
                                                </div>
                                                <div className="col-2 text-start">
                                                    <button
                                                        onClick={() =>
                                                            handleCancel(
                                                                order._id
                                                            )
                                                        }
                                                        className="btn ps-0 border-0 text-danger"
                                                    >
                                                        <RiDeleteBin2Fill />
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
                                    <p>{allOrders.count} ITEMS</p>
                                    <p>${allOrders.totalFinal}</p>
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
                                    <p className="fw-semibold mb-1">
                                        PROMO CODE
                                    </p>
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
                                    <p>${allOrders.totalFinal + 3}</p>
                                </div>
                                <button
                                    onClick={handleShow}
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
        </>
    );
};

export default ShippingBag;
