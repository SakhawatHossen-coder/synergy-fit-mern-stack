import React from "react";
import CustomerList from "../components/CustomerList";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LineChartComp from "../components/LineChart";
import ChartChartLine from "../components/ChartChartLine";

const BalanceAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments`);
      return data;
    },
  });
  console.log(payments);
  return (
    <div>
      BalanceAdmin
      <CustomerList payments={payments} />
      <ChartChartLine />
    </div>
  );
};

export default BalanceAdmin;
