import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CheckoutForm = ({ totalCost }) => {
    const [user, loading, error] = useAuthState(auth);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    console.log(clientSecret);

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ totalCost }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalCost]);

    if (loading) {
        return <p>Loading...</p>;
    }
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
            setSuccess("");
        } else {
            setCardError("");

            console.log("[PaymentMethod]", paymentMethod);
        }
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setSuccess("");
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            setSuccess("Congrats! Your payment is completed");
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
