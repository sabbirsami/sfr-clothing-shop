import React from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Cart Product : {id}</h1>
        </div>
    );
};

export default Cart;
