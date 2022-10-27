import React from "react";

const SingleFAQ = ({ question }) => {
  const { answer } = question;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3 text-white"
    >
      <div className="collapse-title text-xl font-medium">
        {question.question}
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default SingleFAQ;
