import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Cart = () => {
    const { id } = useParams();

    const { data: product, isLoading } = useQuery("product", () =>
        fetch(`http://localhost:5000/products/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading..</p>;
    }
    console.log(product);
    return (
        <div>
            <div className="container">
                <h1>Cart Product : {id}</h1>
                <img src={product[0].image_2} alt="" />
            </div>
        </div>
    );
};

export default Cart;
