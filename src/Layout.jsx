import React, { useEffect } from "react";
import Header from "./Components/Shared/Header";
import { Outlet, useLocation, useNavigation } from "react-router";
import Footer from "./Components/Shared/Footer";

const Layout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header></Header>
      {isLoading ? (
        <div className="flex items-center justify-center py-50">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer> </Footer>
    </>
  );
};

export default Layout;
