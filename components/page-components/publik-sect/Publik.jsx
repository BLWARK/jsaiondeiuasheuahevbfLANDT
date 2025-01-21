import React from 'react'
import Image from "next/image"

const Publik = () => {
  return (
    <div className="relative w-full h-[700px] flex">
    {/* Bagian Kiri: Gambar dengan Overlay */}
    <div className="w-1/2 h-full relative">
      <Image
        src="/PublikAffairs.png" // Path file gambar background
        alt="Strategic Business"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    </div>

    {/* Bagian Kanan: Konten */}
    <div className="w-1/2 h-full bg-main text-white flex flex-col justify-start  p-10">
      {/* Judul */}
      <h1 className="text-4xl md:text-[4em] font-bold mb-6 leading-tight tracking-normal">
      Public Affairs , 
      <br /> Marketing & Corporate  <br /> Communication

      </h1>
    </div>

    {/* Tempat Konten */}
    <div className="absolute bottom-28 bg-secondary right-0 transform translate-y-[70px] bg-brown-700 text-white p-10 py-14 md:w-[1200px] z-40 shadow-lg">
      <ul className="space-y-4">
        <li className="text-lg 2xl:text-[1.5em]">• Help to develop and maintain relationships with reporter, journalist and other media members
        </li>
        <li className="text-lg 2xl:text-[1.5em]">
          • Develop and provide content , write articles for internal and external , including email blasts, social media etc

        </li>
        <li className="text-lg 2xl:text-[1.5em]">
          • Develop concept , idea , strategy and execute 360 degrees communication for brands and corporate

        </li>
      </ul>
    </div>
  </div>
  )
}

export default Publik