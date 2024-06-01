import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
const Teamcard = ({ trainer }) => {
  let { dp, name, brief, expertBrief } = trainer;
  return (
    <>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={dp} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {brief}
          </Typography>
          <Typography color="blue-gray" className="my-4">
            <span className="font-bold ">Areas of Expertise:</span>
            {expertBrief}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default Teamcard;

