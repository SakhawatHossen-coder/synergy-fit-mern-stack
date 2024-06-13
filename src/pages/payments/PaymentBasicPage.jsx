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
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const PaymentBasicPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <div>PaymentBasicPage</div>
      <Basic />
    </Elements>
  );
};

export default PaymentBasicPage;
