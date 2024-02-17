import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const HeroHomePage = ({ cakes }) => {
  return (
    <div className="relative h-[86vh] md:h-screen lg:h-[86vh]">
      <Swiper
        navigation={true}
        speed={1500}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cakes.map((cake, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/assets/img/${cake.images[0]}`}
              alt={cake.name}
              className="h-full w-full object-cover brightness-50"
            />
            <div className="absolute left-0 top-0 flex h-full w-full items-center ps-4 text-white lg:ps-20">
              <div className="max-w-2xl space-y-3 text-start lg:space-y-5">
                <h1 className="font-playfair text-5xl font-bold lg:text-7xl">
                  {cake.name}
                </h1>
                <p className="line-clamp-2 lg:text-xl">{cake.description}</p>
                <br />
                <Link
                  to={`/products/${cake.id}`}
                  className="inline-block rounded-full bg-primary px-6 py-3 font-semibold hover:bg-hover lg:px-8 lg:py-4 lg:text-lg"
                >
                  Baca selengkapnya
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <span className="absolute bottom-0 left-1/2 z-10 h-16 w-16 -translate-x-1/2 rotate-45 bg-white lg:-bottom-2 lg:h-20 lg:w-20"></span>
      </Swiper>
    </div>
  );
};

export default HeroHomePage;
