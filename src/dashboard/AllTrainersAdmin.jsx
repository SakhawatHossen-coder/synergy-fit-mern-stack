import React from "react";
import Select from "react-select";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

const AllTrainersAdmin = () => {
  let options = [
    { value: "user", label: "user" },
    { value: "admin", label: "admin" },
  ];
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };
  const axiosCommon = useAxios();
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer`);
      return data;
    },
  });
  if (isLoading) return <Spinner className="mx-auto" />;
  console.log(trainers);
  return (
    <div>
    
      <div>
        <div className="text-gray-900 rounded-lg shadow-lg">
          <div className="p-4 flex">
            <h1 className="text-3xl">Trainers {trainers.length}</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th></th>
                </tr>
                {trainers?.map((trainer, idx) => (
                  <tr key={idx} className="border-b  bg-gray-100">
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={trainer?.fullName}
                        className="bg-transparent border-0 outline-none"
                        disabled
                      />
                    </td>
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={trainer?.email}
                        className="bg-transparent border-0 outline-none focus:outline-none"
                        disabled
                      />
                    </td>
                    <td className="p-3 px-4 mx-5">
                      <Select
                        onChange={handleChange}
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      ></Select>
                    </td>
                    <td className="p-3 px-5 flex justify-end">
                      <button
                        type="button"
                        className="mr-3 text-sm  bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
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

export default AllTrainersAdmin;
