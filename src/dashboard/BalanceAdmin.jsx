import React from "react";
import CustomerList from "../components/CustomerList";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
      <CustomerList />
    </div>
  );
};

export default BalanceAdmin;
