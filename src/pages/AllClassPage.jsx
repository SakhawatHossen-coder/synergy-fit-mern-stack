import React from "react";
import ClassCard from "../components/ClassCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Spinner, Typography } from "@material-tailwind/react";

const AllClassPage = () => {
  const axiosCommon = useAxios();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/class");
      return data;
    },
  });
  console.log(classes);
  if (isLoading) return <Spinner />;
  return (
    <div>
      <div className="my-10">
        <Typography variant="h3" color="teal">
          Explore Your Potential: Discover Our Diverse Range of Fitness Classes
        </Typography>
        <Typography variant="paragraph">
          Find the perfect fit for your goals and unleash your inner athlete
          with our exciting class offerings!
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes?.map((jj, idx) => (
          <ClassCard key={idx} jj={jj} />
        ))}
      </div>
    </div>
  );
};

export default AllClassPage;
