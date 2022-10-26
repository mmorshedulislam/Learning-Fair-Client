import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaDoorClosed, FaWindowClose } from "react-icons/fa";
import "./NavBar.css";
import Links from "./Link";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Courses", path: "/courses" },
    { id: 3, name: "Blogs", path: "/blogs" },
  ];

  return (
    <div className="container mx-auto py-3">
      <div className="flex justify-between items-center">
        <div className="brand">
          <img
            src="https://cdn.freelogodesign.org/files/432ee5c9e4c74b8b86f25209b729aafd/thumb/logo_200x200.png?v=638023434580000000"
            alt=""
            className="w-36 h-12 rounded-md"
          />
        </div>

        <nav className="menu bg-purple-200 w-full">
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl md:hidden"
          >
            {open ? <FaWindowClose /> : <FaBars />}
          </div>

          <ul
            className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${
              open ? "top-4" : "top-[-130px]"
            }`}
          >
            {routes.map((route) => (
              <Links key={route.id} route={route}></Links>
            ))}
          </ul>
        </nav>

        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/76395055?v=4?s=400"
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
