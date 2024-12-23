import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayout;