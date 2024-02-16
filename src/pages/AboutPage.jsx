import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroComponent from "../components/HeroComponent";
import image1 from "../assets/img/heroImage/nastarCake.webp";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent image={image1} title={"Tentang Kami"} />
      <div className="container py-8 lg:py-10">
        <About />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutPage;
