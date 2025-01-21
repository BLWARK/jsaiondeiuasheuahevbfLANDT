import React from "react";

const About = () => {
  return (
    <div className=" bg-[#4B443F] w-screen 2xl:p-40 p-4  py-10 flex flex-col md:flex-row ">
      {/* Bagian Kiri (30%) */}
      <div className="w-full md:w-[40%] flex items-start md:items-start justify-start">
        <div>
          <p className="uppercase text-lg font-bold text-white mb-4 ">
            Who We Are
          </p>
          
        </div>
      </div>

      {/* Bagian Kanan (70%) */}
      <div className="w-full md:w-[60%]  flex justify-start items-start flex-col gap-10  ">
        <h1 className="text-4xl md:text-[80px]  font-bold font-glyphic leading-tight tracking-normal">
        Your <span className="text-main"> strategic </span> partner that deliver <span className="text-main"> innovation </span> and <span className="text-main"> sustainability </span>

        </h1>
        <p className="text-lg 2xl:p-20 p-6 bg-secondary border-b-[20px] border-l-[20px] border-main md:text-xl leading-relaxed text-white">
          L&T Business Consulting is committed to delivering innovative and
          tailored business strategies to support our clients' growth. With a
          proven track record in various industries, we help companies navigate
          complex challenges and seize new opportunities. Our team of
          experienced consultants is dedicated to providing solutions that drive
          measurable results.
        </p>
      </div>
    </div>
  );
};

export default About;
