import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import log from "../assets/login.svg";
const LoginPage = () => {
  const { login, googleLogin, setLoading, user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosCommon = useAxios();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let { email, password } = data;
   
    try {
      setLoading(true);
      await login(email, password);
      navigate(location?.state || "/");
      toast.success("login successful");
    } catch (error) {
      console.error(error);
      toast.error("login failed");
      setLoading(false);
    }
  };
  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      const res = await googleLogin();
      const userInfo = {
        email: res?.user?.email,
        name: res?.user?.displayName,
      };
      const result = await axiosCommon.post("/user", userInfo);
      // return console.log();
      console.log(result);
      if (result.status) {
        navigate("/");
        return toast.success("User sign in  Successfully!");
      }
      if (result.data.insertedId) {
        navigate("/");
        console.log("db save");
        return toast.success("User created Successfully!");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <>
      <div className="h-screen flex">
        <img src={log} alt="" />

        <div className="flex w-1/2 justify-center items-center bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
               
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Forgot Password ?
            </span>
            <span>
              <h2>
                Don't have Account?{" "}
                <Link to="/register" className="underlined text-blue-500">
                  Register Now
                </Link>
              </h2>
            </span>
            <div>
              <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3 my-5"
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                Continue with Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
