import { Typography } from "@material-tailwind/react";
import React from "react";
import ForumPostCard from "../components/ForumPostCard";

const ForumPage = () => {
  return (
    <>
      <div className="my-4">
        <Typography variant="h1" color="teal">
          Fitness & Wellness Discussions
        </Typography>
        <Typography className="font-semibold my-4" variant="h5">
          Find tips, advice, and support from fellow fitness enthusiasts!
        </Typography>
      </div>
      <div>
        <ForumPostCard />
      </div>
    </>
  );
};

export default ForumPage;
