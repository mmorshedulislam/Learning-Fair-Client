import React from "react";
import { Link } from "react-router-dom";

const SideNavCourse = ({ courses }) => {
  return (
    <div className="border border-[#303952] rounded-md px-8 py-10">
      <h2 className="text-4xl my-5 font-sans">
        All Courses : {courses?.length}
      </h2>
      <ul>
        {courses?.map((c) => (
          <li className="my-6">
            <Link to={`/course/:${c.id}`} className="text-xl">
              {c?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavCourse;
