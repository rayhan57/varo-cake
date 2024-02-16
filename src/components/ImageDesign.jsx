import React from "react";

const ImageDesign = ({ image1, image2 }) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      {/* Create a colored background */}
      <div className="flex h-28 w-64 items-center justify-center rounded bg-primary bg-opacity-20 md:h-60 lg:h-96 lg:w-80">
        {/* Create a smaller colored box */}
        <div className="h-[85%] w-[85%] bg-primary"></div>
      </div>
      <img
        src={image1}
        alt=""
        className="absolute left-5 h-56 w-40 rounded object-cover md:-left-5 md:-top-5 md:h-48 md:w-36 lg:-top-10 lg:left-10 lg:h-72 lg:w-60 2xl:left-36"
      />
      <img
        src={image2}
        alt=""
        className="absolute right-5 h-56 w-40 rounded object-cover md:-bottom-5 md:-right-5 md:h-48 md:w-36 lg:-bottom-10 lg:right-10 lg:h-72 lg:w-60 2xl:right-36"
      />
    </div>
  );
};

export default ImageDesign;
