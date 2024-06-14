import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Recommend = () => {
  ///recommend-class
  const axiosCommon = useAxios();
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/recommend-class`);
      return data;
    },
  });

  if (isLoading) return <Spinner className="mx-auto" />;
  console.log(classes);
  return (
    <div>
      <div className="my-10">
        <Typography variant="h3" color="teal">
          Explore Your Potential: We Recommend You Diverse Range of Fitness
          Classes
        </Typography>
        <Typography variant="paragraph">
          Find the perfect fit for your goals and unleash your inner athlete
          with our exciting class offerings!
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes?.map((jj, idx) => (
          <Card className="max-w-[24rem] overflow-hidden" key={idx}>
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
            <CardFooter className="flex items-center justify-between"></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Recommend;
