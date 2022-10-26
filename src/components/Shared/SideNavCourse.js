import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./SideNavCourse.css";

const SideNavCourse = ({ courses }) => {
  const coursesLoad = useLoaderData();
  return (
    <div>
      <div className="calculation-title">
        <h2 className="text-4xl my-5 font-sans">
          All Courses : {courses?.length}
        </h2>
      </div>
      <div className="border border-[#303952] rounded-md px-8 py-10">
        <ul>
          {courses?.map((c) => (
            <li className="my-6 course-name">
              <Link to={`/course/${c.id}`} className="text-xl">
                {c?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavCourse;
