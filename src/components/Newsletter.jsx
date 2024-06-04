import { Button } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";

const Newsletter = () => {
  let axiosCommon = useAxios();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let { name, email } = data;
    let subscriberInfo = {
      name,
      email,
    };
    try {
      let result = await axiosCommon.post("/newsletter", subscriberInfo);
      //  console.log(result);
      //  throw new Error("This is a custom error message!");
      if (result.data.insertedId) {
        toast.success("Newsletter Subscribed Done!");
      }
      reset();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal-900 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Unleash Your Potential: News & Fitness Inspiration from SynargyFit
              || Sign up for our newsletter
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-100">
              We're excited to share some fitness inspiration, helpful tips, and
              exciting news to keep you motivated on your wellness journey.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form
              className="sm:flex space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="name" className="sr-only">
                User Name
              </label>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-md sm:mr-3 border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
                placeholder="Your email"
                {...register("email", { required: true })}
              />
              <input
                type="checkbox"
                value="1"
                className="hidden"
                tabindex="-1"
                autocomplete="off"
              />
              <Button
                type="submit"
                variant="filled"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent  px-5 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
