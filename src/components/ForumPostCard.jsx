import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Chip,
} from "@material-tailwind/react";
import { FaUpDown } from "react-icons/fa6";
import { BiDownArrow, BiDownvote, BiUpArrow, BiUpvote } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ForumPostCard = ({ post }) => {
  // console.log(post);
  const { writerName, image, title, details, userRole, Tags } = post;
  const [voteCount, setVoteCount] = useState(0);
  const { user, loading } = useAuth();
  const [voteDown, setVoteDown] = useState(0);
  const [val, setVal] = useState("outlined");
  const [value, setValue] = useState("outlined");
  const [dis, setDis] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [disable, setDisable] = useState("");
  const navigate=useNavigate()
  const handleUpvote = () => {
    if (user && !hasVoted) {
      setVoteCount(voteCount + 1);
      // Call API to update vote on server
      setVal("filled");
      setHasVoted(true);
    } else {
     navigate("/login");

      // Handle user not logged in scenario (e.g., display login message)
    }
  };

  const handleDownvote = () => {
    if (user) {
      setVoteCount(voteCount - 1);
      // Call API to update vote on server
      setHasVoted(true);
    } else {
      // Handle user not logged in scenario
          navigate("/login");

    }
  };
  // console.log(post);
  return (
    <Card className="w-full max-w-[48rem] flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt={title}
          className="h-auto w-1/2 mx-auto object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {Tags[0]}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {details}
        </Typography>
        {/* <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a> */}
      </CardBody>
      <CardFooter>
        {post.badge ? <Button>ADMIN</Button> : <Button>Trainer</Button>}
      </CardFooter>
      <CardFooter>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Author: {writerName}
        </Typography>
        <div className="space-x-4 flex">
          <div className="flex gap-2 items-center">
            <Button variant={val} onClick={handleUpvote}>
              <BiUpvote />
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant={value} onClick={handleDownvote}>
              <BiDownvote />
            </Button>
          </div>
          <p>Votes: {voteCount}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForumPostCard;
