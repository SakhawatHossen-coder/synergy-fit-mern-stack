import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { FaPen, FaUser } from "react-icons/fa";
import { PiNewspaperLight, PiPenNib } from "react-icons/pi";
import { TbGymnastics } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Dashboard = ({ isAdmin, isTrainer }) => {
  const [isActive, setActive] = useState(false);
  // console.log(isAdmin, isTrainer);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const ADMIN = (
    <>
      <NavLink
        to="all-news-letter"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        <PiNewspaperLight />
        All Newsletter Subscriber
      </NavLink>
      <NavLink
        to="all-trainers-admin"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        <TbGymnastics />
        All Trainers
      </NavLink>
      <NavLink
        to="applied-trainers-admin"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        Applied Trainer
      </NavLink>
      <NavLink
        to="add-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        Add New Classes
      </NavLink>
      <NavLink
        to="add-forum"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        <FaPen />
        Add Forum
      </NavLink>
    </>
  );
  const TRAINER = (
    <>
      <NavLink
        to="add-slot"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        <BiPlusCircle />
        Add Slot
      </NavLink>
      <NavLink
        to="manage-slot"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
            isActive ? "bg-teal-900" : "text-black"
          }`
        }
      >
        <PiPenNib />
        Manage Slot
      </NavLink>
    </>
  );
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
              {isAdmin ? ADMIN : ""}
              {isTrainer && TRAINER}
              <NavLink
                to="user-profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 transform ${
                    isActive ? "bg-teal-900" : "text-black"
                  }`
                }
              >
                <FaUser />
                User Profile
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
