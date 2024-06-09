import React from "react";
import TrainerProfile from "../components/TrainerProfile";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

const AllTrainersPage = () => {
  // const axiosCommon = useAxios();
  const axiosSecure = useAxiosSecure();
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer`);
      return data;
    },
  });
  if (isLoading) return <Spinner className="mx-auto" />;
  return (
    <>
      <div>AllTrainersPage</div>
      <p>{trainers.length}length</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainers?.map((trainer, idx) => (
          <TrainerProfile key={idx} trainer={trainer} />
        ))}
      </div>
    </>
  );
};

export default AllTrainersPage;
