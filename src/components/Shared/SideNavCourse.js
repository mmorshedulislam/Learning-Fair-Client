import React from "react";
import { Link } from "react-router-dom";

const SideNavCourse = () => {
  return (
    <div>
      <h2 className="text-5xl my-5">All Courses</h2>
      <ol>
        <li>
          <Link to={``} className="text-2xl my-4">
            Web Development
          </Link>
        </li>
        <li>
          <Link to={``} className="text-2xl my-4">
            App Development
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default SideNavCourse;
