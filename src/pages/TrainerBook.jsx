import { Typography } from "@material-tailwind/react";
import React from "react";
import PricingTable from "../components/PricingTable";
import { useParams } from "react-router-dom";

const TrainerBook = () => {
  const { day } = useParams();
  const { trainer } = useParams();
  console.log("timeee", trainer);

  return (
    <div>
      <div className="mt-10">
        <Typography variant="h3" color="teal">
          Your Trainer: {trainer}
        </Typography>
      </div>
      <Typography className="bg-cyan-800 w-1/2 mx-auto text-white rounded-lg text-2xl mt-4">
        Time Slot: {day}
      </Typography>
      <div>Classes</div>
      <PricingTable trainer={trainer} day={day}/>
    </div>
  );
};

export default TrainerBook;
