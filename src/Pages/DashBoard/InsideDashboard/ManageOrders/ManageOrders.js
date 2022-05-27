import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";

const ManageOrders = () => {
  //   const [orders, setOrders] = useState([]);
  //   const [user] = useAuthState(auth);
  //   const [deleteOrder, setDeleteOrder] = useState(null);
  //   const navigate = useNavigate();

  //fetched my orders
  // const { data: orders, isLoading } = useQuery("orders", () =>
  //   fetcher.get(`/orders?email=${user?.email}`)
  // );

  // if (isLoading) {
  //   return <Loading />;
  // }

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () => fetcher.get("/all-orders"));
  

  const handleApprovend = (id) => {
    const newStatus = {
      status: "Shipped",
    };
    const res = fetcher.put(`/all-orders/${id}`, newStatus);
    refetch();
  };
  return (
    <div className="mt-5">
      <h1>My Orders: {orders?.data?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Ordered By</th>
              <th>Product Name</th>
              <th>Ordered Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order, index) => (
              <tr key={index}>
                <th></th>
                <td>
                  <div>
                    <div className="font-bold">{order.name}</div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.productName}</div>
                    </div>
                  </div>
                </td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <td>
                  {!order.paid && (
                    <p className="btn bg-green-400 btn-xs">Unpaid</p>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <span className="text-xs text-green-600  bg-lime-100 py-1 rounded px-2 w-10 inline-block mr-2">
                        Paid
                      </span>
                      <span
                        className={
                          order.status === "Pending"
                            ? "text-xs text-green-600  bg-orange-100 py-1 rounded px-2 w-14 inline-block"
                            : "text-xs text-green-600  bg-gray-100 py-1 rounded px-2 w-14 inline-block"
                        }
                      >
                        {order.status}
                      </span>
                    </div>
                  )}
                </td>
                <td>
                  {order.paid && (
                    <div>
                      <button
                        onClick={() => handleApprovend(order._id)}
                        className="text-xs text-gray-800  bg-blue-200 py-1 pr-14 rounded px-2 w-16"
                      >
                        Ship Now
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
