import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <div className="my-52">
            <Loading />;
        </div>
    }

    if (!user) {

        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;