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
  const { id } = useParams();

  return (
    <Link to={`/trainer-booking/${id}/${a}/${trainer.fullName}`}>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 capitalize"
          >
            Available Day: {a}
          </Typography>
          <div>
            <Typography>Slot Name: {trainer.slotName}</Typography>
            <Typography>Available Time: {trainer.timeSlot} Hour</Typography>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default SlotCard;
