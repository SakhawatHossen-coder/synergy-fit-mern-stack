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
import { Helmet } from "react-helmet";

const TrainerBook = () => {
  const { id } = useParams();

  const { day } = useParams();
  const { trainer } = useParams();
  const axiosCommon = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user, loading, setLoading } = useAuth();

  // console.log("timeee", trainer);
  const { data: slots = [], isLoading } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer-slot/${user?.email}`);
      return data;
    },
  });
  // console.log(slots);
  //
  //classes

  const { data: train = {}, refetch } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer/${id}`);
      return data;
    },
  });
  const { data: proshika = {} } = useQuery({
    queryKey: ["trainersss"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer`);
      return data;
    },
  });
  // console.log(proshika);
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/trainer-details/${train?.email}`
      );
      return data;
    },
  });
  // console.log(trainers, "from book--");

  const { data: classes = [] } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/class`);
      return data;
    },
  });
  //
  // console.log(classes, "single-clas");

  const HiitTrainer = classes.filter(function (cls) {
    return cls.Tags[0] === "HIIT";
  });
  const STRTrainer = classes.filter(function (cls) {
    return cls.Tags[0] === "Strength Training";
  });
  const YOGATrainer = classes.filter(function (cls) {
    return cls.Tags[0] === "Yoga";
  });
  // console.log(classTrainer)
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Trainer Booked Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <div className="mt-10">
        <Typography variant="h3" color="teal">
          Your Trainer: {trainer}
        </Typography>
      </div>
      <Typography className="bg-cyan-800 w-1/2 mx-auto text-white rounded-lg text-2xl mt-4 p-4">
        Available Day : {day}
        <div>
          {trainers?.map((slot, idx) => (
            <>
              <Typography>Available Slot: {slot.slotName}</Typography>
              <Typography>Available Time: {slot.timeSlot} Hour</Typography>
            </>
          ))}
        </div>
      </Typography>
      <Typography variant="h2" color="teal" className="font-bold my-10">
        Available Class For Trainer
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {strengthTrainer.length > 0 &&
          STRTrainer?.map((tr, idx) => {
            return <BookingCardClass tr={tr} />;
          })}
        {yogaTrainer.length > 0 &&
          YOGATrainer?.map((tr, idx) => <BookingCardClassYoga tr={tr} />)}
        {hiitTrainer.length > 0 &&
          HiitTrainer?.map((tr, idx) => <BookingCardClassHiit tr={tr} />)}
      </div>
      <PricingTable trainer={trainer} trainers={trainers} day={day} />
    </div>
  );
};

export default TrainerBook;
