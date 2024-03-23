import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Home/Shared/Auth/Login/Login";
import SignUp from "../page/Home/Shared/Auth/SignUp/SignUp";
import RoomDetails from "../Components/RoomDetails/RoomDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/room-details",
          element: <RoomDetails></RoomDetails>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <SignUp></SignUp>,
        }
      ]
    },
  ]);