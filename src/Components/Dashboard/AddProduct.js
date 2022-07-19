import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const AddProduct = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div>
            <div>
                <div className=" bg-white rounded-3 mt-3 p-2">
                    <div
                        className="m-2 p-3 rounded-2"
                        style={{ backgroundColor: "#F5F6FA" }}
                    >
                        <div className="row rounded-3">
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustom01"
                                    >
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Product name"
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustom02"
                                    >
                                        <Form.Label>Brand Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Brand name"
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustomUsername"
                                    >
                                        <Form.Label>Price</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                $
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder="Price"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please add product price.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationCustom03"
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide your email address.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationCustom04"
                                    >
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="stock"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please add number of stock.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationCustom05"
                                    >
                                        <Form.Label>Select Category</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            required
                                        >
                                            <option value="1">cloth</option>
                                            <option value="2">Bags</option>
                                            <option value="3">shoe</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please select product category.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group
                                    controlId="formFile"
                                    className="mb-3"
                                >
                                    <Form.Label>Product image</Form.Label>
                                    <Form.Control type="file" required />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Details</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        required
                                        rows={5}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please add details..
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit">Add product</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
