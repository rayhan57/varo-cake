import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddressInfo = ({ icon, title }) => {
  return (
    <p className="flex items-center gap-3 lg:gap-4">
      <span className="text-lg lg:text-xl">{icon}</span> {title}
    </p>
  );
};

const Footer = () => {
  return (
    <div data-aos="fade-up">
      <div className="mt-24 bg-navbar text-white lg:mt-32">
        <div className="container flex flex-col items-center justify-around gap-6 p-8 md:flex-row lg:p-10">
          <div className="max-w-md flex-1">
            <h1 className="mb-3 font-playfair text-xl font-bold tracking-tight text-primary first-letter:text-4xl lg:text-2xl lg:first-letter:text-5xl">
              Varo Cake
            </h1>
            <p className="text-sm text-gray-500 lg:text-base">
              Jelajahi dunia rasa Varo Cake melalui layanan pemesanan kue online
              kami, dijamin memuaskan selera Anda kapan pun dan di mana pun Anda
              berada.
            </p>
          </div>

          <div className="w-full space-y-2 text-sm md:w-auto lg:text-base">
            <h1 className="pb-2 font-playfair text-xl font-bold lg:pb-3 lg:text-2xl">
              Alamat Kami
            </h1>
            <AddressInfo
              icon={<IoLocationSharp />}
              title={"Jl. Rawa Indah, Pondok Gede, Bekasi"}
            />
            <AddressInfo icon={<FaPhoneAlt />} title={"+62 838 0650 6551"} />
            <AddressInfo icon={<MdEmail />} title={"varocake@gmail.com"} />
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container p-5 text-center text-white">
          <p>
            © 2024{" "}
            <Link to={"/"} className="text-primary hover:text-hover">
              Varo Cake
            </Link>
            , All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
