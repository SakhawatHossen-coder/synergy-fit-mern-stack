import React, { useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const ManageSlotTable = ({ slots, payments, user, refetch }) => {

  const TABLE_HEAD = [
    "Slot Name",
    "Slot Time",
    "Status",
    "Booked Email",
    "Action",
  ];
  //delete

  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosSecure.delete(
        `/trainer-slot/delete/${user?.email}`
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("Slot Delete successfully!");
      setIsOpen(false);
    },
  });
  const handleDelete = () => {
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
        try {
          await mutateAsync();
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
        Swal.fire({
          title: "Deleted, the Slot",
          text: "Your Slot has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots?.map(({ SlotName, slotTime, days }, index) => {
            const isLast = index === slots.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            const SLOT = payments.filter(function (pay) {
              return pay.slotName === SlotName;
            });
           
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {SlotName}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {slotTime}
                  </Typography>
                </td>
                {SLOT?.slice(0, 1).map((sl, idx) => {
                  // console.log(sl.status);
                  return (
                    <>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sl.status === "successful" ? "BOOKED" : "Not Booked"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {sl.email}
                        </Typography>
                      </td>
                    </>
                  );
                })}
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <Button onClick={handleDelete} variant="filled" color="red">
                      <FaTrash />
                    </Button>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default ManageSlotTable;

const TABLE_HEAD = ["Slot Name", "Slot Time", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
