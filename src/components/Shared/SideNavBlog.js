import React from "react";
import { Link } from "react-router-dom";

const SideNavBlog = ({ blogs }) => {
  return (
    <>
      <div className="calculation-title">
        <h2 className="text-4xl my-5 font-sans italic">All Blogs</h2>
      </div>
      <div className="border border-[#303952] rounded-md py-10">
        <ol>
          {blogs.map((blog) => (
            <li className="course-name">
              <Link to={``} className="text-xl my-6">
                {blog.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default SideNavBlog;
