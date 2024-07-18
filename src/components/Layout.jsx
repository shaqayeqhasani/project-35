import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Navbar />
      <section >
        <Outlet />
      </section>

      <Footer />
    </>
  );
}
