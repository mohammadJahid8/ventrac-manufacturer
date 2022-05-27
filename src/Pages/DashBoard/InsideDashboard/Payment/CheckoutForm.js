import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import fetcher from "../../../Shared/api/axios.config";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, email, name } = order;
  console.log(order);

  useEffect(() => {
    const res = fetcher.post("/create-payment-intent", { price });
    res.then((response) => {
      if (response?.data?.clientSecret) {
        setClientSecret(response?.data?.clientSecret);
      }
    });
  }, [price]);

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

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    //confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      }
    );
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent?.id);
      console.log(paymentIntent);
      setSuccess("Payment Successful");

      //store payment in database
      const payment = {
        order: _id,
        transactionId: paymentIntent?.id,
        status: "Pending",
      };

      const res = fetcher.patch(`/orders/${_id}`, payment);
      setProcessing(false);
    }
  };
  return (
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
        <div className="">
          {cardError && (
            <p className="text-red-500 text-sm mt-2">{cardError}</p>
          )}
          {success && (
            <div className="text-green-500 text-sm mt-2">
              <p>{success}</p>
              <p>
                Your Transaction Id:{" "}
                <span className="text-orange-500  inline-block">
                  {transactionId}
                </span>
              </p>
            </div>
          )}
          <button
            type="submit"
            class="btn btn-primary btn-sm my-5 w-28 align"
            disabled={!stripe || !clientSecret || success}
          >
            Pay
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
