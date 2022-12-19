import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, description, img, price } = course;

  return (
    <div className="shadow-xl mx-4 lg:mx-0 rounded-md">
      <figure>
        <img className="w-full h-48 rounded-t-md" src={img} alt="Shoes" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)} ...</p>
        <div className="card-actions justify-end flex items-center justify-center">
          <p className="text-xl">
            <strong>Price: </strong> ${price}
          </p>
          <Link to={`/course/${course?.id}`} className="bg-green-400 py-2 px-3 rounded-md text-white">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
