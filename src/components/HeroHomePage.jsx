import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cheeseCake from "../assets/img/heroImage/cheeseCake.webp";
import nastarCake from "../assets/img/heroImage/nastarCake.webp";
import snowWhiteCake from "../assets/img/heroImage/snowWhiteCake.webp";

import "swiper/css";
import "swiper/css/navigation";

const HeroHomePage = () => {
  const slides = [
    {
      title: "Kue Keju",
      description:
        "Rasakan kelezatan kue keju kami yang lembut dan gurih, dipersembahkan dengan cinta dan keterampilan.",
      src: cheeseCake,
      alt: "cheeseCake",
    },
    {
      title: "Kue Nastar",
      description:
        "Nikmati cita rasa tradisional kue nastar kami, dengan kombinasi manis dan lezat yang membuat Anda ingin kembali lagi.",
      src: nastarCake,
      alt: "nastarCake",
    },
    {
      title: "Kue Putri Salju",
      description:
        "Kue putri salju kami memberikan pengalaman lezat dengan lapisan gula halus yang mencair di mulut, menciptakan kenangan manis setiap kali menggigitnya.",
      src: snowWhiteCake,
      alt: "snowWhiteCake",
    },
  ];

  return (
    <div className="relative h-[86vh] md:h-screen lg:h-[86vh]">
      <Swiper
        navigation={true}
        speed={1500}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover brightness-50"
            />
            <div className="absolute left-0 top-0 flex h-full w-full items-center ps-4 text-white lg:ps-20">
              <div className="max-w-2xl space-y-3 text-start lg:space-y-5">
                <h1 className="font-playfair text-5xl font-bold lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="pb-2 lg:pb-5 lg:text-xl">{slide.description}</p>
                <button className="rounded-full bg-primary px-6 py-3 font-semibold hover:bg-hover lg:px-8 lg:py-4 lg:text-lg">
                  Baca selengkapnya
                </button>
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
