import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavCourse.css";

const SideNavCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://learning-platform-server-three.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="calculation-title">
        <h2 className="text-4xl my-5 font-sans">All Courses</h2>
      </div>
      <div className="border border-[#303952] py-10">
        <ul>
          {courses?.map((c) => (
            <li className="course-name">
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
