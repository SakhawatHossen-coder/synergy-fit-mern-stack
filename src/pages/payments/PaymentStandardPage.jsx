import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Standard from "./Standard";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

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
     queryKey: ["trainer"],
     queryFn: async () => {
       const { data } = await axiosCommon.get(`/trainer/${id}`);
       return data;
     },
   });
   console.log(traine.slotName);
 
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Payment Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <Elements stripe={stripePromise}>
        <Standard traine={traine} />
      </Elements>
    </div>
  );
};

export default PaymentStandardPage;
