import React from "react";
import { useParams } from "react-router-dom";
import heroImage from "../assets/img/heroImage/hero-image.webp";
import CakeDetail from "../components/CakeDetail";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar/Navbar";
import cakeData from "../assets/data/cakeData.json";
import ScrollToTop from "../components/ScrollToTop";

const ProductDetail = () => {
  const { id } = useParams();
  const cakes = cakeData.cakes;
  const cakeDetail = cakes.filter((cake) => cake.id == id)[0];

  return (
    <>
      <Navbar />
      <HeroComponent image={heroImage} title={"Rincian Kue"} />
      <div className="container mt-10 lg:mt-20">
        <CakeDetail cake={cakeDetail} />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProductDetail;
