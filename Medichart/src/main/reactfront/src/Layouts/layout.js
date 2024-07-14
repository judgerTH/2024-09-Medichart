import Header from "./header";
import Footer from "./footer";
import React from "react";
import styles from "../Layouts/layout.module.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
