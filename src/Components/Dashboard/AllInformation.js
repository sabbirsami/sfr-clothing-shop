import React, { useEffect, useState } from "react";
import { BsMinecartLoaded } from "react-icons/bs";

const AllInformation = () => {
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const counts = data.count;

                setPageCount(counts);
            });
    }, []);
    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-2">
                    <div className="col-lg-4">
                        <div className="p-4 bg-white m-2 rounded-3">
                            <h3 className="pb-2 fw-light">Total Order</h3>
                            <h1 className="display-1 fw-semibold">32 </h1>
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
