import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import PricingTable from "../components/PricingTable";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import BookingCardClass from "../components/BookingCardClass";
import BookingCardClassYoga from "../components/BookingCardClassYoga";
import BookingCardClassHiit from "../components/BookingCardClassHiit";

const TrainerBook = () => {
  const { day } = useParams();
  const { trainer } = useParams();
  const axiosCommon = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user, loading, setLoading } = useAuth();

  console.log("timeee", trainer);
  const { data: slots = [], isLoading } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/trainer-slot/${user?.displayName}/${user?.email}`
      );
      return data;
    },
  });
  console.log(slots);
  //
  //classes

  const { data: classes = [] } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/class");
      return data;
    },
  });

  console.log(classes, "from book");
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer-details/${user?.email}`);
      return data;
    },
  });
  console.log(trainers, "from book--");

  const classTrainer = classes.filter(function (cls) {
    // return cls.option2 === "Yoga";
    let yoga = cls.Tags[0];
    let hiit = cls.Tags[1];
    let strtrain = cls.Tags[2];
    console.log(yoga.includes("Yoga"))
  });
  const yogaTrainer = trainers.filter(function (train) {
    return train.option2 === "Yoga";
  });
  const strengthTrainer = trainers.filter(function (train) {
    return train.option1 === "Strength Training";
  });
  const hiitTrainer = trainers.filter(function (train) {
    return train.option3 === "HIIT";
  });
  console.log(yogaTrainer);

  if (isLoading) return <Spinner className="w-full mx-auto" />;

  return (
    <div>
      <div className="mt-10">
        <Typography variant="h3" color="teal">
          Your Trainer: {trainer}
        </Typography>
      </div>
      <Typography className="bg-cyan-800 w-1/2 mx-auto text-white rounded-lg text-2xl mt-4 p-4">
        Available Day : {day}
        <div>
          {slots?.map((slot, idx) => (
            <>
              <Typography>Available Slot: {slot.SlotName}</Typography>
              <Typography>Available Time: {slot.slotTime} Hour</Typography>
            </>
          ))}
        </div>
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {strengthTrainer?.map((tr, idx) => (
          <BookingCardClass tr={tr} />
        ))}
        {yogaTrainer?.map((tr, idx) => (
          <BookingCardClassYoga />
        ))}
        {hiitTrainer?.map((tr, idx) => (
          <BookingCardClassHiit tr={tr} />
        ))}
      </div>
      <PricingTable trainer={trainer} day={day} />
    </div>
  );
};

export default TrainerBook;
