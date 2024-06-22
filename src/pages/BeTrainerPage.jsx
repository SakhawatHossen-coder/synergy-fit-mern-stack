import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BeTrainerPage = () => {
  // let loading = null;
  const axiosSecure = useAxiosSecure();
  let navigate = useNavigate();
  const { user, loading, setLoading } = useAuth();
  const options = [
    { value: "Sunday", label: "Sunday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday ", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];
  const slotOptions = [
    { value: "8:00AM - 10:00AM", label: "8:00AM - 10:00AM" },
    { value: "10:00AM - 12:00PM", label: "10:00AM - 12:00PM" },
    { value: "12:00PM - 02:00PM", label: "12:00PM - 02:00PM" },
    { value: "2:00PM - 4:00PM", label: "2:00PM - 4:00PM" },
    { value: "4:00PM - 6:00PM", label: "4:00PM - 6:00PM" },
  ];
  const [weekVal, setWeekVal] = useState([]);
  const [slotVal, setSlotVal] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedOption: "", // Or an initial value from your options array
    },
  });
  //data send to db

  const { mutateAsync } = useMutation({
    mutationFn: async (trainerData) => {
      let { data } = await axiosSecure.post(`/trainer`, trainerData);
      return data;
    },
    onSuccess: () => {
      // console.log("data saved successfully");
      toast.success("Your Application for Trainer Successful!");
      reset();
      navigate("/");
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const { age, availableTime, fullName, image } = data;
    const selectedOptions = Object.entries(data)
      .filter(([, isChecked]) => isChecked) // Filter checked options
      .map(([optionName]) => optionName); // Extract option names

    // console.log("Selected options:", selectedOptions);
    const newTrainerInfo = {
      ...data,
      email: user?.email,
      weekDays: weekVal,
      // slot: slotVal,
      status: "Pending",
      userRole: "Member",
    };
    // console.log(newTrainerInfo);

    try {
      //post to server
      await mutateAsync(newTrainerInfo);
    } catch (error) {
      toast.error("Trainer Data Failed!");
      setLoading(false);
    }
  };
  const handleChange = (selectedOption) => {
    // console.log("handleChange", selectedOption); // Access the selected value
    let newDays = [];
    selectedOption.map((val) => {
      // console.log(val.value);
      let newVal = val.value;
      newDays.push(newVal);
    });
    setWeekVal(newDays);
    // console.log(newDays);
  };
  const handleChangeDay = (selectedOption) => {
    let newSlot = [];
    selectedOption.map((val) => {
      // console.log(val.value);
      let newVal = val.value;
      newSlot.push(newVal);
    });
    setSlotVal(newSlot);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Be a Trainer Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <div className="isolate bg-white px-6 py-4 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Become a Professional Trainer With Us
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
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("fullName", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email")}
                  defaultValue={user?.email}
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
                  {...register("age", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Brief BioData"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Brief BioData
              </label>
              <div className="mt-2.5">
                <textarea
                  type="number"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("bioData", { required: true })}
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
                htmlFor="Image"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Profile Image
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

            <div className="flex gap-0">
              <label
                htmlFor="skills"
                className="block text-sm font-semibold  text-gray-900"
              >
                Skills
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-teal-600"
                  {...register("option1")}
                />
                <input
                  value="Strength Training"
                  className="ml-2 text-gray-700"
                  disabled
                  {...register("option1")}
                ></input>
              </label>

              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-teal-600"
                  {...register("option2")}
                />
                <input
                  value="Yoga"
                  className="ml-2 w-[4rem] text-gray-700"
                  disabled
                  {...register("option2")}
                ></input>
              </label>

              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-teal-600"
                  {...register("option3")}
                />
                <input
                  value="HIIT"
                  {...register("option3")}
                  disabled
                  className="ml-2 text-gray-700"
                ></input>
              </label>
            </div>
            <div>
              <label
                htmlFor="Available Days a Week"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Available Days a Week
              </label>
              <Select
                // defaultValue={[options[2], options[3]]}
                isMulti
                onChange={handleChange}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                required
              ></Select>
            </div>

            <div>
              <label
                htmlFor="Available time in a day"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Available time in a day
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="time"
                  id=""
                  {...register("timeSlot", { required: true })}
                />
                {/* <Select
                  
                  isMulti
                  onChange={handleChangeDay}
                  options={slotOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  required
                ></Select> */}
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
export default BeTrainerPage;
