import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "react-bootstrap/Pagination";
import Product from "../Home/Product";
import Loading from "../Shared/Loading";

const AllProduct = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const { data: products, isLoading } = useQuery(["products", page], () =>
        fetch(`http://localhost:5000/products?page=${page}&size=${12}`).then(
            (res) => res.json()
        )
    );
    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const counts = data.count;
                const pages = Math.ceil(counts / 12);
                setPageCount(pages);
            });
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <div className="container">
                <div className="py-3">
                    <div className="row">
                        {products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
                <div className="my-5">
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
        </div>
    );
};

export default AllProduct;
