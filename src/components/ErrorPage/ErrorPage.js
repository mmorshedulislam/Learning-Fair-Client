import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2 className="text-center text-6xl mt-12">Oops, Error!</h2>
      <p className="text-4xl text-center mt-5">{error.message || error.status} Page Not Found</p>
    </div>
  );
};

export default ErrorPage;
