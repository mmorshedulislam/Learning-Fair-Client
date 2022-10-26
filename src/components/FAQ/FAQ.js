import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleFAQ from "./SingleFAQ";

const FAQ = () => {
  const faq = useLoaderData();
  return (
    <div className="container g-5">
      <h2 className="text-center text-4xl my-5">Frequently ask and Questions.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {faq.map((question) => (
          <SingleFAQ key={question.id} question={question}></SingleFAQ>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
