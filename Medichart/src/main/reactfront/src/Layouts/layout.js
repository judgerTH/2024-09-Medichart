import Header from "./header";
import Footer from "./footer";
import React from "react";
<<<<<<< HEAD
import styles from "../Layouts/layout.module.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
=======
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
