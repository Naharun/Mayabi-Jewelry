import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import AllJewelry from "../pages/Home/AllJewelry/AllJewelry";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        {
          path: "/addJewelry",
          element: <AddJewelry></AddJewelry>
        },
        {
          path: "/allJewelry",
          element: <AllJewelry></AllJewelry>
        }
      ]
    },
  ]);