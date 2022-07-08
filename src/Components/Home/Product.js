import React from "react";
import { FaStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Products = ({ product }) => {
    const { name, image, brand, quantity, price, details } = product;
    return (
        <div className="col-lg-3 py-3">
            <div className="p-1 rounded-2 border">
                <div className="p-2">
                    <img className="img-fluid rounded-2" src={image} alt="" />
                </div>
                <div className="p-2">
                    <p className="mb-1 d-flex align-items-center justify-content-between">
                        <small>{brand}</small>
                        <small className="pe-1 text-warning">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </small>
                    </p>
                    <h5>{name}</h5>
                    <h3 className=" d-flex justify-content-between align-items-center">
                        <p className="m-0">${price}</p>
                        <button className=" btn rounded-pill bg-alert-success">
                            <BsCart3 className="mb-1 mx-1 fw-semibold fs-5" />
                        </button>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Products;
