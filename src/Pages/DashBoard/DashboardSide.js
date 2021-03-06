import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashboardSide = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-4 bg-gray-50">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/myprofile">My Profile</NavLink>
          </li>
          {!admin && (
            <li>
              <NavLink to="/dashboard/addreview">Add a Review</NavLink>
            </li>
          )}
          {!admin && (
            <li>
              <NavLink to="/dashboard/myorders">My Orders</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/manageorders">Manage All Orders</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/addproduct">Add a product</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/makeadmin">Make Admin</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/manageproduct">Manage products</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSide;
