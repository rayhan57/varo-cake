import React from "react";
import { Link } from "react-router-dom";

const CakeProducts = ({ cakes }) => {
  return (
    <div
      data-aos="fade-up"
      className="container mt-24 space-y-3 pb-12 lg:mt-32 lg:pb-20"
    >
      <h2 className="text-center text-primary lg:text-lg">// Produk Kue</h2>
      <h1 className="mx-auto max-w-lg pb-5 text-center font-playfair text-2xl font-bold lg:text-4xl">
        Temukan Berbagai Macam Penawaran Toko Kue Kami
      </h1>

      <div className="grid gap-3 md:grid-cols-3 lg:gap-6">
        {cakes.map((cake, index) => (
          <div key={index} className="group overflow-hidden rounded">
            {/* Header */}
            <div className="relative z-20 space-y-2 bg-white p-3 text-center transition duration-500 group-hover:bg-primary group-hover:text-white lg:space-y-3 lg:p-5">
              <p className="inline-block rounded-full border border-primary px-3 text-sm group-hover:border-white lg:text-base">
                {cake.price}
              </p>
              <h2 className="font-playfair text-2xl font-bold lg:text-3xl">
                {cake.name}
              </h2>
              <p className="line-clamp-3 text-sm lg:text-base">
                {cake.description}
              </p>
            </div>

            {/* Body Image */}
            <div className="relative">
              <img
                src={`/img/${cake.images[1]}`}
                alt={cake.name}
                className="h-48 w-full rounded-b object-cover lg:h-60"
              />
              <div className="absolute left-0 top-0 flex h-full w-full -translate-y-full items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Link
                  to={`/products/${cake.id}`}
                  className="rounded-full border p-3 text-sm text-primary transition duration-500 hover:bg-white lg:text-base"
                >
                  Baca selengkapnya
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeProducts;
