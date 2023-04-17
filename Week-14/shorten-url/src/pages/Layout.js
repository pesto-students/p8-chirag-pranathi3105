import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css"
const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;