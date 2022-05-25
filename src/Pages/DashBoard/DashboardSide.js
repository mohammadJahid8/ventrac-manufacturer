import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSide = ({ children }) => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content px-4 bg-gray-100">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/myprofile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addreview">Add a Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myorders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/makeadmin">Make Admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSide;
