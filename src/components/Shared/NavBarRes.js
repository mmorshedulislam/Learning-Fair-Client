import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const NavBarRes = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
                <NavLink to={"/blogs"} className="text-xl mx-4">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold italic">
            Learning Fair
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
          <input type="checkbox" className="toggle mr-3" />
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
                  <img src={user?.photoURL} alt="" className="rounded-full" />
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
