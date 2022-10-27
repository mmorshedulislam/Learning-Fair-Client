import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen">
        <div className=""></div>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold">
              Hello, {user?.displayName ? user?.displayName : "There!"}
            </h1>
            <p className="mb-5">
              We provide some Premium Courses that's change your life
              destination from our Learning Fair.
            </p>
            <p className="text-2xl md:text-3xl font-semi-bold">
              So, Let's explore our Premium Courses...
            </p>
            <Link to={"/courses"} className="btn mt-5 btn-primary">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3"></div>
    </div>
  );
};

export default Home;
