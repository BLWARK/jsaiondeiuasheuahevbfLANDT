import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <div className="w-full 2xl:h-screen 2xl:flex flex-row">
      {/* Bagian Kiri (Vision) */}
      <div className="relative 2xl:w-1/2 w-full bg-main text-white flex flex-col justify-start items-start 2xl:p-20 px-4 py-10  overflow-hidden">
        {/* Icon Vision (Background) */}
        <div className="absolute 2xl:bottom-0 2xl:left-0   left-0 2xl:text-[24rem] text-[10em] text-white opacity-20">
          <FaEye />
        </div>
        {/* Konten Vision */}
        <p className="text-left 2xl:text-[5rem] text-[2em] font-bold font-glyphic z-10">
          our
        </p>
        <h2 className="2xl:text-[10em] text-[4em] font-bold z-10 font-glyphic">VISION</h2>
        <p className="text-left 2xl:text-lg text-xs  z-10">
        Becoming a Leader in Business Consulting Services and aiming to be a preferred Business Consulting Services in the industry
        </p>
      </div>

      {/* Bagian Kanan (Mission) */}
      <div className="relative 2xl:w-1/2 w-full bg-secondary text-white flex flex-col justify-end items-end 2xl:p-20 px-4 py-10 overflow-hidden">
        {/* Icon Mission (Background) */}
        <div className="absolute top-0 right-0 2xl:text-[24rem] text-[10em] text-white opacity-20">
          <FaBullseye />
        </div>
        {/* Konten Mission */}
        <p className="text-right 2xl:text-[5rem] text-[2em] font-bold font-glyphic z-10">
          our
        </p>
        <h2 className="2xl:text-[10em] text-[4em] font-bold z-10 font-glyphic">MISSION</h2>
        <ul className=" flex flex-col items-end right-list px-4">
            <li className="text-right 2xl:text-lg text-xs  z-10">To give One Stop Business Consulting Services with Excellent Quality 
            </li>
            <li className="text-right 2xl:text-lg text-xs  z-10">To be a Business Consulting model that achieve the Best Managed Corporation

            </li>
            <li className="text-right 2xl:text-lg text-xs  z-10">To empower people to go to the next level

            </li>
        </ul>
       
      </div>
    </div>
  );
};

export default VisionMission;
