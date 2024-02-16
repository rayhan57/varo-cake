import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleScroll = () => setIsVisible(window.scrollY > 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-6 right-6 z-20 rounded-full bg-primary p-3 text-white hover:bg-hover lg:text-xl"
          onClick={scrollToTop}
        >
          <FaArrowUpLong />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
