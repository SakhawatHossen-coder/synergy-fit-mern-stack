import React from "react";
import { useParams } from "react-router-dom";
import PricingTable from "../components/PricingTable";

const TrainerBookingPage = () => {
  const { time } = useParams();
  const { trainer } = useParams();
  console.log("timeee", time);
  return <div>TrainerBookingPage
     <PricingTable/>
  </div>;
};

export default TrainerBookingPage;
