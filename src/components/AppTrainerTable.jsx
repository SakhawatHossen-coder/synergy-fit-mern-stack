import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { Button, Typography } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const AppTrainerTable = ({ train, setIsOpen, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { fullName, email, userRole, weekDays, age, status } = train;

  if (userRole !== "Member") {
    return <p>No Applied Trainer..Yet</p>;
  }
  let join = "Age" + ":" + age + " " + "Email" + ":" + email;
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/trainer/update/${email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User role updated successfully!");
      setIsOpen(false);
    },
  });
  return (
    <>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {fullName}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {email}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {userRole}
          </Typography>
        </td>
        <td className="p-4">
          <Button
            variant="filled"
            color="teal"
            className=""
            // onClick={() => setIsModalOpen(true)}
            onClick={() => {
              Swal.fire({
                title: `Are you sure? Make ${fullName} a Trainer`,
                text: join,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm",
              }).then(async (result) => {
                if (result.isConfirmed) {
                  if (user?.email === email) {
                    toast.error("Action Not Allowed");
                    return setIsOpen(false);
                  }
                  const Role = {
                    userRole: "Trainer",
                    status: "Verified",
                  };
                  try {
                    await mutateAsync(Role);
                  } catch (err) {
                    console.log(err);
                    toast.error(err.message);
                  }
                  Swal.fire({
                    title: "Success!",
                    text: `${fullName}has become Trainer.`,
                    icon: "success",
                  });
                }
              });
            }}
          >
            <CiEdit size={18} />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default AppTrainerTable;
