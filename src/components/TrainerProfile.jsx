import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const TrainerProfile = ({ trainer }) => {
  const { fullName, experience, slot, image } = trainer;
  console.log(trainer);
  return (
    <div>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img
            src={image}
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {fullName}
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium"
            
          >
            Experience: {experience} Years+
          </Typography>
          <Typography variant="h4" color="blue-gray" className="font-medium" >
            Available Slots:
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
            {slot?.map((day, idx) => (
              <Button key={idx} size="sm">
                {day}
              </Button>
            ))}
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
        <div>
          <Link to="/trainer-details" className="my-4">
            <Button color="green" className="my-4">
              Know More
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TrainerProfile;
