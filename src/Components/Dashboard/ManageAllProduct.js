import React from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const ManageAllProduct = () => {
    const {
        data: products,
        refetch,
        isLoading,
    } = useQuery("products", () =>
        fetch(`http://localhost:5000/products`).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }
    console.log(products);
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
                refetch();
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
        </div>
    );
};

export default ManageAllProduct;
