import React from "react";
import SideNavCourse from "../Shared/SideNavCourse";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses container mx-auto mt-12">
      <div className="grid grid-cols-3 gap-4">
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </div>
      <div>
        <SideNavCourse></SideNavCourse>
      </div>
    </div>
  );
};

export default Courses;
