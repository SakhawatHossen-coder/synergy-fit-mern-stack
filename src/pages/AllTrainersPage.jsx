import React from "react";
import TrainerProfile from "../components/TrainerProfile";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

const AllTrainersPage = () => {
  const axiosCommon = useAxios();
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer`);
      return data;
    },
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      <div>AllTrainersPage</div>
      <p>{trainers.length}length</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TrainerProfile />
      </div>
    </>
  );
};

export default AllTrainersPage;
