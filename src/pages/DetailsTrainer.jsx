import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Spinner, Typography } from "@material-tailwind/react";
import TrainerInfoCard from "../components/TrainerInfoCard";
import TrainerSlotCard from "../components/TrainerSlotCard";

const DetailsTrainer = () => {
  const { id } = useParams();
  const axiosCommon = useAxios();
  const {
    data: trainer = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sa"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer/${id}`);
      return data;
    },
  });
  if (isLoading) return <Spinner />;
  console.log(trainer);
     

  return (
    <div>
      DetailsTrainer
      <div id="trainer-info">
        <TrainerInfoCard trainer={trainer} />
      </div>
      <div id="trainer-slot" className="mt-16">
        <Typography variant="h3" className="font-bold">
          Trainer Schedule
        </Typography>
        <TrainerSlotCard trainer={trainer} />
      </div>
    </div>
  );
};

export default DetailsTrainer;
