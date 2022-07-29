import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllInformation = () => {
    const [pageCount, setPageCount] = useState(0);
    const { data: orderCount, isLoading } = useQuery("countOrder", () =>
        fetch(`http://localhost:5000/ordersCount`, {
            method: "GET",
        }).then((res) => res.json())
    );

    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const counts = data.count;

                setPageCount(counts);
            });
    }, []);
    console.log(orderCount);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-2">
                    <div className="col-lg-4">
                        <div className="p-4 bg-white m-2 rounded-3">
                            <h3 className="pb-2 fw-light">Total Order</h3>
                            <h1 className="display-1 fw-semibold">
                                {orderCount?.count}
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="p-4 bg-white m-2 rounded-3">
                            <h3 className="pb-2 fw-light">Total Product</h3>
                            <h1 className="display-1 fw-semibold">
                                {pageCount}
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="p-4 bg-white m-2 rounded-3">
                            <h3 className="pb-2 fw-light">Total User</h3>
                            <h1 className="display-1 fw-semibold">09</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInformation;
