import React from "react";
import { Link } from "react-router-dom";

const SideNavBlog = ({ blogs }) => {
  return (
    <div className="m-4">
      <div className="calculation-title">
        <h2 className="text-3xl my-5 font-sans italic">All Blogs</h2>
      </div>
      <div>
        <ol>
          {blogs.map((blog, i) => (
            <li className="course-name">
              <Link to={``} className="text-md my-6">
               {i+1}. {blog.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SideNavBlog;
