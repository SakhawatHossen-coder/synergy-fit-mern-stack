import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Premium from "./Premium";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const PaymentPremiumPage = () => {
  return (
    <div>
      PaymentPremiumPage
      <Elements stripe={stripePromise}>
        <Premium />
      </Elements>
    </div>
  );
};

export default PaymentPremiumPage;
