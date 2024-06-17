import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SlotForm from "../components/SlotForm";

const AddSlotTrainer = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: trainer = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/trainer/${user?.displayName}/${user?.email}`
      );
      return data;
    },
  });
  console.log(trainer);

  return (
    <>
      <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add New Slot
          </h2>
        </div>
        {trainer?.map((t, idx) => (
          <SlotForm isLoading={isLoading} key={idx} t={t} />
        ))}
      </div>
    </>
  );
};

export default AddSlotTrainer;
