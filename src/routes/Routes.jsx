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
import AddForumPage from "../dashboard/AddForumPage";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <BeTrainerPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-forum-post",
        element: <ForumPage />,
      },
      {
        path: "/trainer-booking-page/:trainer/:time",
        element: (
          <PrivateRoute>
            <TrainerBookingPage />
          </PrivateRoute>
        ),
      },
      {
        path: `/trainer-details/:id`,
        element: (
          <PrivateRoute>
            <DetailsTrainer />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-news-letter",
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
      {
        path: "add-forum",
        element: <AddForumPage />,
      },
    ],
  },
]);
