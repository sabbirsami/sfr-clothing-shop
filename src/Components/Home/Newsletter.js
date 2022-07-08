import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const Newsletter = () => {
    return (
        <div className="bg-light">
            <div className="container py-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <h4>Newsletter</h4>
                        <p>
                            Subscribe to our newsletter and get 20% off your
                            first purchase
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <InputGroup className="mb-3">
                            <Form.Control
                                className="rounded-0 py-3"
                                placeholder="Your email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="danger"
                                className="rounded-0 px-4"
                                id="button-addon2"
                            >
                                Subscribe
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
