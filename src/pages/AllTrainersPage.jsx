import React from "react";
import TrainerProfile from "../components/TrainerProfile";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

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
  const AllTrainer = trainers.filter(function (train) {
    return train.userRole === "Trainer";
  });
  if (isLoading) return <Spinner className="mx-auto" />;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || All Trainers Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <p>Total: {AllTrainer.length} Trainers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AllTrainer?.map((trainer, idx) => (
          <TrainerProfile key={idx} trainer={trainer} />
        ))}
      </div>
    </>
  );
};

export default AllTrainersPage;
