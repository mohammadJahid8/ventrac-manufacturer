import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0pRfJbegYKTJYPu7wYHHQHTkdeBJeEj0PibmVp39Do9lGIK2Fdq7RC4vZa4yOzZSlHxa7dY6oYPPySQaBWmpPy00BLMhz0Yk"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetcher.get(`/orders/${id}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-success font-bold">Hello, {order?.data?.name}</p>
            <h2 className="card-title">
              Product Name : {order.data?.productName}
            </h2>
            <p className="text-xl">Order Id: {id}</p>
            <p>
              Please Pay : $
              <span className="text-orange-700 inline-block">
                {order?.data?.price}
              </span>
            </p>
          </div>
          <div className="px-10">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order?.data} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
