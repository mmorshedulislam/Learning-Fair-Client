import React from "react";

const SingleFAQ = ({question}) => {
    const {answer} = question; 
  return (
    <div className="card card-side bg-base-100 shadow-xl m-3">
      <div className="card-body">
        <h2 className="card-title">{question.question}</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default SingleFAQ;
