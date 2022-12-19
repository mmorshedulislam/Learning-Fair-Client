import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideNavCourse from "../Shared/SideNavCourse";
import "./CourseDetails.css";
import { FaRegFilePdf } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, img, title, description, price } = course;

  const printComponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
    documentTitle: title,
    onAfterPrint: () => toast("Print Success"),
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 mx-auto mt-12 px-5">
      <div ref={printComponentRef} style={{ width: "100%" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 card card-side border border-md shadow-xl">
          <figure>
            <img src={img} alt="Movie" className="w-full md:min-w-48 max-w-full" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center my-3">
              <h2 className="card-title text-2xl">{title}</h2>
              <span className="text-3xl">
                <FaRegFilePdf onClick={handlePrint} className="cursor-pointer" />
              </span>
            </div>
            <p className="text-justify">{description}</p>
            <p className="italic">
              To get in-depth knowledge of <strong>{title}</strong>, feel free
              to join us our expert <strong>{title}</strong> Team.
            </p>
            <p className="text-xl">
              <strong>Price: </strong> ${price}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/checkout/${id}`} className="bg-green-400 py-2 px-3 rounded-md text-white font-semibold">
                Buy Premium
              </Link>
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
