import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    console.log(clientSecret);

    // const { _id, totalPrice, userName, userEmail } = order;
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            setCardError(error?.message);
        } else {
            setCardError("");
            console.log("[PaymentMethod]", paymentMethod);
        }
    };
    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                    <button
                        className="btn btn-success alert-success mt-3"
                        type="submit"
                        disabled={!stripe || !clientSecret}
                    >
                        Pay
                    </button>
                </form>
                {cardError && <p className="text-danger">{cardError}</p>}
                {success && (
                    <div className="text-success">
                        <p>{success} </p>
                        <p>
                            Your transaction Id:{" "}
                            <span className="text-success fw-bold">
                                {transactionId}
                            </span>{" "}
                        </p>
                    </div>
                )}
            </>
        </div>
    );
};

export default CheckoutForm;
