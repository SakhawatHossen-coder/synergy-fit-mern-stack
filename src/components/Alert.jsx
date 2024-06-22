import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Alert = ({ trainer }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/trainer/update/${trainer?.email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      // console.log(data);
      toast.success("User role updated successfully!");
      setIsOpen(false);
    },
  });
  const Asa = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const Role = {
          userRole: "Member",
          status: "Pending",
        };
        try {
          await mutateAsync(Role);
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
        Swal.fire({
          title: "Deleted, the Role",
          text: "Your user has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <button
      type="button"
      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      onClick={Asa}
    >
      Delete
    </button>
  );
};

export default Alert;
