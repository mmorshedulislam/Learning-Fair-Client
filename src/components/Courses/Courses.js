import React from "react";
import { useLoaderData } from "react-router-dom";
import SideNavCourse from "../Shared/SideNavCourse";
import Course from "./Course";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2 class="font-bold text-center text-4xl text-slate-500 mt-3">
        Featured Courses
      </h2>
      <div className="courses container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
        <div>
          <SideNavCourse courses={courses}></SideNavCourse>
        </div>
      </div>
    </div>
  );
};

export default Courses;
