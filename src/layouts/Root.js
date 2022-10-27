import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
