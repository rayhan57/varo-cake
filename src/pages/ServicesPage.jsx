import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroComponent from "../components/HeroComponent";
import heroImage from "../assets/img/heroImage/hero-image.webp";
import SellingPoints from "../components/SellingPoints";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent image={heroImage} title={"Layanan Kami"} />
      <div className="container py-8 lg:py-10">
        <SellingPoints />
        <OurServices />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ServicesPage;
