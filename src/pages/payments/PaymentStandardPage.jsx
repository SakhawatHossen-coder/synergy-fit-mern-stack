import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Standard from "./Standard";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const PaymentStandardPage = () => {
   const { id } = useParams();
   console.log(id);
   const axiosCommon = useAxios();
   const {
     data: traine = {},
     refetch,
     isLoading,
   } = useQuery({
     queryKey: ["sa"],
     queryFn: async () => {
       const { data } = await axiosCommon.get(`/trainer/${id}`);
       return data;
     },
   });
   console.log(traine.slotName);
 
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Standard traine={traine} />
      </Elements>
    </div>
  );
};

export default PaymentStandardPage;
