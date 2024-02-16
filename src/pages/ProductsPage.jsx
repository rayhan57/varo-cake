import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import image1 from "../assets/img/heroImage/nastarCake.webp";
import Slogan from "../components/Slogan";
import CakeProducts from "../components/CakeProducts";
import ScrollToTop from "../components/ScrollToTop";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent image={image1} title={"Produk Kami"} />
      <div className="py-8 lg:py-10">
        <div className="bg-primary bg-opacity-20">
          <Slogan />
          <CakeProducts />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProductsPage;
