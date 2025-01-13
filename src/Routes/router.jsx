import { Button } from "@/components/ui/button";
import MainLayout from "@/Layout/MainLayout";
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
      ]
    }
  ])