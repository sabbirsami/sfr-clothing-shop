import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Pagination from "react-bootstrap/Pagination";

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${10}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
        // refetch();
    }, [page, products]);
    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const counts = data.count;
                const pages = Math.ceil(counts / 10);
                setPageCount(pages);
            });
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`, {
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
                                <button className="btn px-0 text-success">
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
