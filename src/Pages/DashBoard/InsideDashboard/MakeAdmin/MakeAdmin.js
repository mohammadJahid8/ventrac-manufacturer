import React from "react";
import { useQuery } from "react-query";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () => fetcher.get("/users"));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-2xl">All Users:{users?.data?.length}</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Ordered Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((userData) => (
                <UserRow
                  key={userData._id}
                  userData={userData}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
