import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";

import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import Select from "react-select";

const AddForumPage = () => {
  const [tags, setTags] = useState([]);

  const { user, loading, setLoading } = useAuth();
  const axiosCommon = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedOption: "", // Or an initial value from your options array
    },
  });
  const options = [
    { value: "Gym", label: "Gym" },
    { value: "Yoga", label: "Yoga" },
    { value: "Physical", label: "Physical" },
    { value: "Mind Relax", label: "Mind Relax" },
    { value: "Meditation", label: "Meditation" },
  ];
  const handleTags = (selectedOption) => {
    let newTags = [];
    selectedOption.map((val) => {
      // console.log(val.value);
      let newVal = val.value;
      newTags.push(newVal);
    });
    setTags(newTags);
  };
  //data send to db

  const { mutateAsync } = useMutation({
    mutationFn: async (classData) => {
      let { data } = await axiosCommon.post(`/forumpost`, classData);
      return data;
    },
    onSuccess: () => {
      console.log("Forum post saved successfully");
      toast.success("Forum post saved successfully");
      // navigate("/")
      reset();
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const newClassInfo = {
      ...data,
      userRole: "none",
      Tags: tags,
      writerName: user?.displayName,
    };
    try {
      //post to server
      await mutateAsync(newClassInfo);
    } catch (error) {
      toast.error("Forum Data Failed!");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add Forum Post
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="Post Title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Post Title
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("title", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Image"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Post Image
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
                Post Details
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
                htmlFor="Tags"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Post Tags
              </label>
              <Select
                // defaultValue={[options[2], options[3]]}
                isMulti
                onChange={handleTags}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                required
              ></Select>
            </div>

            <div>
              <label
                htmlFor="Years of Experience"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Writer Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="last-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("writerName")}
                  defaultValue={user?.displayName}
                  disabled
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
              {loading ? <Spinner className="animate-spin m-auto" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForumPage;
