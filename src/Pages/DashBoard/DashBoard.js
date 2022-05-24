import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSide from './DashboardSide';

const DashBoard = () => {
    return (
        <div>
            <DashboardSide>
                <Outlet/>
            </DashboardSide>
        </div>
    );
};

export default DashBoard;