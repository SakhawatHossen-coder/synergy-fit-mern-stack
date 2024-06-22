import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BookingCardClassYoga = ({ tr }) => {
  const { className, details, image } = tr;

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {className}
        </Typography>
        <Typography>{details.slice(0, 40)}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="/all-class">
        <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookingCardClassYoga;
