import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
