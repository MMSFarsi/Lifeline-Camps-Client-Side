import CampDetails from "@/components/CampDetails";
import { Button } from "@/components/ui/button";
import MainLayout from "@/Layout/MainLayout";
import AddCamp from "@/Pages/AddCamp/AddCamp";
import AvailableCamp from "@/Pages/AvailableCamp/AvailableCamp";
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
        {
          path:"/addCamp",
          element:<AddCamp></AddCamp>
        },
      ]
    }
  ])