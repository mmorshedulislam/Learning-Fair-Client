import React from "react";

const Blog = ({ blog }) => {
  const { img, title, description, options } = blog;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {options ? options.map((option) => <li>{option}</li>) : ""}
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
