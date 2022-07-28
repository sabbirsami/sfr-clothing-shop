import React from "react";
import { Form } from "react-bootstrap";
import Header from "./Shared/Header";
import PageTitle from "./Shared/PageTitle";

const Contact = () => {
    return (
        <>
            <PageTitle title="Contact -"></PageTitle>
            <Header />
            <div className="contact-pattern">
                <div className="container-fluid contact-bg">
                    <div className="py-5">
                        <h1 className="py-5 display-2 text-center text-white">
                            #Contact
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <div className="py-lg-5">
                        <div className="py-5">
                            <div className="row align-item-center">
                                <div className="col-lg-6">
                                    <div className="py-lg-5">
                                        <h3>Want to work with us?</h3>
                                        <h1 className="display-1 pt-2">
                                            Let's talk!
                                        </h1>
                                        <p className="pt-5 fs-4 fw-light">
                                            smd71430@gmail.com
                                        </p>
                                        <p className="fs-4 fw-light">
                                            +880 197070 6676
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-auto">
                                    <div className="p-3 bg-white">
                                        <Form>
                                            <div className="row">
                                                <div className="col-lg-5 ">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label>
                                                            Name
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            className="py-3 rounded-0"
                                                            type="text"
                                                            placeholder="Name"
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-7">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label>
                                                            Email
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            className="py-3 rounded-0"
                                                            type="email"
                                                            placeholder="Email"
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    required
                                                    className="rounded-0"
                                                    as="textarea"
                                                    placeholder="Write your message here..."
                                                    rows={3}
                                                />
                                            </Form.Group>

                                            <button
                                                type="submit"
                                                className="btn bg-common text-light py-3 px-5"
                                            >
                                                Sent Message
                                            </button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
