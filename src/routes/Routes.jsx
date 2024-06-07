import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layouts/Layout";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import DashStat from "../dashboard/DashStat";
import BeTrainerPage from "../pages/BeTrainerPage";
import AllTrainersPage from "../pages/AllTrainersPage";
import DetailsTrainer from "../pages/DetailsTrainer";
import TrainerBookingPage from "../pages/TrainerBookingPage";
import ForumPage from "../pages/ForumPage";
import AllTrainersAdmin from "../dashboard/AllTrainersAdmin";
import AppliedTrainersAdmin from "../dashboard/AppliedTrainersAdmin";
import AddNewClassAdmin from "../dashboard/AddNewClassAdmin";
import AllClassPage from "../pages/AllClassPage";
import UserProfile from "../dashboard/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/all-trainers",
        element: <AllTrainersPage />,
      },
      {
        path: "/all-class",
        element: <AllClassPage />,
      },
      {
        path: "/become-trainer",
        element: <BeTrainerPage />,
      },
      {
        path: "/forum-post",
        element: <ForumPage />,
      },
      {
        path: "/trainer-booking-page/:trainer/:time",
        element: <TrainerBookingPage />,
      },
      {
        path: `/trainer-details/:id`,
        element: <DetailsTrainer />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashStat />,
      },
      {
        path: "all-trainers-admin",
        element: <AllTrainersAdmin />,
      },
      {
        path: "applied-trainers-admin",
        element: <AppliedTrainersAdmin />,
      },
      {
        path: "add-classes",
        element: <AddNewClassAdmin />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
    ],
  },
]);
