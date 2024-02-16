import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroComponent from "../components/HeroComponent";
import image1 from "../assets/img/heroImage/cheeseCake.webp";
import Footer from "../components/Footer";
import Contact from "../components/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent image={image1} title={"Hubungi Kami"} />
      <div className="container py-8 lg:py-10">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
