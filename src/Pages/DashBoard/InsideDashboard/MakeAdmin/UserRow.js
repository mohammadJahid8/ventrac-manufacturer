import React from "react";
import { toast } from "react-toastify";
import fetcher from "../../../Shared/api/axios.config";

const UserRow = ({ userData, refetch }) => {
  const { email, role } = userData;

  //make a admin
  const makeAdmin = () => {
    const res = fetcher.put(`/user/admin/${email}`);
    res
      .then((response) => {
        const { data } = response;
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully Made an Admin");
        }
      })
      .catch(function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error("Failed to make an admin");
        }
      });
  };

  return (
    <tr>
      <td>Name</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <p className="text-xs text-gray-600 w-[110px] bg-lime-100 py-1 rounded px-2">
            Already an Admin
          </p>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
