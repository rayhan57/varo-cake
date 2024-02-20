import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroComponent from "../components/HeroComponent";
import heroImage from "../assets/img/heroImage/hero-image.webp";
import Footer from "../components/Footer";
import Contact from "../components/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop";
import MapLocation from "../components/Contact/MapLocation";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent image={heroImage} title={"Hubungi Kami"} />
      <div className="container py-8 lg:py-10">
        <Contact />
      </div>
      <MapLocation />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
