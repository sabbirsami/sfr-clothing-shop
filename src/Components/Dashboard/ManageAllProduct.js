import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Pagination from "react-bootstrap/Pagination";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const ManageAllProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [updateId, setUpdateId] = useState("");
    // console.log(updateId);

    // UPDATE MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };
    // const {
    //     data: product,
    //     isLoading,
    //     refetch,
    // } = useQuery("singleProductUpdate", () =>
    //     fetch(
    //         `https://sfr-clothing-store.herokuapp.com/products/${updateId}`
    //     ).then((res) => res.json())
    // );

    useEffect(() => {
        fetch(
            `https://sfr-clothing-store.herokuapp.com/products?page=${page}&size=${10}`
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
        // refetch();
    }, [page, products]);

    useEffect(() => {
        fetch("https://sfr-clothing-store.herokuapp.com/productCount")
            .then((res) => res.json())
            .then((data) => {
                const counts = data.count;
                const pages = Math.ceil(counts / 10);
                setPageCount(pages);
            });
    }, []);
    // if (isLoading) {
    //     return <p>Loading..</p>;
    // }

    const handleShowUpdateModal = (id) => {
        setUpdateId(id);
        handleShow(true);
    };
    // const handleUpdate = (id) => {
    //     console.log(id);
    //     // handleClose();
    // };
    const handleUpdate = (data) => {
        console.log(data);
        console.log(updateId);
        fetch(`https://sfr-clothing-store.herokuapp.com/products/${updateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Successfully update");
                console.log("Success:", data);
                reset();
                handleClose();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://sfr-clothing-store.herokuapp.com/products/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Order delete", {
                    duration: 4000,
                });
            });
    };
    return (
        <div>
            <div className=" bg-white rounded-3 mt-3 p-2">
                <Modal show={show} className="rounded-0" onHide={handleClose}>
                    <Form onSubmit={handleSubmit(handleUpdate)}>
                        <Modal.Header
                            className="border-0"
                            closeButton
                        ></Modal.Header>
                        <Modal.Body>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    {...register("name", { required: true })}
                                    required
                                    className="py-3 rounded-0"
                                    type="text"
                                    // defaultValue={product?.name}
                                    placeholder="Product Name"
                                />
                            </Form.Group>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            {...register("price", {
                                                required: true,
                                            })}
                                            required
                                            className="py-3 rounded-0"
                                            type="number"
                                            // defaultValue={product?.price}
                                            placeholder="Price"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-6">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            {...register("stock", {
                                                required: true,
                                            })}
                                            required
                                            // defaultValue={product?.stock}
                                            className="py-3 rounded-0"
                                            type="number"
                                            placeholder="Quantity"
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                // onClick={() => handleUpdate()}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <div
                    className="m-2 p-3 rounded-2"
                    style={{ backgroundColor: "#F5F6FA" }}
                >
                    <div className="row rounded-3">
                        <div className="col-4">Name</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Stock</div>
                        <div className="col-2">Update</div>
                        <div className="col-2">Delete</div>
                    </div>
                </div>
                {products.map((product) => (
                    <div className="m-2 p-2 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-4">{product.name}</div>
                            <div className="col-2">{product.price}</div>
                            <div className="col-2">{product.stock}</div>

                            <div className="col-2">
                                <button
                                    onClick={() =>
                                        handleShowUpdateModal(product._id)
                                    }
                                    className="btn px-0 text-success"
                                >
                                    Update
                                </button>
                            </div>
                            <div className="col-2">
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="btn px-0 text-danger "
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <Pagination className="justify-content-center">
                    <Pagination.Prev />
                    {[...Array(pageCount).keys()].map((number, index) => (
                        <Pagination.Item
                            key={index}
                            active={page === number}
                            onClick={() => setPage(number)}
                        >
                            {number}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next />
                </Pagination>
            </div>
        </div>
    );
};

export default ManageAllProduct;
