import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarNavbar from "../components/NavbarNavbar";

const Layout = () => {
  return (
    <>
      <div className="mb-12">
        <NavbarNavbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
