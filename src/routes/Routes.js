import Blogs from "../components/Blogs/Blogs";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/Courses/CourseDetails";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import ForgotPassword from "../components/Login/ForgotPassword";
import Login from "../components/Login/Login";
import ProfileUpdate from "../components/ProfileUpdate/ProfileUpdate";
import SideNavCourse from "../components/Shared/SideNavCourse";
import SignUp from "../components/SignUp/SignUp";
import RequireAuth from "./RequireAuth";

const { createBrowserRouter } = require("react-router-dom");
const { default: ErrorPage } = require("../components/ErrorPage/ErrorPage");
const { default: Root } = require("../layouts/Root");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://learning-platform-server-three.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://learning-platform-server-three.vercel.app/course/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blogs",
        loader: () =>
          fetch(`https://learning-platform-server-three.vercel.app/blogs`),
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/update-profile",
        element: <ProfileUpdate></ProfileUpdate>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://learning-platform-server-three.vercel.app/course/${params.id}`
          ),
        element: (
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        ),
      },
      {
        path: "/sidenavcourse",
        loader: () =>
          fetch("https://learning-platform-server-three.vercel.app/courses"),
        element: <SideNavCourse></SideNavCourse>,
      },
    ],
  },
]);
