import React from "react";
import ManageSlotTable from "../components/ManageSlotTable";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

const ManageSlotslots = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: slots = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer-slot/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Spinner className="mx-auto" />;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Manage Slot Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <ManageSlotTable slots={slots} />
    </div>
  );
};

export default ManageSlotslots;
