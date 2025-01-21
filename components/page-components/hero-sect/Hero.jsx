import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative w-full  2xl:mb-60 mb-40 2xl:mt-20 mt-10 2xl:px-40 px-4  justify-center items-center 2xl:flex flex-row ">
      {/* <div className="absolute inset-0">
       
        <video
          className="w-full h-full object-cover"
          src="/background-video.mp4"
          autoPlay
          loop
          muted
        />
        
        <Image
          src="/background-image.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}

      {/* Overlay
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Text Content */}
      <div className=" relative 2xl:w-1/2 w-full flex items-center justify-start  font-glyphic 2xl:mt-0 mt-20">
        <div className="text-left text-white  ">
          <h1 className="text-[50px] md:text-[9em]  font-bold leading-tight">
            L&T BUSINESS CONSULTING
          </h1>
        </div>
      </div>
      <div className="relative 2xl:w-1/2 w-full flex 2xl:items-center 2xl:justify-end justify-center items-center h-full px-6 font-glyphic 2xl:mt-10 mt-20 ">
        <Image
          src="/cube1.png"
          alt="Company Logo"
          width={500}
          height={90}
          priority
          className="float 2xl:block hidden"
        />
        <Image
          src="/cube1.png"
          alt="Company Logo"
          width={250}
          height={90}
          priority
          className="float 2xl:hidden block"
        />
      </div>
    </div>
  );
};

export default Hero;
