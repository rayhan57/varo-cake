import React from "react";
import cakeData from "../assets/data/cakeData.json";
import About from "../components/About";
import CakeProducts from "../components/CakeProducts";
import Footer from "../components/Footer";
import HeroHomePage from "../components/HeroHomePage";
import Navbar from "../components/Navbar/Navbar";
import OurServices from "../components/OurServices";
import ScrollToTop from "../components/ScrollToTop";
import SellingPoints from "../components/SellingPoints";
import Slogan from "../components/Slogan";

const HomePage = () => {
  const cakes = cakeData.cakes.slice(0, 3);

  return (
    <>
      <Navbar />
      <HeroHomePage cakes={cakes} />
      <div className="container">
        <SellingPoints />
        <About />
      </div>
      <div className="bg-primary bg-opacity-20">
        <Slogan />
        <CakeProducts cakes={cakes} />
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
