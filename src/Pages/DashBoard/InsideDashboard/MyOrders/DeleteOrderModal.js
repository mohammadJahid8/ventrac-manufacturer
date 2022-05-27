import React from "react";
import { toast } from "react-toastify";
import fetcher from "../../../Shared/api/axios.config";

const DeleteOrderModal = ({
  deleteOrder,
  setOrders,
  orders,
  setDeleteOrder,
}) => {
  const { name, productName, _id } = deleteOrder;

  const handleDeleteItem = (id) => {
    const res = fetcher.delete(`/order/${id}`);
    setOrders(res.data);

    toast.success(`${productName} has been deleted from your cart`);
    setDeleteOrder(null);
    const remainingOrders = orders.filter((order) => order._id !== id);
    setOrders(remainingOrders);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to cancel this order?
          </h3>
          <p className="py-4">Product Name: {productName}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteItem(_id)}
              className="btn btn-error btn-sm w-20"
            >
              Yes
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-sm w-20">
              No!!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
