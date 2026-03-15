import React, { useEffect } from "react";
import Header from "./Components/Shared/Header";
import { Outlet, useLocation } from "react-router";
import Footer from "./Components/Shared/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer> </Footer>
    </>
  );
};

export default Layout;
