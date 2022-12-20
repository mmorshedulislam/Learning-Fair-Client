import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Slider.css";

const Slider = () => {
  const { user } = useContext(AuthContext);
  const slides = [
    {
      img: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg",
      title: "Welcome to Our Learning Fair!",
      desc: "You can join us by purchasing any one of our Life Changing Courses to turn your life around.",
    },
    {
      img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Data Science",
      desc: "You can join us by purchasing any one of our Life Changing Courses to turn your life around.",
      textColor: "text-black",
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg",
      title: "Artificial-Intelligence",
      desc: "You can join us by purchasing any one of our Life Changing Courses to turn your life around.",
      textColor: "text-black",
    },
  ];

  return (
    <div className="">
      <Carousel>
        {slides?.map((slide, i) => (
          <div key={i} className={`relative`}>
            <img className="w-full rounded-md" src={slide?.img} alt="" />
            <div className="legends">
              <div className="m-3">
                <h1
                  className={`lg:mb-5 text-2xl md:text-6xl font-bold text-[#7bf479]`}
                >
                  {slide?.title}
                </h1>
                <p className="mb-5 lg:text-2xl">{slide?.desc}</p>
                <Link to={"/courses"} className="bg-green-400 px-3 text-xl py-1 text-white rounded-sm cursor-pointer lg:mt-10 lg:inline-block">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
