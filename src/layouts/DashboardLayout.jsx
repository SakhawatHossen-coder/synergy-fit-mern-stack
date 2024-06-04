import React from 'react'
import Dashboard from '../dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Dashboard />

      {/* Outlet --> Dynamic content */}
      <div className="flex-1 ml-10 md:ml-20">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout