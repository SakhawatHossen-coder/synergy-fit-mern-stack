import React, { useEffect, useRef, useState } from "react";
import ClassCard from "../components/ClassCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import {
  Button,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
const AllClassPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [asc, setAsc] = useState(true);
  const axiosCommon = useAxios();
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/class");
      return data;
    },
  });
  const yogaclass = products.filter(function (cls) {
    return cls.Tags[0] === "Yoga";
  });
  // console.log(yogaclass);
  const HIIT = products.filter(function (cls) {
    return cls.Tags[0] === "HIIT";
  });
  const str = products.filter(function (cls) {
    return cls.Tags[0] === "Strength Training";
  });
  // console.log
  //
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/trainer");
      return data;
    },
  });
  // console.log(trainers);
  const yogaTrainer = trainers.filter(function (train) {
    return train.option2 === "Yoga";
  });

  const st = trainers.filter(function (train) {
    return train.option1 === "Strength Training";
  });
  // console.log(st);
  const hiit = trainers.filter(function (train) {
    return train.option3 === "HIIT";
  });
  // console.log(st);

  // console.log(yogaTrainer);
  //
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/class-count`)
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/classes?page=${currentPage}&size=${itemsPerPage}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage, search]);
  const handleItemsPerPage = (e) => {
    const val = parseInt(e?.target?.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
   
  };

  if (isLoading) return <Spinner className="mx-auto" />;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || All Class Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <div className="my-10">
        <form onSubmit={handleSearch}>
          <input type="text" name="search" />
          <input type="submit" value="Search" className="bg-teal-800 text-white font-bold mx-3 p-2 cursor-pointer rounded-lg" />
        </form>

        <Typography variant="h3" color="teal">
          Explore Your Potential: Discover Our Diverse Range of Fitness Classes
        </Typography>
        <Typography variant="paragraph">
          Find the perfect fit for your goals and unleash your inner athlete
          with our exciting class offerings!
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {yogaclass?.map((jj, idx) => (
          <ClassCard
            classes={classes}
            yogaTrainer={yogaTrainer}
            key={idx}
            jj={jj}
          />
        ))}
        {/* HIIT */}
        {HIIT?.map((jj, idx) => {
          return (
            <Card key={idx} className="max-w-[24rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={jj.image} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {jj.className}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  {jj.details}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  {hiit?.map((t, idx) => (
                    <Tooltip key={idx} content={t.fullName}>
                      <Link to={`/trainer-details/${t._id}`}>
                        <Avatar
                          size="sm"
                          variant="circular"
                          alt={t.fullName}
                          src={t.image}
                          className="border-2 border-white hover:z-10"
                        />
                      </Link>
                    </Tooltip>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
        {/* Strength  */}
        {str?.map((jj, idx) => {
          return (
            <Card key={idx} className="max-w-[24rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={jj.image} alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {jj.className}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  {jj.details}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  {st?.map((t, idx) => (
                    <Tooltip key={idx} content={t.fullName}>
                      <Link to={`/trainer-details/${t._id}`}>
                        <Avatar
                          size="sm"
                          variant="circular"
                          alt={t.fullName}
                          src={t.image}
                          className="border-2 border-white hover:z-10"
                        />
                      </Link>
                    </Tooltip>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="my-8">
        {/* <Pagination /> */}
        <div className="text-center">
          <p>Current page: {currentPage}</p>
          <Button className="mr-3" onClick={handlePrevPage}>
            Prev
          </Button>
          {pages.map((page) => (
            <Button
              className={currentPage === page ? "bg-teal-700 m-4" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </Button>
          ))}
          <Button className="m-4" onClick={handleNextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllClassPage;
