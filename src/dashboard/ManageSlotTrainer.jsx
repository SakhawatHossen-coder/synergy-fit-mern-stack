import React from "react";
import ManageSlotTable from "../components/ManageSlotTable";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

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
      const { data } = await axiosSecure.get(
        `/trainer-slot/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading) return <Spinner className="mx-auto" />;

  return (
    <div>
      ManageSlotslots
      <ManageSlotTable slots={slots} />
    </div>
  );
};

export default ManageSlotslots;
