import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import './Slider.css'


const Slider = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <Carousel>
        <div className="relative">
          <img
            className="w-full rounded-md"
            src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg"
            alt=""
          />
          <div className="legends">
            <div className="max-w-lg">
              <h1 className="mb-5 text-3xl md:text-4xl font-bold">
                Hello, {user?.displayName ? user?.displayName : "There!"}
              </h1>
              <p className="mb-5">
                We provide some Premium Courses that's change your life
                destination from our Learning Fair.
              </p>
              <p className="text-2xl md:text-3xl font-semi-bold">
                So, Let's explore our Premium Pro Courses...
              </p>
              <Link to={"/courses"} className="btn mt-5 btn-primary">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg"
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
