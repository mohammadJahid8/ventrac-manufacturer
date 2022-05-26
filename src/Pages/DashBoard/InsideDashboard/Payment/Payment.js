import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetcher.get(`/orders/${id}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center">
      <div className="">
        <h2 className="text-2xl text-success">Please pay for : {id}</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="text-success font-bold">Hello, {order?.data?.name}</p>
            <h2 class="card-title">
              Please Pay for : {order.data?.productName}
            </h2>
            <p>
              Please Pay : $
              <span className="text-orange-700 inline-block">
                {order?.data?.price}
              </span>
            </p>
          </div>
          <div>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
