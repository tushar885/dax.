import React from "react";
import Navbar from "./Navbar";
import HomeMain from "./HomeMain";
import Footer from "./Footer";
import TransactionForm from "./TransactionForm";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="AppLayout relative bg-bg_main flex justify-center min-h-screen h-fit p-10 dark_theme font-Josefin">
      <div className="max-w-xl w-full relative flex flex-col ">
        <Navbar />
        <Outlet />
        {/* <HomeMain />
        <TransactionForm /> */}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
