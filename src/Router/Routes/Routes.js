import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

import errorPhoto from "../../Assets/errorPhoto.png";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import AddServices from "../../Pages/AddServices/AddServices";
import PersonalReview from "../../Pages/PersonalReview/PersonalReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://capture-the-moment-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/myreviews",
        element: <PersonalReview></PersonalReview>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="max-w-screen-2xl mx-auto my-10">
        <img className="mx-auto" src={errorPhoto} alt="" />
      </div>
    ),
  },
]);

export default router;
