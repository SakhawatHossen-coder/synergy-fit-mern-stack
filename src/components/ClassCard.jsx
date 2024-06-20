import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ClassCard = ({ jj, yogaTrainer, classes }) => {
  // console.log(trainers);
  // Filter even numbers

  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={jj.image} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {jj.className}
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="mt-3 font-normal"
        >
          {jj.details}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          {yogaTrainer?.map((t, idx) => (
            <Tooltip key={idx} content={t.fullName}>
              <Link to={`/trainer-details/${t._id}`}>
                <Avatar
                  size="sm"
                  variant="circular"
                  alt={t.fullName}
                  src={t.image}
                  className="border-2 border-white hover:z-10"
                />
              </Link>
            </Tooltip>
          ))}

          {/* {trainers?.map(trainer)=>trainer.} */}
        </div>
        {/* <Typography className="font-normal">January 10</Typography> */}
      </CardFooter>
    </Card>
  );
};

export default ClassCard;
