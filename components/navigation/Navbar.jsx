"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Untuk navigasi

  useEffect(() => {
      AOS.init({
        duration: 1200,
        once: true,
      });
    }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "About Us", id: "about-us" },
    { name: "Tools", id: "tools" },
    { name: "Teams", id: "teams" },
    { name: "Contact", id: "footer" },
  ];

  const handleScrollToSection = (id, path) => {
    if (path) {
      router.push(path); // Navigasi ke path jika tersedia
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Tutup menu setelah klik
  };

  return (
    <nav  className=" w-full text-white z-50">
      <div data-aos="fade-down" className="flex items-center justify-between 2xl:px-40 px-3 mt-5 2xl:my-10">
        {/* Logo */}
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src="/LnTLogo2.png"
            alt="Company Logo"
            width={90}
            height={90}
            className="2xl:block hidden"
          />
          <Image
            src="/LnTLogo2.png"
            alt="Company Logo"
            width={60}
            height={90}
            className="2xl:hidden block"
          />
        </div>

        {/* Informasi Tambahan */}
        <div className="hidden md:flex flex-col text-sm space-y-1">
          <span className="font-bold text-xl">L&T Business Consultant</span>
          <span className="font-bold text-sm">SENTRALAND PARADISE</span>
          <span>Ruko Mallorca RA-09 Parung Panjang,</span>
          <span>Kab. Bogor Jawa Barat - 16360</span>
        </div>

        {/* Deskripsi */}
        <div className="hidden md:block max-w-md text-[1em]">
          <p>
            We believe that the surest measure of success is when our partners
            grow with us. It’s more than visuals. We’re here to support your
            growth.
          </p>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-4xl p-2 rounded-md focus:outline-none hover:bg-white hover:text-black transition"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Bagian Kiri: Informasi Kontak */}
          <div className="w-full md:w-1/3 bg-gray-700 p-20 text-white flex-col justify-between 2xl:block hidden">
            <div>
              <Image
                src="/Lnt-Logo.png"
                alt="Company Logo"
                width={100}
                height={50}
                priority
              />
              <div className="space-y-10 mt-20">
                <div>
                  <h4 className="uppercase text-xl font-semibold">Email</h4>
                  <p className="text-lg">ptlizardotanra@gmail.com</p>
                </div>
                <div>
                  <h4 className="uppercase text-xl font-semibold">Phone</h4>
                  <p className="text-lg">+9 587 325 902</p>
                </div>
                <div>
                  <h4 className="uppercase text-xl font-semibold">Address</h4>
                  <p className="text-lg">
                    Ruko Mallorca RA-09 Parung Panjang,
                    <br />
                    Kab. Bogor Jawa Barat - 16360
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Menu Navigasi */}
          <div className="w-full 2xl:py-40 py-10 md:w-2/3 bg-black text-white px-20 relative">
            {/* Tombol Close untuk Mobile dan Desktop */}
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-4xl focus:outline-none"
            >
              <FaTimes />
            </button>
            <ul className="space-y-20 text-lg font-semibold mt-12">
              {menuItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <button
                    onClick={() => handleScrollToSection(item.id, item.path)}
                    className="hover:text-main transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
