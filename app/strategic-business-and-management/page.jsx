"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer"

const StrategicBusiness = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="relative w-full ">
      {/* Bagian Gambar */}
      <div className="relative w-full h-[400px] 2xl:h-[700px] 2xl:mt-0 mt-10">
        <Image
          src="/StrategicBusiness.jpg" // Path file gambar background
          alt="Strategic Business"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Bagian Judul di Depan Gambar */}
      <div className="absolute inset-0 flex items-start justify-start 2xl:translate-y-[13em] translate-y-[8em] text-white px-10">
        <h1 className="text-[2.7em] md:text-[6em] font-bold leading-tight tracking-normal font-glyphic">
          Strategic Business &
          <br /> Management <br />
        </h1>
      </div>

      {/* Bagian Konten */}
      <div className="bg-secondary text-white p-10 2xl:py-20 shadow-lg ">
        <ul className="space-y-4">
          <li className="text-lg 2xl:text-[1.2em]">
            • Define company strategic businesss
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Define company strategic business capabilities
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Enhance company business capabilities
          </li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="w-full 2xl:p-10 py-10 relative z-10 mt-5 my-20">
        {" "}
        {/* Tambahkan z-10 untuk memastikan tombol di lapisan atas */}
        <div className="flex md:flex-row flex-col justify-between items-center">
          {/* Tombol Prev */}
          <div className="flex items-center space-x-4">
            <a
              href="/trainings-and-coaching"
              className="cursor-pointer flex items-center space-x-4 justify-center bg-white w-[360px] h-[75px] text-main rounded-lg hover:bg-secondary hover:text-white transition"
            >
              <span className="text-2xl font-bold">←</span>
              <span className="text-lg md:text-xl font-medium">
                Training & Coaching
              </span>
            </a>
          </div>

          {/* Tombol Next */}
          <div className=" flex items-center justify-center space-x-4 mt-4 md:mt-0">
            <a
              href="/organization-development-and-hr-management"
              className="cursor-pointer flex items-center space-x-4 bg-white w-[360px] h-[75px] justify-center text-main rounded-lg hover:bg-secondary hover:text-white transition"
            >
              <span className="text-lg md:text-xl font-medium">
                Organization Development
              </span>
              <span className="text-2xl font-bold">→</span>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default StrategicBusiness;
