import React from "react";
import Course from "../Courses/Course";
import SideNavBlog from "../Shared/SideNavBlog";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="courses container mx-auto mt-12">
      <div className="grid grid-cols-2 gap-4">
        <Blog></Blog>
        <Blog></Blog>
      </div>
      <div>
        <SideNavBlog></SideNavBlog>
      </div>
    </div>
  );
};

export default Blogs;
