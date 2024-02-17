import React, { useEffect, useState } from "react";
import grabFood from "../assets/img/productDetail/grab-food.webp";
import goFood from "../assets/img/productDetail/go-food.webp";

const CakeDetail = ({ cake }) => {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    setThumbnail(cake.images?.[0]);
  }, [cake]);

  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row lg:gap-12">
      <div className="w-full">
        {/* Thumbnail */}
        <img
          src={`/img/${thumbnail}`}
          alt="thumbnail"
          className="h-48 w-full rounded object-cover md:object-fill lg:h-96"
        />
        {/* Image Options */}
        <div className="mt-5 flex items-center justify-evenly gap-2">
          {cake.images?.map((image, index) => (
            <img
              key={index}
              src={`/img/${image}`}
              alt={cake.name}
              className={`h-20 w-20 cursor-pointer rounded border ${image === thumbnail ? "border-4 border-primary" : ""} object-cover transition hover:brightness-75`}
              onClick={() => setThumbnail(image)}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-2xl font-semibold lg:text-3xl">{cake.name}</h1>
        <p className=" text-sm text-gray-400 lg:text-base">Tersedia 2 varian</p>
        <p className="py-2 font-semibold text-primary lg:text-lg">
          {cake.price}
        </p>
        <p className="text-sm lg:text-base">{cake.description}</p>
        <h3 className="mt-3 text-lg font-semibold lg:text-xl">
          Pesan sekarang hanya di
        </h3>
        <div className="mt-3 flex items-center justify-start gap-3 lg:gap-6">
          <img src={grabFood} alt="grabfood" className="w-20 lg:w-24" />
          <img src={goFood} alt="gofood" className="w-20 lg:w-24" />
        </div>
      </div>
    </div>
  );
};

export default CakeDetail;
