"use client"; // Diperlukan untuk state di client-side
import React, { useState, useEffect } from "react";
import Hero from "@/components/page-components/hero-sect/Hero";
import About from "@/components/page-components/about-us-sect/About";
import VisionMission from "@/components/page-components/vision-mission-sect/VisionMission";
import BannerSect from "@/components/page-components/banner-sect/BannerSect";
import Tools from "@/components/page-components/tools-sect/Tools";
import Look from "@/components/page-components/look-sect/Look";
import Teams from "@/components/page-components/teams/Teams";
import LoadingScreen from "@/components/LoadingScreen"; // Import LoadingScreen
import Footer from "@/components/footer/Footer"

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hilangkan loading setelah 3 detik
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Tampilkan loading screen
  }

  return (
    <main className="relative w-full h-full">
      <Hero />
      <About />
      <VisionMission />
      <BannerSect />
      <Tools />
      <Look />
      <Teams />
      <Footer/>
    </main>
  );
};

export default Page;
