import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();

  if (loading || adminLoading) {
    return (
      <div className="my-52">
        <Loading />;
      </div>
    );
  }

  if (!user || !admin) {
    // signOut(auth);
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
