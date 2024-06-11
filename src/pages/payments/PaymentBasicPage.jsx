import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const PaymentBasicPage = () => {
  const { trainer } = useParams();
  const { day } = useParams();
  const { user, loading } = useAuth();
  console.log(trainer, day, "sas");

  return (
    <>
      <div>PaymentBasicPage</div>
      <Card className="mt-6 w-96">
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
            Email: {user?.email}
          </Typography>
          <Typography>Name: {user?.displayName}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="filled" color="green">Confirm</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PaymentBasicPage;
