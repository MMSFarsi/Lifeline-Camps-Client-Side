import CampDetails from "@/components/CampDetails";
import { Button } from "@/components/ui/button";
import Dashboard from "@/Layout/Dashboard";
import MainLayout from "@/Layout/MainLayout";
import AvailableCamp from "@/Pages/AvailableCamp/AvailableCamp";
import AddCamp from "@/Pages/Dashboard/Admin/AddCamp/AddCamp";

import AdminProfile from "@/Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageCamp from "@/Pages/Dashboard/Admin/ManageCamp/ManageCamp";
import ManageRegisteredCamps from "@/Pages/Dashboard/ManageRegisteredCamps/ManageRegisteredCamps";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/JoinUs/Login";
import Register from "@/Pages/JoinUs/Register";
import { createBrowserRouter } from "react-router-dom";

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
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'addCamp',
          element:<AddCamp></AddCamp>
        },
        {
          path:'organizerProfile',
          element:<AdminProfile></AdminProfile>
        },
        {
          path:'manageCamp',
          element:<ManageCamp></ManageCamp>
        },
        {
          path:'manageRegisteredCamps',
          element:<ManageRegisteredCamps></ManageRegisteredCamps>
        },
      ]
    }
  ])