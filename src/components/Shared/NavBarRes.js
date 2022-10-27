import React, { useContext } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import DayNight from "./DayNight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const NavBarRes = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const menu = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Courses", path: "/courses" },
    { id: 3, name: "FAQ", path: "/faq" },
    { id: 4, name: "Blogs", path: "blogs" },
  ];
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
              {menu.map((m) => (
                <li key={m.id}>
                  <NavLink to={m.path} className="text-xl mx-4">
                    {m.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={"/"}
            className="lg:text-3xl font-bold italic text-black flex items-center"
          >
            <FaLaptopCode /> <span className="ml-2">Learning Fair</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menu.map((m) => (
              <li key={m.id}>
                <NavLink to={m.path} className="text-xl mx-4">
                  {m.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <DayNight></DayNight>
          {!user ? (
            <>
              <NavLink to={"/login"} className="text-xl mx-4">
                <FontAwesomeIcon icon={faRightToBracket} />
              </NavLink>
              <NavLink to={"/signup"} className="text-xl mx-4 hidden lg:block">
                <FontAwesomeIcon icon={faUserPlus} />
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
              <p onClick={signOut} className="ml-3">
                <FontAwesomeIcon icon={faRightToBracket} className="w-6 h-6" />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarRes;
