import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Slider from "./Slider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Slider></Slider>
    </div>
  );
};

export default Home;
