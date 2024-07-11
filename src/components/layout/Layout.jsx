import React from "react";
import Nav from "../navBar/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
