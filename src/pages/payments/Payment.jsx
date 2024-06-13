import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Typography } from "@material-tailwind/react";
import PaymentBasicPage from "./PaymentBasicPage";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  return (
    <div>
      <Typography>Your Payment</Typography>
      <div>
        <Elements stripe={stripePromise}>
          <PaymentBasicPage />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
