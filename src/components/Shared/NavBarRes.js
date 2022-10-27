import React, { useContext } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import DayNight from "./DayNight";

const NavBarRes = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="bg-slate-200 mx-auto md:px-20">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <NavLink to={"/home"} className="text-xl mx-4">
                  Home
                </NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink to={"/courses"} className="text-xl mx-4">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to={"/faq"} className="text-xl mx-4">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"} className="text-xl mx-4">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-xl lg:text-3xl font-bold italic text-black flex items-center"
          >
            <FaLaptopCode /> <span className="ml-2">Learning Fair</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to={"/home"} className="text-xl mx-4">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/courses"} className="text-xl mx-4">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to={"/faq"} className="text-xl mx-4">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blogs"} className="text-xl mx-4">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <DayNight></DayNight>
          {!user ? (
            <>
              <NavLink to={"/login"} className="text-xl mx-4">
                Log In
              </NavLink>
              <NavLink to={"/signup"} className="text-xl mx-4">
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <div className="w-10 " title={user?.displayName}>
                <Link to={"/update-profile"}>
                  <div className="avatar online">
                    <div className="w-24 rounded-full">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                </Link>
                {/* <FaUser></FaUser> */}
              </div>
              <button onClick={signOut} className="btn ml-3">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarRes;
