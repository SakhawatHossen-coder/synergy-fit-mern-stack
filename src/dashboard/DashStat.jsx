import { Typography } from "@material-tailwind/react";
import React from "react";

const DashStat = () => {
  
  return (
    <div>
      <Typography variant="h2" color="teal">
        All Newsletter Subscribers
      </Typography>
      <div>
        <div className="text-gray-900 ">
          <div className="p-4 flex">
            {/* <h1 className="text-3xl">Users</h1> */}
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>

                  <th></th>
                </tr>
                <tr className=" hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.name"
                      className="bg-transparent border-0"
                      disabled
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.email"
                      disabled
                      className="bg-transparent border-0"
                    />
                  </td>
                </tr>
                <tr className=" hover:bg-orange-100">
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.name"
                      disabled
                      className="bg-transparent border-0"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.email"
                      disabled
                      className="bg-transparent border-0"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStat;
