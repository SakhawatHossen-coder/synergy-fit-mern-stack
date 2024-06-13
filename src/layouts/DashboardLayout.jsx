import React from "react";
import Dashboard from "../dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTrainer from "../hooks/useTrainer";
import useMember from "../hooks/useMember";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTrainer();
  const [isMember] = useMember();
  // console.log(isTrainer, "trainerAB");
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Dashboard isTrainer={isTrainer} isAdmin={isAdmin} isMember={isMember} />

      {/* Outlet --> Dynamic content */}
      <div className="flex-1 ml-10 md:ml-20">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
