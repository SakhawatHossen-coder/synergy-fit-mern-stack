import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const DashStat = () => {
  let axiosCommon = useAxios();

  const { data: subscribers = [], isLoading } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/newsletter");
      return data;
    },
  });
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Typography variant="h2" color="teal">
        All Newsletter Subscribers {subscribers.length}
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
                  <th className="text-left p-3 px-5">Numbers</th>
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th></th>
                </tr>
                {subscribers?.map((sub, idx) => (
                  <tr key={idx} className=" hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5">{idx + 1}</td>
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={sub.name}
                        className="bg-transparent border-0"
                        disabled
                      />
                    </td>
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={sub.email}
                        disabled
                        className="bg-transparent border-0"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStat;
