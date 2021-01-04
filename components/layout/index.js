import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>TheSocialApp</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
