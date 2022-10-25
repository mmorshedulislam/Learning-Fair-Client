import React from "react";
import SideNavCourse from "../Shared/SideNavCourse";
import './CourseDetails.css'

const CourseDetails = () => {
  return (
    <div className="course-detail container mx-auto mt-12">
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/200/280/arch" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Premium</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SideNavCourse></SideNavCourse>
      </div>
    </div>
  );
};

export default CourseDetails;
