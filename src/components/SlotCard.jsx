import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
const SlotCard = ({ a, trainer }) => {
  // console.log(trainer.fullName);
  // const { day } = useParams();
  return (
    <Link to={`/trainer-booking/${a}/${trainer.fullName}`}>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 capitalize"
          >
            Available Timeaaaa: {a}
          </Typography>
          <Typography>Available Hour: {trainer.timeSlot}</Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default SlotCard;
