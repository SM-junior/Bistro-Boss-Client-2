import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyCart from "../Pages/Dashboard/MyCart";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order";
import OurMenu from "../Pages/OurMenu/OurMenu";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from './PrivateRouter/PrivateRouter';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourMenu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/mycart',
          element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
        },
        {
          path:'/dashboard/allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);