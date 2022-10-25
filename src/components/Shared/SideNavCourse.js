import React from "react";
import { Link } from "react-router-dom";

const SideNavCourse = () => {
  return (
    <div className="border border-pink-400 rounded-md px-8 py-10" >
      <h2 className="text-4xl my-5 font-sans">All Courses</h2>
      <ol>
        <li>
          <Link to={``} className="text-xl my-6">
            Web Development
          </Link>
        </li>
        <li>
          <Link to={``} className="text-xl my-6">
            App Development
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default SideNavCourse;
