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
import AppTrainerTable from "../components/AppTrainerTable";
import { Helmet } from "react-helmet";

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

  const AppTrainer = trainers.filter(function (train) {
    return train.status === "Pending";
  });
  if (isLoading) return <Spinner className="mx-auto" />;
  // console.log(trainers);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Applied Trainers Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
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
            {AppTrainer.length > 0 ? (
              AppTrainer?.map((train, index) => {
                return (
                  <AppTrainerTable
                    refetch={refetch}
                    setIsOpen={setIsOpen}
                    train={train}
                    key={index}
                  />
                );
              })
            ) : (
              <p>No Applied Trainer Yet...</p>
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
