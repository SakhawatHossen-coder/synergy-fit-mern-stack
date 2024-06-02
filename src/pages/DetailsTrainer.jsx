import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

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
      {trainer.fullName}
    </div>
  );
};

export default DetailsTrainer;
