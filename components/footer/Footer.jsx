"use client"
import React, {useEffect} from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
          AOS.init({
            duration: 1200,
            once: true,
          });
        }, []);
  return (
    <footer data-aos="fade-up" id="footer" className="bg-black text-white py-16 px-6 md:px-20">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-4xl md:text-6xl font-bold font-glyphic 2xl:w-[40%] w-full">
          Let’s build something amazing together
        </h1>
        <p className="text-gray-400 mt-4 max-w-lg">
          Ready to take your business to the next level? Connect with us and
          let’s turn your ideas into reality!
        </p>
      </div>

      {/* Garis pemisah */}
      <div className="border-b border-gray-700 my-10"></div>

      {/* Informasi kontak */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Lokasi */}
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-2">SENTRALAND PARADISE</h3>
            <p className="text-gray-400">
              Ruko Mallorca RA-09 Parung Panjang, Kab. Bogor Jawa Barat - 16360
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="w-full md:w-1/3">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Enter your email
          </label>
          <div className="flex items-center border-b border-gray-700">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent w-full py-2 px-4 text-gray-300 focus:outline-none"
            />
            <button className="text-white p-3">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Garis pemisah */}
      <div className="border-b border-gray-700 my-10"></div>

      {/* Bagian bawah */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-gray-400 mt-4 md:mt-0">
          © 2024 – 2025 | All rights reserved by{" "}
          <strong>L&T Business Consulting</strong>
        </p>
        <div className="flex items-center gap-8">
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
