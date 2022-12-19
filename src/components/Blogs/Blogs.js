import React from "react";
import { useLoaderData } from "react-router-dom";
import SideNavBlog from "../Shared/SideNavBlog";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="courses container mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div>
        <SideNavBlog blogs={blogs}></SideNavBlog>
      </div>
    </div>
  );
};

export default Blogs;
