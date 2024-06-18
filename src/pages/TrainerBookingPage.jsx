import React from "react";
import { useParams } from "react-router-dom";
import PricingTable from "../components/PricingTable";
import { Badge, Typography } from "@material-tailwind/react";

const TrainerBookingPage = () => {
  const { time } = useParams();
  const { trainer } = useParams();
  console.log("timeee", time);
  return (
    <div>
      <div className="mt-10">
        <Typography variant="h3" color="teal">
          Your Trainer: {trainer}
        </Typography>
      </div>
        <Typography className="bg-cyan-800 w-1/2 mx-auto text-white rounded-lg text-2xl mt-4 p-4">Available Time: {time}</Typography>
      <PricingTable />
    </div>
  );
};

export default TrainerBookingPage;
