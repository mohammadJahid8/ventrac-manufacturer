import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const navigate = useNavigate();

  //fetched my orders
  // const { data: orders, isLoading } = useQuery("orders", () =>
  //   fetcher.get(`/orders?email=${user?.email}`)
  // );

  // if (isLoading) {
  //   return <Loading />;
  // }

  useEffect(() => {
    if (user) {
      const res = fetcher.get(`/orders?email=${user.email}`);
      res
        .then((response) => {
          setOrders(response.data);
        })
        .catch(function (error) {
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            toast.error("Access Token Crashed");
            navigate("/");
          }
        });
    }
  }, [user, navigate]);

  return (
    <div className="mt-5">
      <h1>My Orders: {orders?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Ordered By</th>
              <th>Product Name</th>
              <th>Ordered Quantity</th>
              <th>Price</th>
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr>
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
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <label
                    onClick={() => setDeleteOrder(order)}
                    for="delete-confirm-modal"
                    class="btn btn-error btn-xs "
                  >
                    Cancel
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteOrderModal
          deleteOrder={deleteOrder}
          setOrders={setOrders}
          orders={orders}
          setDeleteOrder={setDeleteOrder}
        />
      )}
    </div>
  );
};

export default MyOrders;
