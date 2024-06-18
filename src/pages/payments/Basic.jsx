import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Basic = () => {
  const { trainer } = useParams();
  const { day } = useParams();
  const { user, loading } = useAuth();
  console.log(trainer, day, "sas");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const totalPrice = 29;
  const [dis, setDis] = useState("");
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          trainer: trainer,
          packageName: "Basic",
          slot: day,
          email: user?.email,
          photo: user?.photoURL,
          name: user?.displayName,
          date: new Date().toLocaleDateString(),
          price: totalPrice,
          transactionId: paymentIntent.id,
          status: "successful",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);

        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for Payment",
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate("/dashboard/paymentHistory");
          setDis("disabled");
        }
      }
    }
  };
  console.log(user);
  return (
    <Card className="mt-6 w-96 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Trainer: {trainer}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Slot: {day}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Price: $29
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Package: Basic
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Email: {user?.email}
          </Typography>
          <Typography>Name: {user?.displayName}</Typography>
        </CardBody>
        <div className="my-5">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <CardFooter className="pt-0">
          <Button disabled={dis} type="submit" variant="filled" color="green">
            Confirm
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Basic;
