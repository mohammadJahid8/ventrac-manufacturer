import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../../firebase.init";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";
import DeleteProductModal from "./DeleteProductModal";

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);

  //data loaded from database by axios custom api using react query
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () => fetcher.get("/tools"));

  refetch();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-5">
      <h1>Total Products: {tools?.data?.length}</h1>
      <div className=" w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tools?.data?.map((tool, index) => (
              <tr key={index}>
                <th>{index + 1}</th>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={tool.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tool.name}</div>
                    </div>
                  </div>
                </td>

                <td>{tool.quantity}</td>
                <td>${tool.price}</td>

                <td>
                  <label
                    onClick={() => setDeleteProduct(tool)}
                    htmlFor="delete-bill-modal"
                    className="btn btn-error btn-xs "
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteProductModal
          deleteProduct={deleteProduct}
          tools={tools?.data}
          setDeleteProduct={setDeleteProduct}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageProducts;
