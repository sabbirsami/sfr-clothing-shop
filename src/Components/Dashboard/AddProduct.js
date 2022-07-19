import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const AddProduct = () => {
    const [validated, setValidated] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
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
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustom01"
                                    >
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please enter your product name",
                                                },
                                            })}
                                            required
                                            type="text"
                                            placeholder="Product name"
                                        />
                                        <p className="text-danger mb-0">
                                            {errors.name?.type ===
                                                "required" && (
                                                <small className="text-danger">
                                                    {errors.name.message}
                                                </small>
                                            )}
                                        </p>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustom02"
                                    >
                                        <Form.Label>Brand Name</Form.Label>
                                        <Form.Control
                                            {...register("brand", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please enter your brand name",
                                                },
                                            })}
                                            required
                                            type="text"
                                            placeholder="Brand name"
                                        />
                                        <p className="text-danger mb-0">
                                            {errors.brand?.type ===
                                                "required" && (
                                                <small className="text-danger">
                                                    {errors.brand.message}
                                                </small>
                                            )}
                                        </p>
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
                                                {...register("price", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Please enter your product price",
                                                    },
                                                })}
                                                type="number"
                                                placeholder="Price"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <p className="text-danger mb-0">
                                                {errors.price?.type ===
                                                    "required" && (
                                                    <small className="text-danger">
                                                        {errors.price.message}
                                                    </small>
                                                )}
                                            </p>
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
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please enter your email",
                                                },
                                            })}
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                        <p className="text-danger mb-0">
                                            {errors.email?.type ===
                                                "required" && (
                                                <small className="text-danger">
                                                    {errors.email.message}
                                                </small>
                                            )}
                                        </p>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationCustom04"
                                    >
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            {...register("stock", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please enter number of stock",
                                                },
                                            })}
                                            type="number"
                                            placeholder="stock"
                                            required
                                        />
                                        <p className="text-danger mb-0">
                                            {errors.stock?.type ===
                                                "required" && (
                                                <small className="text-danger">
                                                    {errors.stock.message}
                                                </small>
                                            )}
                                        </p>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationCustom05"
                                    >
                                        <Form.Label>Select Category</Form.Label>
                                        <Form.Select
                                            {...register("category", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please select product category",
                                                },
                                            })}
                                            aria-label="Default select example"
                                            required
                                        >
                                            <option value="cloth">cloth</option>
                                            <option value="Bags">Bags</option>
                                            <option value="shoe">shoe</option>
                                        </Form.Select>
                                        <p className="text-danger mb-0">
                                            {errors.category?.type ===
                                                "required" && (
                                                <small className="text-danger">
                                                    {errors.category.message}
                                                </small>
                                            )}
                                        </p>
                                    </Form.Group>
                                </Row>
                                <Form.Group
                                    controlId="formFile"
                                    className="mb-3"
                                >
                                    <Form.Label>Product image</Form.Label>
                                    <Form.Control
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Please enter product image",
                                            },
                                        })}
                                        type="file"
                                        required
                                    />
                                    <p className="text-danger mb-0">
                                        {errors.image?.type === "required" && (
                                            <small className="text-danger">
                                                {errors.image.message}
                                            </small>
                                        )}
                                    </p>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Details</Form.Label>
                                    <Form.Control
                                        {...register("details", {
                                            required: {
                                                value: true,
                                                message:
                                                    " Please add product details.",
                                            },
                                        })}
                                        as="textarea"
                                        required
                                        rows={5}
                                    />
                                    <p className="text-danger mb-0">
                                        {errors.details?.type ===
                                            "required" && (
                                            <small className="text-danger">
                                                {errors.details.message}
                                            </small>
                                        )}
                                    </p>
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
