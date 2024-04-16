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
import OurAgents from "../pages/OurAgents/OurAgents";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/estateData.json')
        },
        {
            path: '/updateProfile',
            element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
            path: '/userProfile',
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
            path: '/offers',
            element: <PrivateRoute><Offers></Offers></PrivateRoute>
        },
        {
            path: '/ourAgents',
            element: <PrivateRoute><OurAgents></OurAgents></PrivateRoute>
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