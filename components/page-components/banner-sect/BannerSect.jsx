import React from "react";
import Image from "next/image";

const BannerSect = () => {
  return (
    <div className="relative w-screen h-[700px] 2xl:px-10 px-2">
      {/* Background Image */}
      <Image
        src="/weare.jpg" // Ganti dengan URL gambar Anda
        alt="Banner Background"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-left text-white px-6">
        <h1 className="text-[5em] 2xl:text-[10em] leading-tight font-glyphic font-bold  text-main">
          <span className="text-white">We Are</span> Cube's Experts
        </h1>
       
      </div>
    </div>
  );
};

export default BannerSect;
