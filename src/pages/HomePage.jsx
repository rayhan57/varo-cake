import React from "react";
import HeroHomePage from "../components/HeroHomePage";
import Navbar from "../components/Navbar/Navbar";
import SellingPoints from "../components/SellingPoints";
import About from "../components/About";
import Slogan from "../components/Slogan";
import CakeProducts from "../components/CakeProducts";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroHomePage />
      <div className="container">
        <SellingPoints />
        <About />
      </div>
      <div className="bg-primary bg-opacity-20">
        <Slogan />
        <CakeProducts />
      </div>
      <div className="container">
        <OurServices />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
