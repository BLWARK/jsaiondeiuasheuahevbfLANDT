"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [text, setText] = useState("CONSULTING");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const texts = ["CONSULTING", "STRATEGIC", "MANAGEMENT"];
  const typingSpeed = 100;
  const pauseTime = 4000;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    let typingTimer;
    if (!isDeleting && typingIndex < text.length) {
      typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + text[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && typingIndex > 0) {
      typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (!isDeleting && typingIndex === text.length) {
      typingTimer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && typingIndex === 0) {
      setIsDeleting(false);
      setText((prev) => texts[(texts.indexOf(prev) + 1) % texts.length]);
    }
    return () => clearTimeout(typingTimer);
  }, [text, typingIndex, isDeleting]);

  return (
    <div className="relative w-full 2xl:mb-60 mb-40 2xl:mt-20 mt-10 2xl:px-40 px-4 justify-center items-center 2xl:flex flex-row">
      {/* Text Content */}
      <div
        className="relative 2xl:w-[60%] w-full flex flex-col items-start justify-center font-glyphic 2xl:mt-0 mt-20"
        data-aos="fade-right"
      >
        <div className="text-left text-white ">
          {/* Teks L&T */}
          <h1 className="text-[45px] md:text-[7.5em] font-bold leading-tight">
            L&T
          </h1>
          {/* Teks BUSINESS */}
          <h2 className="text-[45px] md:text-[7.5em] font-bold leading-tight">
            BUSINESS
          </h2>
          {/* Teks Animasi dengan Kursor */}
          <span className="text-[40px] md:text-[7.5em] font-bold inline-block min-w-[300px] h-[1em]">
            {displayText}
            <span className="animate-blink"></span>
          </span>
        </div>
      </div>

      {/* Gambar Cube */}
      <div
        className="relative 2xl:w-[40%] w-full flex 2xl:items-center 2xl:justify-end justify-center items-center h-full px-6 font-glyphic 2xl:mt-10 mt-20"
        data-aos="fade-left"
      >
        <div className="relative">
          {/* Cube untuk Desktop */}
          <Image
            src="/cube1.png"
            alt="Company Logo"
            width={500}
            height={500}
            priority
            className="float 2xl:block hidden"
          />
          {/* Cube untuk Mobile */}
          <Image
            src="/cube1.png"
            alt="Company Logo"
            width={250}
            height={250}
            priority
            className="float 2xl:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
