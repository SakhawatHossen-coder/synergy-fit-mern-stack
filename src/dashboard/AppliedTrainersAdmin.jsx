import React, { useState } from "react";
import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GrAction } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import Modals from "../components/Modal";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AppliedTrainersAdmin = () => {
  const TABLE_HEAD = ["Name", "Email", "Role", "Action"];
  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const axiosCommon = useAxios();
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
  console.log(trainers);
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
              ({ fullName, email, userRole, weekDays, age }, index) => {
                let join = "Age" + ":" + age + " " + "Email" + ":" + email;
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
                            }).then((result) => {
                              if (result.isConfirmed) {
                                Swal.fire({
                                  title: "Deleted!",
                                  text: "Your file has been deleted.",
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
                    <Modals
                      fullName={fullName}
                      email={email}
                      userRole={userRole}
                      weekDays={weekDays}
                      refetch={refetch}
                      age={age}
                      key={index + 1}
                      isModalOpen={isModalOpen}
                      closeModal={closeModal}
                      setIsOpen={setIsOpen}
                      isOpen={isOpen}
                      // modalHandler={modalHandler}
                    />
                    ;
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
