import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import AllJewelry from "../pages/Home/AllJewelry/AllJewelry";
import Errorpage from "../pages/Errorpage/Errorpage";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Errorpage></Errorpage>,
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
        },
        {
          path: "/myJewelry",
          element: <MyJewelry></MyJewelry>
        }
      ]
    },
  ]);