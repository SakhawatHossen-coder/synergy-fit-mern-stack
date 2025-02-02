import React from "react";
import CustomerList from "../components/CustomerList";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ChartChartLine from "../components/ChartChartLine";
import { Helmet } from "react-helmet";

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
  // console.log(payments);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Balance Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <div className="flex items-center gap-5">
        <CustomerList payments={payments} />
        <ChartChartLine payments={payments} />
      </div>
    </>
  );
};

export default BalanceAdmin;
