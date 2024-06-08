import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import ForumPostCard from "../components/ForumPostCard";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const ForumPage = () => {
  const axiosCommon = useAxios();
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/post");
      return data;
    },
  });
  console.log(posts);
  if (isLoading) return <Spinner />;
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
      <div className="flex justify-center items-center flex-col space-y-4">
        {posts?.map((post, idx) => (
          <ForumPostCard key={idx} post={post} />
        ))}
      </div>
    </>
  );
};

export default ForumPage;
