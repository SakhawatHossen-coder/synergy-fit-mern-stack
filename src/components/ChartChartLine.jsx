import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import useAxios from "../hooks/useAxios";
import { Spinner, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

const ChartChartLine = ({ payments }) => {
  let axiosCommon = useAxios();
  const { data: subscribers = [], isLoading } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/newsletter");
      return data;
    },
  });
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Typography className="capitalize font-bold my-3 ">
        Total newsletter subscribers vs total paid members.
      </Typography>
      <BarChart
        width={500}
        height={300}
        data={[
          {
            name: "Newletter Subscribers",
            members: payments.length,
            subscriber: subscribers.length,
            amt: 100,
          },
          {
            name: "Paid Members",
            members: payments.length,
            subscriber: subscribers.length,
            amt: 100,
          },
        ]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="members"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="subscriber"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default ChartChartLine;
