import React from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const ManageOrders = () => {
    const {
        data: orders,
        refetch,
        isLoading,
    } = useQuery("manageOrder", () =>
        fetch(`http://localhost:5000/orders`).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }
    console.log(orders);
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`, {
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
                        <div className="col-2">Product Image</div>
                        <div className="col-3">Product Name</div>
                        <div className="col-2">User Email</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-2">Total</div>
                        <div className="col-1">Delete</div>
                    </div>
                </div>
                {orders.map((order) => (
                    <div className="m-2 p-3 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <div className="product-image col-lg-2 bg-light rounded">
                                    <img
                                        className="img-fluid rounded"
                                        src={order.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-3">{order.name}</div>
                            <div className="col-2">{order.email}</div>
                            <div className="col-2">{order.quantity}</div>
                            <div className="col-2">${order.total}</div>
                            <div className="col-1">
                                <button
                                    onClick={() => handleDelete(order._id)}
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

export default ManageOrders;
