import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import heroImage from "../assets/img/heroImage/hero-image.webp";
import Slogan from "../components/Slogan";
import CakeProducts from "../components/CakeProducts";
import ScrollToTop from "../components/ScrollToTop";
import cakeData from "../assets/data/cakeData.json";

const ProductsPage = () => {
  const cakes = cakeData.cakes;

  return (
    <>
      <Navbar />
      <HeroComponent image={heroImage} title={"Produk Kami"} />
      <div className="py-8 lg:py-10">
        <div className="bg-primary bg-opacity-20">
          <Slogan />
          <CakeProducts cakes={cakes} />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProductsPage;
