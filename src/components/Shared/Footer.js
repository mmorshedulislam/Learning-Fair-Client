import React, { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  const [courses, setCourses] = useState([]);
  const menu = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Courses", path: "/courses" },
    { id: 3, name: "FAQ", path: "/faq" },
    { id: 4, name: "Blogs", path: "blogs" },
  ];

  useEffect(() => {
    fetch("https://learning-platform-server-three.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="bg-[#19180F] py-24 text-[#DFEBD9] px-8 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
        <div>
          <Link
            to={"/"}
            className="text-2xl lg:text-3xl font-bold italic flex items-center"
          >
            <FaLaptopCode /> <span className="ml-2">Learning Fair</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl lg:text-2xl font-bold">Navigation</h2>
          {menu.map((m) => (
            <Link to={m.path} className="lg:text-xl my-1">
              {m.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl lg:text-2xl font-bold">Courses</h2>
          {courses.map((c) => (
            <Link to={`/course/${c?.id}`} className="lg:text-xl my-1">
              {c.title}
            </Link>
          ))}
        </div>
      </div>

      <hr className="my-5" />

      <div className="social-icons flex justify-center">
        <a href={"https://facebook.com/m.morshedul.islam.100"}>
          <FaFacebook></FaFacebook>
        </a>
        <a href={"https://www.linkedin.com/in/m-morshedul-islam-100/"}>
          <FaLinkedinIn></FaLinkedinIn>
        </a>
        <a href={"https://github.com/mmorshedulislam"}>
          <FaGithub></FaGithub>
        </a>
        <a href={"https://www.instagram.com/dev_morshed/"}>
          <FaInstagram></FaInstagram>
        </a>
      </div>
      <p className="text-center mt-5"> © Copyright All Right Reserved.</p>
    </div>
  );
};

export default Footer;
