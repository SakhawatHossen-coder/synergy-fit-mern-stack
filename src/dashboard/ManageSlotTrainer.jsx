import React, { useState } from "react";
import ManageSlotTable from "../components/ManageSlotTable";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import ManageBookSlot from "../components/ManageBookSlot";

const ManageSlotslots = () => {
  const { user, loading, setLoading } = useAuth();
  const [name, setName] = useState(null);
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
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
  const Slot = slots.filter(function (slot) {
    // setName(slot.SlotName);
    return slot.SlotName;
  });
  // console.log(Slot)
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments`);
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
      <ManageSlotTable
        slots={slots}
        payments={payments}
        refetch={refetch}
        user={user}
      />
      {/* <ManageBookSlot /> */}
    </div>
  );
};

export default ManageSlotslots;
