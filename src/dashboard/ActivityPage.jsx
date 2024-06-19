import React from "react";
import { Chip, Spinner, Typography } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { MdRemoveRedEye } from "react-icons/md";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet";
const ActivityPage = () => {
  const axiosCommon = useAxios();
  const { user } = useAuth();
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["name"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/trainer/${user?.displayName}/${user?.email}`
      );
      return data;
    },
  });
  const handleModal = () => {};
  // console.log(trainers);
  const Trainer = trainers?.filter(function (train) {
    return train?.status === "Pending";
  });
  console.log(Trainer);
  if (isLoading) return <Spinner className="mx-auto" />;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Your Activity Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <Typography variant="h3" color="teal">
        Your Activity
      </Typography>
      {Trainer.length > 0 ? (
        Trainer?.map((t, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-teal-300 my-10 rounded-xl"
          >
            <Typography variant="h4" className="m-4 p-2">
              Applied For Trainer
            </Typography>
            <div className="flex items-center m-4 p-2 gap-4">
              <Chip
                value={t.status}
                color={t.status === "Pending" ? "yellow" : "red"}
                className=""
              ></Chip>
              <Popover
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button>
                    {" "}
                    <MdRemoveRedEye size={15} onClick={handleModal} />
                  </Button>
                </PopoverHandler>
                <PopoverContent>
                  This is a very beautiful popover, show some love.
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))
      ) : (
        <Typography>You haven't Applied For Trainer Yet</Typography>
      )}
    </div>
  );
};

export default ActivityPage;
