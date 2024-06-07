import React, { useState } from "react";
import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GrAction } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const AppliedTrainersAdmin = () => {
  const { user } = useAuth();
  const axiosCommon = useAxios();
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const TABLE_HEAD = ["Name", "Email", "Role", "Action"];
  // for modal

  const {
    data: trainers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer`);
      return data;
    },
  });
  // const delHand = () => {};

  if (isLoading) return <Spinner className="mx-auto" />;
  // console.log(trainers);
  return (
    <div>
      AppliedTrainersAdmin
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
            {trainers?.map(
              ({ fullName, email, userRole, weekDays, age, status }, index) => {
                if (status !== "Pending") {
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
                    // refetch();
                    console.log(data);
                    toast.success("User role updated successfully!");
                    setIsOpen(false);
                  },
                });
                return (
                  <>
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {fullName}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
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
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AppliedTrainersAdmin;

// sasa
// asas
