import React from "react";
import { Spinner } from "@material-tailwind/react";

import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddNewClassAdmin = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedOption: "", // Or an initial value from your options array
    },
  });
  //data send to db

  const { mutateAsync } = useMutation({
    mutationFn: async (classData) => {
      let { data } = await axiosSecure.post(`/classes`, classData);
      return data;
    },
    onSuccess: () => {
      console.log("Class data saved successfully");
      toast.success("Class data saved successfully");
      // navigate("/")
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const newClassInfo = { ...data };
    try {
      //post to server
      await mutateAsync(newClassInfo);
    } catch (error) {
      toast.error("class Data Failed!");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add Gym Classess
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="Full Name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Class Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("className", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Image"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("image", { required: true })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Brief BioData"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Brief Details
              </label>
              <div className="mt-2.5">
                <textarea
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("details", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Expertise"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Expertise
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("expertise", { required: true })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Years of Experience"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Years of Experience
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  id="last-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("experience", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              disabled={loading}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? <Spinner className="animate-spin m-auto" /> : "Apply"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewClassAdmin;
