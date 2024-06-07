import React from "react";
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
  const { user, loading } = useAuth();
  let lastStatus = user?.metadata?.lastLoginAt;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  console.log(lastStatus);
  let a = Date(lastStatus);

  const formattedDate = a.toLocaleString(options);

  return (
    <>
      <div className="h-screen w-full bg-gray-50 flex justify-center items-center">
        <div className="h-72 w-96 absolute flex justify-center items-center">
          <img
            className="object-cover h-20 w-20 rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>

        <div
          className="
          h-72
          mx-4
          w-96
          bg-blue-400
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
        "
        >
          <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
            <h1 className="text-white">User Profile</h1>
          </div>

          <div
            className="
            bg-white
            h-1/2
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
          "
          >
            <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-500 text-xs">Last Login</h1>
                <h1 className="text-gray-600 text-sm">
                  {formattedDate.split(" ")[0]}-{formattedDate.split(" ")[1]}-
                  {formattedDate.split(" ")[2]}-{formattedDate.split(" ")[3]}
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                {/* <h1 className="text-gray-500 text-xs">User Role</h1>
                <h1 className="text-gray-600 text-sm">{}</h1> */}
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-gray-700 font-bold">{user?.displayName}</h1>
              <h1 className="text-gray-500 text-sm">{user?.email}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
