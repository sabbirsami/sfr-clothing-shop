import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Loading from "./Loading";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Header from "./Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { FloatingLabel, Form } from "react-bootstrap";
import PageTitle from "./PageTitle";
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
            <PageTitle title="Shipping -"></PageTitle>
            <Header />
            <div>
                <div className="container">
                    <Modal
                        className="rounded-0"
                        size="xl"
                        aria-labelledby="example-modal-sizes-title-lg"
                        show={show}
                        onHide={handleClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title
                                id="example-modal-sizes-title-lg"
                                className="display-6"
                            >
                                Payment Information
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h1 className="px-2">Address</h1>
                            <div className="pb-2 px-2">
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control
                                            required
                                            className="py-3 rounded-0"
                                            type="text"
                                            defaultValue={"Bangladesh"}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            required
                                            className="py-3 rounded-0"
                                            type="text"
                                            placeholder="Address"
                                        />
                                    </Form.Group>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1"
                                            >
                                                <Form.Label>City</Form.Label>
                                                <Form.Control
                                                    required
                                                    className="py-3 rounded-0"
                                                    type="text"
                                                    placeholder="City"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-4">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1"
                                            >
                                                <Form.Label>
                                                    Zip Code
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    className="py-3 rounded-0"
                                                    type="number"
                                                    placeholder="Zip Code"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>
                                            State / Province
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            className="py-3 rounded-0"
                                            type="text"
                                            placeholder="State / Province"
                                        />
                                    </Form.Group>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1"
                                            >
                                                <Form.Label>
                                                    Country Code
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    className="py-3 rounded-0"
                                                    type="number"
                                                    placeholder="Country Code"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-8">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1"
                                            >
                                                <Form.Label>
                                                    Phone Number
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    className="py-3 rounded-0"
                                                    type="number"
                                                    placeholder="Phone Number"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Form>
                            </div>

                            <h1 className="px-2 pb-3">Billing</h1>
                            <div className="px-2">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        totalCost={allOrders.totalFinal}
                                    />
                                </Elements>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <div className="row justify-content-evenly">
                        <div className="col-lg-8">
                            <div className="py-5 px-3">
                                <div className="d-flex align-items-center justify-content-between pb-4">
                                    <h1 className="display-5">Shopping Cart</h1>
                                </div>
                                <div className="">
                                    {/* <div
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
                                            Remove
                                        </div>
                                    </div> */}
                                    {allOrders.orders.map((order) => (
                                        <div className="">
                                            <div className="row flex-column py-2 mb-2 rounded-3 align-items-center justify-content-between">
                                                <div className="">
                                                    <div className="d-flex align-items-center">
                                                        <div className="product-image col-lg-2 col-5 bg-light rounded">
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={
                                                                    order.image
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="product-name ms-4">
                                                            <h5 className="">
                                                                {order.name}
                                                            </h5>
                                                            <div className="">
                                                                <p className="m-0">
                                                                    Qty:{" "}
                                                                    {
                                                                        order.quantity
                                                                    }
                                                                    ,{" "}
                                                                    <span className="ps-2">
                                                                        Price: $
                                                                        {
                                                                            order.price
                                                                        }
                                                                    </span>
                                                                </p>

                                                                <p className="m-0">
                                                                    Total: $
                                                                    {order.price *
                                                                        order.quantity}
                                                                </p>
                                                                <button
                                                                    onClick={() =>
                                                                        handleCancel(
                                                                            order._id
                                                                        )
                                                                    }
                                                                    className="btn ps-0 border-0 text-danger"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
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
                            className="col-lg-4"
                            style={{ backgroundColor: "#F5F5F6" }}
                        >
                            <div className="py-5 px-2">
                                <div className="pb-4">
                                    <h1 className="display-5">Order Summary</h1>
                                </div>
                                <div className="d-flex align-items-center mb-3 fw-semibold justify-content-between pt-4">
                                    <p>{allOrders.count} ITEMS</p>
                                    <p>${allOrders.totalFinal}</p>
                                </div>
                                <div className="mb-4">
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
                                        <input
                                            type="text"
                                            className="px-3 w-100 py-3 mb-0"
                                            placeholder="Enter your code"
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-primary bg-common rounded-0 px-4">
                                    Apply
                                </button>
                                <hr className="mt-5 mb-4" />
                                <div className="d-flex align-items-center mb-3 fw-semibold justify-content-between">
                                    <p>TOTAL COST</p>
                                    <p>${allOrders.totalFinal + 3}</p>
                                </div>
                                <button
                                    onClick={handleShow}
                                    className="btn w-100 rounded-0 py-3 bg-common text-white"
                                >
                                    Proceed to Checkout
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
