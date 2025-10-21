import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = () => {
  const location = useLocation();
  const logInPage = location.pathname === "/login";
  return (
    <React.Fragment>
      {logInPage ? (
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
