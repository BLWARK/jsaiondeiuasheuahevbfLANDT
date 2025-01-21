import React from 'react'
import Image from "next/image";

const Development = () => {
  return (
    <div className="relative w-full h-[700px] flex ">
          {/* Bagian Kanan: Konten */}
      <div className="w-1/2 h-full bg-secondary text-white flex flex-col justify-start  py-10 px-20">
        {/* Judul */}
        <h1 className="text-4xl md:text-[4em] font-bold mb-6 leading-tight tracking-normal">
        Organization Development &  <br /> Human Resources  <br /> Management

        </h1>
      </div>
      {/* Bagian Kiri: Gambar dengan Overlay */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/Dev.png" // Path file gambar background
          alt="Development"
          fill
          className='object-cover'
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

    

      {/* Tempat Konten */}
      <div className="absolute bottom-28 bg-main left-0 transform translate-y-[70px] bg-brown-700 text-white p-10 py-16 md:w-[1200px] z-40 shadow-lg">
        <ul className="space-y-4 px-10">
          <li className="text-lg 2xl:text-[1.5em]">• Help organizations to solve issue, create value, maximize growth and improve business performance
          </li>
          <li className="text-lg 2xl:text-[1.5em]">
            • Define problem and recommend solutions of human resources issue

          </li>
          <li className="text-lg 2xl:text-[1.5em]">
            • Help to develop human resources policy 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Development