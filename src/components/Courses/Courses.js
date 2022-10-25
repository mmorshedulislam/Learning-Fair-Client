import React from "react";
import SideNavCourse from "../Shared/SideNavCourse";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  return (
    <div>
      <h2 className="text-5xl text-center mt-3">Our Courses</h2>
      <div className="courses container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
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
    </div>
  );
};

export default Courses;
