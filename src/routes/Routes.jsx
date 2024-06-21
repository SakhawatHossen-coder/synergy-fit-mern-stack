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
import AddSlotTrainer from "../dashboard/AddSlotTrainer";
import ManageSlotTrainer from "../dashboard/ManageSlotTrainer";
import Payment from "../pages/Payment";
import TrainerBook from "../pages/TrainerBook";
import PaymentBasicPage from "../pages/payments/PaymentBasicPage";
import PaymentStandardPage from "../pages/payments/PaymentStandardPage";
import PaymentPremiumPage from "../pages/payments/PaymentPremiumPage";
import ActivityPage from "../dashboard/ActivityPage";
import Recommend from "../dashboard/Recommend";
import BalanceAdmin from "../dashboard/BalanceAdmin";

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
      {
        path: `/trainer-booking/:id/:day/:trainer`,
        element: (
          <PrivateRoute>
            <TrainerBook />
          </PrivateRoute>
        ),
      },
      {
        path: `/payment/basic/:id/:trainer/:day`,
        element: (
          <PrivateRoute>
            <PaymentBasicPage />
          </PrivateRoute>
        ),
      },
      {
        path: `/payment/standard/:id/:trainer/:day`,
        element: (
          <PrivateRoute>
            <PaymentStandardPage />
          </PrivateRoute>
        ),
      },
      {
        path: `/payment/premium/:id/:trainer/:day`,
        element: (
          <PrivateRoute>
            <PaymentPremiumPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "all-news-letter",
        element: (
          <PrivateRoute>
            <DashStat />
          </PrivateRoute>
        ),
      },
      {
        path: "all-trainers-admin",
        element: (
          <PrivateRoute>
            <AllTrainersAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "applied-trainers-admin",
        element: (
          <PrivateRoute>
            <AppliedTrainersAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "balance-admin",
        element: (
          <PrivateRoute>
            <BalanceAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "add-classes",
        element: (
          <PrivateRoute>
            <AddNewClassAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-forum",
        element: (
          <PrivateRoute>
            <AddForumPage />
          </PrivateRoute>
        ),
      },
      {
        path: "add-slot",
        element: (
          <PrivateRoute>
            <AddSlotTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-slot",
        element: (
          <PrivateRoute>
            <ManageSlotTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "activity-log",
        element: (
          <PrivateRoute>
            <ActivityPage />
          </PrivateRoute>
        ),
      },
      {
        path: "recommend",
        element: (
          <PrivateRoute>
            <Recommend />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
