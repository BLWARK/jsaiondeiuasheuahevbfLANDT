"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Teams = () => {
  const teamMembers = [
    {
      name: "Dr. Hans Tanuraharjo",
      position: "Commissioner",
      image: "/DrHans.png",
      description:
        "Has 32 years of experience in the retail industry, 5 years in higher education management and 25 years as a lecturer in business management and entrepreneurship at several universities. He received his Doctor in Business Management from Padjadjaran University Bandung in 2015. Currently he has his own business in the fields of property agency, culinary and business consulting.",
    },
    {
      name: "Dr. Jimmy Lizardo",
      position: "Director",
      image: "/JIL.png",
      description:
        "Practitioner & consultant for Media Industry for more than 20 years. Jimmy received his PhD specializing in “Digital Out of Home Media Industry.",
    },
    {
      name: "Yosafat Pandu Bagaskoro",
      position: "Associate",
      image: "/YPB.png",
      description:
        "Pandu is a professional with more than 20 years experience in marketing communications, starting from multinational advertising agency such as Fortune Indonesia DDB, Publicis and the biggest local advertising agency in Indonesia – Matari Advertising. He also joined The Coca-Cola Company Indonesia handling Media Planning Strategy and Execution of all Coca-Cola brands in Indonesia.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      nextSlide();
    } else if (swipeDistance < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Auto-slide setiap 7 detik hanya di mobile

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-main py-20 px-4 md:px-20">
      {/* Bagian Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold max-w-lg leading-tight font-glyphic">
          The talented team behind the creative design
        </h2>
        <p className="text-white font-bold max-w-md mt-6 md:mt-0 text-2xl">
          Our dedication and commitment to excellence ensure that your business
          thrives in the ever-evolving digital realm.
        </p>
      </div>

      {/* Garis pemisah */}
      <div className="border-b border-gray-300 mb-10"></div>

      {/* Slider (Untuk Mobile) */}
      <div
        className="slider-container block md:hidden " // Aktifkan slider hanya di mobile
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="slider-item flex-shrink-0 w-full px-2 flex flex-col justify-center items-center">
              <div className="flex flex-col items-start text-left p-6 h-[700px]  bg-secondary border-l-8 border-white border-b-8 shadow-lg">
                {/* Gambar */}
                <div className="w-52 h-62 overflow-hidden rounded-md mb-4 ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Detail */}
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-main">
                    {member.name}
                  </h3>
                  <p className="text-white mb-4 text-md font-bold">
                    {member.position}
                  </p>
                  <p className="text-white text-sm">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Tim (Untuk Desktop) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-col items-start text-left p-6 bg-secondary border-l-8 border-white border-b-8 shadow-lg"
          >
            {/* Gambar */}
            <div className="w-52 h-72 overflow-hidden rounded-md mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-2 text-main">
                {member.name}
              </h3>
              <p className="text-white mb-4 text-md font-bold">
                {member.position}
              </p>
              <p className="text-white text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
