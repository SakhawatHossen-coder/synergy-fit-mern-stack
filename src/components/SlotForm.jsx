import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import Select from "react-select";
import { Spinner } from "@material-tailwind/react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const SlotForm = ({ t, isLoading }) => {
  const { user, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const axiosCommon = useAxios();
  const [tags, setTags] = useState([]);
  const [day, setDay] = useState([]);
  const [arr, setArr] = useState(null);
  //get all classes

  const { data: classes = [] } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/class");
      return data;
    },
  });
  console.log(classes);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   const options2 = [
  //     { value: t.weekDays.map((d) => d), label: t.weekDays.map((d) => d) },
  //   ];
  const options = [
    { value: t.weekDays[0], label: t.weekDays[0] },
    { value: t.weekDays[1], label: t.weekDays[1] },
    { value: t.weekDays[2], label: t.weekDays[2] },
    { value: t.weekDays[3], label: t.weekDays[3] },
    { value: t.weekDays[4], label: t.weekDays[4] },
    { value: t.weekDays[5], label: t.weekDays[5] },
    { value: t.weekDays[6], label: t.weekDays[6] },
  ];
  //   console.log(day);
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

  const handleClass = (selectedOption) => {
    let newTags = [];
    selectedOption.map((val) => {
      // console.log(val.value);
      let newVal = val.value;
      newTags.push(newVal);
    });
    setDay(newTags);
  };
  let classTag = () =>
    classes?.map((cls, idx) => {
      return { value: cls.Tags[0], label: cls.Tags[0] };
      return cls.Tags[0];
      let newArr = [];
      // newArr.push(cls.Tags);
      console.log(cls.Tags);
      // console.log(cls.Tags[1])
      cls?.Tags?.map((val) => {
        // console.log(val.value);

        newArr.push(val);
      });
      // setArr(newArr);
    });
  console.log(classTag());
  const options2 = classTag();
  const { mutateAsync } = useMutation({
    mutationFn: async (slotData) => {
      let { data } = await axiosCommon.post(`/slotpost`, slotData);
      return data;
    },
    onSuccess: () => {
      console.log("Slot saved successfully");
      toast.success("Slot saved successfully");
      reset();
      // navigate("/all-forum-post");
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const newSlotInfo = {
      ...data,
      days: tags,
      class:day,
      fullName: t?.fullName,
      age: t?.age,
      expertise: t?.expertise,
      bio: t?.bioData,
      exp: t?.experience,
    };
    try {
      //post to server
      await mutateAsync(newSlotInfo);
    } catch (error) {
      toast.error("Slot Data Failed!");
      setLoading(false);
    }
  };
  return (
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
            Full Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={t?.fullName}
              disabled
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Age"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Age
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={t?.age}
              disabled
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Brief BioData"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Bio Data
          </label>
          <div className="mt-2.5">
            <textarea
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={t?.bioData}
              disabled
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="days"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Select Days
          </label>
          <Select
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
            htmlFor="Slot Name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Slot Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="last-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("SlotName", { required: true })}
              placeholder="Slot Name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Experience"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Experience
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="last-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={t?.experience}
              disabled
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
              id="last-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={t?.expertise}
              disabled
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="classes"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Classes
          </label>

          <Select
            isMulti
            onChange={handleClass}
            options={options2}
            // options={classes?.map((cls, idx) => [
            //   { value: cls.Tags[0], label: cls.Tags[0] },
            // ])}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          ></Select>
        </div>
        <div>
          <label
            htmlFor="Slot Time"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Slot Time
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              id="last-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("slotTime", { required: true })}
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
  );
};

export default SlotForm;
