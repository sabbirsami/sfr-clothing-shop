import React from "react";
import { Button, Form } from "react-bootstrap";

const AddAdmin = () => {
    return (
        <div>
            <div className="  mt-3">
                <Form>
                    <div className="row ">
                        <div className="col-lg-6 rounded-3 mx-3 p-4 bg-white">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label className="fw-semibold">
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="sami@gamil.com"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <Button
                                        variant="success"
                                        className="px-3"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddAdmin;
