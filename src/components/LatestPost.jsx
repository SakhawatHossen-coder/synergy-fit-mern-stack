import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const LatestPost = () => {
  const axiosCommon = useAxios();
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/post");
      return data;
    },
  });

  return (
    <div className="my-8">
      <Typography variant="h2" color="teal" className="font-bold my-4">
        Latest Community Post
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.slice(0, 4).map((post, idx) => (
          <Card className="mt-6 w-96" key={idx}>
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={post.image} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {post.title}
              </Typography>
              <Typography>{post.details}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/all-forum-post">
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
