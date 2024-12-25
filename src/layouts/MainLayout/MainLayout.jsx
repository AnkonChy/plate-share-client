import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-montserrat">
      <div>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayout;
