import React from "react";
import Header from "./Components/Shared/Header";
import { Outlet } from "react-router";
import Footer from "./Components/Shared/Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer> </Footer>
    </>
  );
};

export default Layout;
