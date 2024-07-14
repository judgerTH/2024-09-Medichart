import Header from "./header";
import Footer from "./footer";
import React from "react";
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
