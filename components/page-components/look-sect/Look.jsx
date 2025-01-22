"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Look = () => {
  const boxes = [
    { 
      title: "Strategic Business & Management", 
      image: "/StrategicBusiness.jpg", 
      link: "/strategic-business-and-management" 
    },
    { 
      title: "Organization Development & HR Management", 
      image: "/Dev.jpg", 
      link: "/organization-development-and-hr-management" 
    },
    { 
      title: "Public Affairs , Marketing & Corporate Communication", 
      image: "/PublikAffairs.jpg", 
      link: "/public-affairs" 
    },
    { 
      title: "Tax, Legal & Auditing", 
      image: "/Tax.jpg", 
      link: "/tax-legal-and-auditing" 
    },
    { 
      title: "Financial Structure & Engineering", 
      image: "/Financial.jpg", 
      link: "/financial-structure-and-engineering" 
    },
    { 
      title: "Trainings & Coaching", 
      image: "/Training.jpg", 
      link: "/trainings-and-coaching" 
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700, // Durasi animasi dalam milidetik
      easing: "ease-in-out",
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);

  return (
    <div id="tools" className="relative w-screen 2xl:h-auto h-auto overflow-hidden pb-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary bg-opacity-100"></div>

      {/* Konten */}
      <div data-aos="zoom-in" className="relative z-10 flex flex-col items-center justify-center 2xl:h-[700px] h-full py-20 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-glyphic">CLOSER</h2>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-6xl md:text-[17em] font-bold font-glyphic">L</span>
          <div className="w-20 h-20 md:w-64 md:h-64 relative">
            <Image src="/cube1.png" alt="Cube 1" fill className="object-contain float" />
          </div>
          <div className="w-20 h-20 md:w-64 md:h-64 relative">
            <Image src="/cube2.png" alt="Cube 2" fill className="object-contain float" />
          </div>
          <span className="text-6xl md:text-[17em] font-bold font-glyphic">K</span>
        </div>
        <p className="text-4xl md:text-4xl font-bold mt-6 font-glyphic">OF EACH TOOLS</p>
      </div>

      {/* Grid 6 Kotak */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 2xl:px-10 2xl:py-10 px-4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="relative 2xl:w-[540px] 2xl:h-[580px] w-[360px] h-[360px] group overflow-hidden border-l-8 border-main"
            data-aos="fade-up" // Animasi pada card
            data-aos-delay={index * 100} // Delay animasi untuk efek bertahap
          >
            <Image
              src={box.image}
              alt={box.title}
              fill
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 transition-all duration-500 group-hover:bg-opacity-80"></div>
            <div className="absolute bottom-20 left-10 text-left text-white 2xl:text-[2em] text-[1.5em] font-glyphic font-bold flex flex-col">
              <span className="w-[60%] transition-transform duration-500 group-hover:-translate-y-20">
                {box.title}
              </span>
            </div>
            <div className="absolute bottom-14 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a href={box.link} className="mt-2 px-6 py-4 bg-main text-white hover:bg-secondary font-medium flex items-center space-x-2">
                <span>Read More</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Look;
