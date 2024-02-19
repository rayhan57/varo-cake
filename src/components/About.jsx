import React from "react";
import { FaCheck } from "react-icons/fa";
import cheeseCake from "../assets/img/aboutImage/cheeseCake.webp";
import nastarCake from "../assets/img/aboutImage/nastarCake.webp";
import ImageDesign from "./ImageDesign";

const PointsData = ({ label }) => {
  return (
    <p className="mb-1 flex items-center gap-2 text-nowrap">
      <span className="text-primary">
        <FaCheck />
      </span>{" "}
      {label}
    </p>
  );
};

const About = () => {
  return (
    <div className="mt-36 flex flex-col items-center justify-between gap-20 md:mt-24 md:flex-row lg:mt-32 lg:gap-8">
      <ImageDesign image1={cheeseCake} image2={nastarCake} />

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="max-w-lg space-y-2 text-sm lg:space-y-4 lg:text-base"
      >
        <p className="text-base text-primary lg:text-lg">// TENTANG KAMI</p>
        <h1 className="font-playfair text-2xl font-bold lg:text-4xl">
          Memanggang Cinta ke dalam Setiap Gigitan
        </h1>
        <p>
          Dibalik setiap kue istimewa, terdapat tim yang berdedikasi untuk
          memberikan yang terbaik. Kami di Varo Cake bersatu untuk memberikan
          pengalaman berbelanja kue melalui layanan GrabFood dan GoFood yang
          istimewa untuk Anda.
        </p>
        <p>
          Tidak hanya itu, kami juga dengan senang hati melayani pemesanan
          offline untuk memastikan bahwa setiap pelanggan dapat menikmati
          kelezatan kue kami, baik melalui platform online maupun dengan
          kunjungan langsung ke toko kami. Hubungi kami atau datang langsung
          untuk mendiskusikan pesanan khusus atau permintaan khusus Anda.
        </p>
        <div className="flex items-center gap-10 lg:gap-40">
          <div>
            <PointsData label={"Rasa Unik"} />
            <PointsData label={"Opsi Kustomisasi"} />
          </div>
          <div>
            <PointsData label={"Bahan Segar"} />
            <PointsData label={"Pemesanan Online"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
