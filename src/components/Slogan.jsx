import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Slogan = () => {
  return (
    <div className="container mt-24 lg:mt-32">
      <div className="flex flex-col items-center justify-between gap-3 rounded-b bg-primary p-4 font-bold text-white md:flex-row lg:p-8">
        <h1 className="max-w-lg text-center font-playfair text-3xl md:text-start lg:text-5xl">
          Tingkatkan Pengalaman Berselera Anda di Toko Kue Kami
        </h1>

        <div className="flex w-full items-center justify-center gap-3 lg:gap-6">
          <span className="text-3xl lg:text-6xl">
            <FaPhoneAlt />
          </span>
          <span>
            <h2 className="lg:text-xl">Hubungi Kami</h2>
            <h2 className="text-2xl lg:text-4xl">+62 838 0650 6551</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
