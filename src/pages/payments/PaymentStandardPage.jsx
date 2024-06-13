import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Standard from "./Standard";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const PaymentStandardPage = () => {
  return (
    <div>
      PaymentStandardPage
      <Elements stripe={stripePromise}>
        <Standard />
      </Elements>
    </div>
  );
};

export default PaymentStandardPage;
