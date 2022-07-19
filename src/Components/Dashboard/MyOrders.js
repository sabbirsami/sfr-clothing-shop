import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const {
        data: orders,
        refetch,
        isLoading,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            method: "GET",
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    const handleCancel = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Order cancel", {
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
                        <div className="col-4">Product</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-2">Total Price</div>
                        <div className="col-1">Cancel Order</div>
                        <div className="col-1">Pay</div>
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
                            <div className="col-4">{order.name}</div>
                            <div className="col-2">{order.quantity}</div>
                            <div className="col-2">${order.total}</div>
                            <div className="col-1">
                                <button
                                    onClick={() => handleCancel(order._id)}
                                    className="btn px-0 text-danger "
                                >
                                    Cancel
                                </button>
                            </div>
                            <div className="col-1">
                                <button className="btn px-0 text-success">
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
