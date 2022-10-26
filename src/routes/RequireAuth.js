import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const RequireAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default RequireAuth;
