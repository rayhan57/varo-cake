import React from "react";

const HeroComponent = ({ image, title }) => {
  return (
    <div
      data-aos="fade-down"
      className="relative h-[40vh] md:h-[50vh] lg:h-[40vh]"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover brightness-50"
      />
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-playfair text-3xl font-bold text-white lg:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default HeroComponent;
