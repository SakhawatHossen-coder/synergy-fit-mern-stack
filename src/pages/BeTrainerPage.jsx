import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";

const BeTrainerPage = () => {
  let loading = null;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add Your Desire Room
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="Room Name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Room Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Room Name", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Price per Night"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Price per Night
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Price per Night", { required: true })}
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
                  {...register("Availability", { required: true })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Availability"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Availability
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Availability", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Special Offers"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Special Offers
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Special Offers", { required: true })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Short Description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Short Description
              </label>
              <div className="mt-2.5">
                <textarea
                  name="Short Description"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Short Description", { required: true })}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              disabled={loading}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <Spinner className="animate-spin m-auto" />
              ) : (
                "Add Room"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default BeTrainerPage;
