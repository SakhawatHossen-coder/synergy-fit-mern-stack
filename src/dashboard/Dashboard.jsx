import React, { useState } from "react";
import { TbGymnastics } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* className=
      {({ isActive }) =>
        `flex items-center p-4 my-2 text-lg text-black transition-colors duration-300 transform  hover:bg-teal-300 rounded-lg  ${
          isActive ? "bg-teal-600" : "text-black"
        }`
      } */}
      <div className="flex h-[100vh] bg-gray-100">
        <div className="hidden md:flex flex-col w-64 bg-blue-800">
          <div className="flex items-center justify-center h-16 bg-blue-200">
            <span className="text-white font-bold uppercase">SynergyFit</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 space-y-4 py-4 bg-blue-900">
              <NavLink
                to="add"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
                    isActive ? "bg-teal-900" : "text-black"
                  }`
                }
              >
                <TbGymnastics/>
                Be A Trainer
              </NavLink>
              <NavLink
                to="add"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
                    isActive ? "bg-teal-900" : "text-black"
                  }`
                }
              >
                Be A Trainer
              </NavLink>
              <NavLink
                to="add"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
                    isActive ? "bg-teal-900" : "text-black"
                  }`
                }
              >
                Be A Trainer
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
