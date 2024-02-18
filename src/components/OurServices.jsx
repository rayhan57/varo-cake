import React from "react";
import customizationOptions from "../assets/img/ourServices/customizationOptions.svg";
import freshIngredients from "../assets/img/ourServices/freshIngredients.svg";
import onlineOrder from "../assets/img/ourServices/onlineOrdering.svg";
import cheeseStick from "../assets/img/ourServices/cheeseStick.webp";
import cheeseSago from "../assets/img/ourServices/cheeseSago.webp";
import flavorUnique from "../assets/img/ourServices/uniqueFlavors.svg";
import ImageDesign from "./ImageDesign";

const PointsOffer = ({ title, icon, description }) => {
  return (
    <div>
      <h2 className="mb-3 flex items-center gap-2 font-playfair text-xl font-medium md:text-nowrap lg:gap-4 lg:text-2xl">
        <img
          src={icon}
          alt="icon"
          className="w-10 rounded-full bg-primary p-2"
        />{" "}
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

const OurServices = () => {
  return (
    <div
      data-aos="fade-up"
      className="mt-24 flex flex-col items-center gap-20 md:flex-row md:gap-10 lg:mt-32"
    >
      <div className="max-w-lg space-y-2 text-sm lg:space-y-4 lg:text-base">
        <p className="text-base text-primary lg:text-lg">// Layanan Kami</p>
        <h1 className="font-playfair text-2xl font-bold lg:text-4xl">
          Apa yang Kami Tawarkan Untuk Anda?
        </h1>
        <p>
          Dengan layanan pemesanan online dan offline, Varo Cake memberikan
          fleksibilitas kepada pelanggan untuk menikmati kue-kue istimewa kami
          dengan cara yang paling nyaman bagi mereka. Pengalaman berbelanja kue
          yang mudah, menyenangkan, dan penuh kebahagiaan hanya di Varo Cake.
        </p>
        <div className="flex items-center gap-6 pt-5 md:gap-12">
          <div className="space-y-5 lg:space-y-10">
            <PointsOffer
              title={"Rasa Unik"}
              icon={flavorUnique}
              description={"Kue kami, rasa luar biasa dalam setiap gigitan."}
            />
            <PointsOffer
              title={"Opsi Kustomisasi"}
              icon={customizationOptions}
              description={
                "Kue sesuai selera Anda, personalisasi tak terbatas."
              }
            />
          </div>
          <div className="space-y-5 lg:space-y-10">
            <PointsOffer
              title={"Bahan Segar"}
              icon={freshIngredients}
              description={"Gunakan bahan segar untuk kue berkualitas."}
            />
            <PointsOffer
              title={"Pemesanan Online"}
              icon={onlineOrder}
              description={
                "Pesan kue favoritmu dengan mudah melalui pemesanan online."
              }
            />
          </div>
        </div>
      </div>

      <ImageDesign image1={cheeseStick} image2={cheeseSago} />
    </div>
  );
};

export default OurServices;
