import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Basic from "./Basic";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const PaymentBasicPage = () => {
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
  //  console.log(traine.slotName);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Payment Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <Elements stripe={stripePromise}>
        <Basic traine={traine} />
      </Elements>
    </>
  );
};

export default PaymentBasicPage;
