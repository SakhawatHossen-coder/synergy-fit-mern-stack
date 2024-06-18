import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
const SlotCard = ({ a, trainer, slots }) => {
  console.log(slots);
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
            Available Day: {a}
          </Typography>
          <div>
            {slots?.map((slot, idx) => (
              <>
                <Typography>Available Slot: {slot.SlotName}</Typography>
                <Typography>Available Time: {slot.slotTime} Hour</Typography>
              </>
            ))}
          </div>
          {/* <Typography>Available Time: {trainer.timeSlot} Hour</Typography> */}
        </CardBody>
      </Card>
    </Link>
  );
};

export default SlotCard;
