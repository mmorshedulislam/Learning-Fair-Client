import React from "react";
import { Link } from "react-router-dom";

const Links = ({ route }) => {
  return (
    <div>
      <li className="mr-6">
        <Link to={route.path}>{route.name}</Link>
      </li>
    </div>
  );
};

export default Links;
