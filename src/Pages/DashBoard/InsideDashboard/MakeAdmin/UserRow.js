import React from "react";
import { toast } from "react-toastify";
import fetcher from "../../../Shared/api/axios.config";

const UserRow = ({ userData, refetch }) => {
  const { email, role } = userData;

  const makeAdmin = () => {
    const res = fetcher.put(`/user/admin/${email}`);
    refetch();
    toast.success("Successfully Made an Admin");
  };

  return (
    <tr>
      <td>X</td>
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
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
