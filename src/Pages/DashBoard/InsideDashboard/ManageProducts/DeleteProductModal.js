import React from "react";
import { toast } from "react-toastify";
import fetcher from "../../../Shared/api/axios.config";

const DeleteProductModal = ({
  deleteProduct,
  tools,
  setDeleteProduct,
  refetch,
}) => {
  const { name, _id } = deleteProduct;

  const handleDeleteItem = (id) => {
    const res = fetcher.delete(`/tool/${id}`);
    // setOrders(res.data);
    toast.success(`${name} has been deleted from your cart`);
    refetch();
    setDeleteProduct(null);
    // const remainingOrders = orders.filter((order) => order._id !== id);
    // setOrders(remainingOrders);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-product-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to cancel this order?
          </h3>
          <p className="py-4">Product Name: {name}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteItem(_id)}
              className="btn btn-error btn-sm w-20"
            >
              Yes
            </button>
            <label htmlFor="delete-product-modal" className="btn btn-sm w-20">
              No!!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
