import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import Offers from "../pages/Offers/Offers";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstateDetails from "../pages/Estate/EstateDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/estateData.json')
        },
        {
            path: '/updateProfile',
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: '/userProfile',
            element: <UserProfile></UserProfile>
        },
        {
            path: '/offers',
            element: <Offers></Offers>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/estateDetails/:id',
            element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
            loader: () => fetch('/estateData.json')
        },
      ]
    },
  ]);

  export default router;