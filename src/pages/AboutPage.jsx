import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroComponent from "../components/HeroComponent";
import heroImage from "../assets/img/heroImage/hero-image.webp";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent image={heroImage} title={"Tentang Kami"} />
      <div className="container py-8 lg:py-10">
        <About />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutPage;
