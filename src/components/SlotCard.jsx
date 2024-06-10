import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const SlotCard = ({ a, trainer }) => {
  console.log(a, trainer);
  return (
    <Link to={`/trainer-booking/${trainer._id}`}>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 capitalize"
          >
            Available Time: {a}
          </Typography>
          <Typography>Available Hour: {trainer.timeSlot}</Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default SlotCard;
