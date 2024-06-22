import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const FeatureClass = () => {
  const axiosCommon = useAxios();
  const {
    data: featureClass = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["feature-class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/feature-class`);
      return data;
    },
  });
//   console.log(featureClass);
  return (
    <div>
      <Typography variant="h2" color="teal" className="my-8 font-bold">
        Feature Class
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureClass?.slice(0, 6).map((cls, idx) => (
          <Card className="max-w-[24rem] overflow-hidden" key={idx}>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={cls.image} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                {cls.className}
              </Typography>
              <Typography className="my-4">Book Count: {cls.bookCount}</Typography>
              <Typography
                variant="paragraph"
                color="gray"
                className="mt-3 font-normal"
              >
                {cls.details.slice(0, 50)}...
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureClass;
