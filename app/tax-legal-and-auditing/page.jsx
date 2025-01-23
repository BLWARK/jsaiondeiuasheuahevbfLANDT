"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer"

const TaxLegal = () => {
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
          src="/Tax.jpg" // Path file gambar background
          alt="Dev"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Bagian Judul di Depan Gambar */}
      <div className="absolute inset-0 flex items-start justify-start 2xl:translate-y-[13em] translate-y-[8em] text-white px-10">
        <h1 className="text-[2.7em] md:text-[6em] font-bold leading-tight tracking-normal font-glyphic">
          Tax, Legal &
          <br /> Auditing <br />
        </h1>
      </div>

      {/* Bagian Konten */}
      <div className="bg-secondary text-white p-10 2xl:py-20 shadow-lg ">
        <ul className="space-y-4">
          <li className="text-lg 2xl:text-[1.2em]">
            • Preparing and submitting tax return
          </li>
          <li className="text-lg 2xl:text-[1.2em]">• Researching tax laws</li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Advising on tax planning
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Providing support in legal issues
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Reviewing legal materials and contracts
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Reviewing and confirming financial reports
          </li>
          <li className="text-lg 2xl:text-[1.2em]">
            • Examining records, reports , receipts , or other documents and
            comparing them to company assets and comparing assets and
            liabilities
          </li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="w-full 2xl:p-10 p-2 relative z-10 mt-5 my-20">
        {" "}
        {/* Tambahkan z-10 untuk memastikan tombol di lapisan atas */}
        <div className="flex md:flex-row flex-col justify-between items-center">
          {/* Tombol Prev */}
          <div className="flex items-center space-x-4">
            <a
              href="/public-affairs"
              className="cursor-pointer flex items-center space-x-4 justify-center bg-white w-[360px] h-[75px] text-main rounded-lg hover:bg-secondary hover:text-white transition"
            >
              <span className="text-2xl font-bold">←</span>
              <span className="text-lg md:text-xl font-medium">
                Public Affairs
              </span>
            </a>
          </div>

          {/* Tombol Next */}
          <div className="flex items-center justify-center space-x-4 mt-4 md:mt-0">
            <a
              href="/financial-structure-and-engineering"
              className="cursor-pointer flex items-center space-x-4 bg-white w-[360px] h-[75px] justify-center text-main rounded-lg hover:bg-secondary hover:text-white transition"
            >
              <span className="text-lg md:text-xl font-medium">
                Financial Structure
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

export default TaxLegal;
