import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Pagination from "react-bootstrap/Pagination";
import { Button, Form, Modal } from "react-bootstrap";

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    // UPDATE MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

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
    const handleShowUpdateModal = (id) => {
        console.log(id);
        handleUpdate(id);
        handleShow(true);
    };
    const handleUpdate = (id) => {
        console.log(id);
        // handleClose();
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
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    className="py-3 rounded-0"
                                    type="text"
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
                                            required
                                            className="py-3 rounded-0"
                                            type="number"
                                            placeholder="Price"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-6">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control
                                            required
                                            className="py-3 rounded-0"
                                            type="number"
                                            placeholder="Quantity"
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => handleUpdate()}
                        >
                            Save Changes
                        </Button>
                    </Modal.Footer>
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
