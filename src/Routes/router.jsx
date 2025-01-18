import CampDetails from "@/components/CampDetails";
import { Button } from "@/components/ui/button";
import Dashboard from "@/Layout/Dashboard";
import MainLayout from "@/Layout/MainLayout";
import AvailableCamp from "@/Pages/AvailableCamp/AvailableCamp";
import AddCamp from "@/Pages/Dashboard/Admin/AddCamp/AddCamp";

import AdminProfile from "@/Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageCamp from "@/Pages/Dashboard/Admin/ManageCamp/ManageCamp";
import ManageRegisteredCamps from "@/Pages/Dashboard/ManageRegisteredCamps/ManageRegisteredCamps";
import Analytics from "@/Pages/Dashboard/UserDashboard/Analytics";
import ParticipantProfile from "@/Pages/Dashboard/UserDashboard/ParticipantProfile";
import PaymentHistory from "@/Pages/Dashboard/UserDashboard/PaymentHistory";
import RegisteredCamps from "@/Pages/Dashboard/UserDashboard/RegisteredCamps";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/JoinUs/Login";
import Register from "@/Pages/JoinUs/Register";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import Payment from "@/Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<Register></Register>
        },
        {
          path:"/available-camps",
          element:<AvailableCamp></AvailableCamp>
        },
        {
          path: '/camp-details/:id',
          element:<CampDetails></CampDetails>
        },
       
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'addCamp',
          element:<AdminRoute><AddCamp></AddCamp></AdminRoute>
        },
        {
          path:'organizerProfile',
          element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          path:'manageCamp',
          element:<AdminRoute><ManageCamp></ManageCamp></AdminRoute>
        },
        {
          path:'manageRegisteredCamps',
          element:<AdminRoute><ManageRegisteredCamps></ManageRegisteredCamps></AdminRoute>
        },

        // USer Route
        {
          path:'analytics',
          element:<Analytics></Analytics>
        },
        {
          path:'participantProfile',
          element:<ParticipantProfile></ParticipantProfile>
        },
        {
          path:'registeredCamps',
          element:<RegisteredCamps></RegisteredCamps>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
        }
      ]
    }
  ])