import React from 'react'
import Hero from "@/components/page-components/hero-sect/Hero"
import About from "@/components/page-components/about-us-sect/About"
import VisionMission from "@/components/page-components/vision-mission-sect/VisionMission"
import BannerSect from "@/components/page-components/banner-sect/BannerSect"
import Tools from "@/components/page-components/tools-sect/Tools"
import Look from "@/components/page-components/look-sect/Look"
import Teams from "@/components/page-components/teams/Teams"


const page = () => {
  return (
    <main className="relative w-full h-full">
    {/* Hero Section */}
    <Hero/>
    <About/>
    <VisionMission/>
    <BannerSect/>
    <Tools/>
    <Look/>
    <Teams/>
    
  </main>
  )
}

export default page