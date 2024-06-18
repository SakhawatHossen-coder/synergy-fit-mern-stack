import React from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import TrainerInfoCard from "../components/TrainerInfoCard";
import TrainerSlotCard from "../components/TrainerSlotCard";
import { FaDumbbell } from "react-icons/fa6";
import SlotCard from "../components/SlotCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const DetailsTrainer = () => {
  const { id } = useParams();
  const { user, loading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
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
  console.log(trainer, "as");

  const { data: slots = [] } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/trainer-slot/${trainer?.email}`
      );
      return data;
    },
  });
  console.log(slots);
  if (isLoading) return <Spinner className="w-full mx-auto" />;

  return (
    <div>
      <Link to="/become-trainer" className="flex justify-end">
        <Button className="flex gap-2 items-center" size="lg">
          <FaDumbbell />
          Be A Trainer
        </Button>
      </Link>
      <div id="trainer-info">
        <TrainerInfoCard trainer={trainer} />
      </div>
      <div id="trainer-slot" className="mt-16">
        <Typography variant="h3" className="font-bold">
          Trainer Schedule
        </Typography>
        {/* <TrainerSlotCard trainer={trainer} /> */}
        <Typography variant="h5" color="blue-gray" className="mb-2 capitalize">
          available time slots for booking sessions
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainer.weekDays?.map((a, idx) => (
            <SlotCard trainer={trainer} a={a} key={idx} slots={slots}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsTrainer;
