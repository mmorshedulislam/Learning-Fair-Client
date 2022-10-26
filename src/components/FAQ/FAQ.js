import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactPdfPrint from "../ReactPdfPrint/ReactPdfPrint";
import SingleFAQ from "./SingleFAQ";

const FAQ = () => {
  const faq = useLoaderData();
  return (
    <div className="container g-5">
      <h2 className="text-center text-4xl my-5">
        Frequently ask and Questions.
      </h2>
      <div className="w-full lg:w-1/2 mx-auto">
        {faq.map((question) => (
          <SingleFAQ key={question.id} question={question}></SingleFAQ>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
