import React from "react";
import seasonalSpecials from "../assets/img/sellingPoints/seasonalSpecials.svg";
import UniqueFlavors from "../assets/img/sellingPoints/uniqueFlavors.svg";
import onlineOrdering from "../assets/img/sellingPoints/onlineOrdering.svg";
import customerTestimonials from "../assets/img/sellingPoints/customerTestimonials.svg";

const SellingPoints = () => {
  const points = [
    {
      title: "Spesial Musiman",
      image: seasonalSpecials,
    },
    {
      title: "Rasa Unik",
      image: UniqueFlavors,
    },
    {
      title: "Pemesanan Online",
      image: onlineOrdering,
    },
    {
      title: "Testimoni Pelanggan",
      image: customerTestimonials,
    },
  ];

  return (
    <div className="mt-24 flex flex-col items-center justify-evenly gap-2 md:flex-row lg:mt-32 lg:gap-4">
      {points.map((point, index) => (
        <div
          data-aos="fade-up"
          data-aos-delay={index * 200}
          key={index}
          className="flex w-full flex-col items-center justify-center gap-3 text-nowrap rounded bg-primary p-6 text-white transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-hover hover:drop-shadow-xl lg:gap-6 lg:p-12 lg:text-lg"
        >
          <img src={point.image} alt={point.title} className="w-16 lg:w-20" />
          <h2>{point.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SellingPoints;
