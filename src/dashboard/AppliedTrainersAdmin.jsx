import React, { useState } from "react";
import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { GrAction } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";

const AppliedTrainersAdmin = () => {
  const TABLE_HEAD = ["Name", "Email", "Role", "Action"];
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const axiosCommon = useAxios();
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer`);
      return data;
    },
  });
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
            {trainers?.map(({ fullName, email, userRole }, index) => (
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
                    onClick={handleOpenModal}
                  >
                    <CiEdit size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AppliedTrainersAdmin;

// sasa
// asas
