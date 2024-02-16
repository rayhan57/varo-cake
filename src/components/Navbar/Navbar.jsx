import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = window.innerWidth < 768;
  const isDesktop = window.innerWidth > 768;

  const handleScroll = () =>
    window.scrollY > 50 ? setIsScrolling(true) : setIsScrolling(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed start-0 top-0 z-50 w-full ${isScrolling ? "bg-navbar transition-all duration-500" : "bg-transparent"}`}
    >
      <div className="mx-auto flex flex-wrap items-center justify-between py-3 lg:px-10 lg:py-5">
        <Link
          to={"/"}
          className="ps-5 font-playfair text-xl font-bold tracking-tight text-primary first-letter:text-3xl lg:text-2xl lg:first-letter:text-5xl"
        >
          Varo Cake
        </Link>

        <div className="pe-5 md:order-2">
          <div className="hidden items-center gap-2 md:flex lg:gap-4">
            <span className="rounded-full border p-2 text-primary lg:p-4">
              <FaPhoneAlt />
            </span>
            <div>
              <p className="text-sm text-primary">Hubungi Kami</p>
              <p className="font-medium text-white lg:text-lg">
                +62 838 0650 6551
              </p>
            </div>
          </div>

          {/* Button Bar */}
          <button
            className="rounded border border-gray-500 p-2 text-xl text-gray-400 focus:border-2 focus:border-gray-400 md:hidden"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <FaBars />
          </button>
        </div>

        <motion.div
          className={`mt-2 ${showNavbar ? "block" : "hidden"} w-full items-center justify-between border-t bg-navbar px-5 md:order-1 md:mt-0 md:flex md:w-auto md:border-0 md:bg-transparent`}
          animate={
            showNavbar && isMobile
              ? { opacity: 1, y: 0 }
              : isDesktop
                ? { opacity: 1 }
                : { opacity: 0, y: -20 }
          }
        >
          <ul className="my-4 flex flex-col text-sm text-white md:my-0 md:flex-row md:space-x-8 md:p-0 lg:text-base">
            <NavMenu href={"/"} label={"Beranda"} />
            <NavMenu href={"/about"} label={"Tentang"} />
            <NavMenu href={"/services"} label={"Layanan"} />
            <NavMenu href={"/products"} label={"Produk"} />
            <NavMenu href={"/contact"} label={"Kontak"} />
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
