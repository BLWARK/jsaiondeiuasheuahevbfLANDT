"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Public = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="relative w-full 2xl:my-10 my-10">
      {/* Bagian Gambar */}
      <div className="relative w-full h-[400px] 2xl:h-[700px]">
        <Image
          src="/PublikAffairs.jpg" // Path file gambar background
          alt="Public"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Bagian Judul di Depan Gambar */}
      <div className="absolute inset-0 flex items-start justify-start 2xl:translate-y-[13em] translate-y-[8em] text-white px-10">
        <h1 className="text-[2.7em] md:text-[6em] font-bold leading-tight tracking-normal font-glyphic">
          Public Affairs , Marketing &
          <br /> Corporate Communication <br />
        </h1>
      </div>

      {/* Bagian Konten */}
      <div className="bg-secondary text-white p-10 2xl:py-20 shadow-lg ">
        <ul className="space-y-4">
          <li className="text-lg 2xl:text-[1.2em]">
            • Help to develop and maintain relationships with reporter,
            journalist and other media members
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Develop and provide content, write articles for internal and
            external, including email blasts, social media etc
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Develop concept, idea, strategy and execute 360 degrees
            communication for brands and corporate
          </li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="w-full 2xl:p-10 p-2 relative z-10 mt-5">
        {" "}
        {/* Tambahkan z-10 untuk memastikan tombol di lapisan atas */}
        <div className="flex md:flex-row flex-col justify-between items-center">
          {/* Tombol Prev */}
          <div className="flex items-center space-x-4">
            <a
              href="/organization-development-and-hr-management"
              className="cursor-pointer flex items-center space-x-4 justify-center bg-white w-[360px] h-[75px] text-main rounded-lg hover:bg-secondary hover:text-white transition"
            >
              <span className="text-2xl font-bold">←</span>
              <span className="text-lg md:text-xl font-medium">
                Organization Development
              </span>
            </a>
          </div>

          {/* Tombol Next */}
          <div className="flex items-center justify-center space-x-4 mt-4 md:mt-0">
            <a
              href="/tax-legal-and-auditing"
              className="cursor-pointer flex items-center space-x-4 bg-white w-[360px] h-[75px] justify-center text-main rounded-lg hover:bg-secondary hover:text-white transition"
            >
              <span className="text-lg md:text-xl font-medium">
                Tax Legal & Auditing
              </span>
              <span className="text-2xl font-bold">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
