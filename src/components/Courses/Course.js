import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, description, img, price } = course;

  return (
    <div className="card card-compact shadow-xl mx-4 lg:mx-0">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)} ...</p>
        <div className="card-actions justify-end">
          <p className="text-xl">
            <strong>Price: </strong> ${price}
          </p>
          <Link to={`/course/${course?.id}`} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
