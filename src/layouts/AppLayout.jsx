import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = () => {
  const location = useLocation();
  const authPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <React.Fragment>
      {authPage ? (
        <Outlet />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </React.Fragment>
  );
};

export default AppLayout;
