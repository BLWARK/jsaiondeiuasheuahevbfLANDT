import React from "react";
import Image from "next/image";

const Tools = () => {
  return (
    <div className="relative bg-main w-screen 2xl:p-40 p-6 py-10 flex flex-col justify-center items-center md:flex-row 2xl:gap-40 gap-10">
      {/* Gambar Cube (Dekorasi) */}
      <div className="absolute top-10 left-10 w-64 h-64 z-50">
        <Image
          src="/cube1.png" // Ganti dengan path file cube Anda
          alt="Cube Decoration"
          width={170}
          height={120}
          className="float 2xl:block hidden "
        />
      </div>
      <div className="absolute bottom-0 right-10 w-64 h-74 z-50">
        <Image
          src="/cube2.png" // Ganti dengan path file cube Anda
          alt="Cube Decoration"
          width={170}
          height={150}
          className="float 2xl:block hidden "
        />
      </div>
      <div className="absolute top-10 right-10 w-24 h-24 z-50">
        <Image
          src="/cube1.png" // Ganti dengan path file cube Anda
          alt="Cube Decoration"
          width={120}
          height={120}
          className="float 2xl:hidden block "
        />
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 z-50">
        <Image
          src="/cube1.png" // Ganti dengan path file cube Anda
          alt="Cube Decoration"
          width={120}
          height={120}
          className="float 2xl:hidden block "
        />
      </div>

      {/* Bagian Kiri (30%) */}
      <div className="w-full md:w-[40%] flex flex-col justify-start">
        <p className="uppercase text-lg font-bold text-bold mb-10 tracking-widest">
          The Tools
        </p>
        <h1 className="text-3xl md:text-8xl font-bold text-secondary leading-tight font-glyphic">
          Strategic Tools for Business Excellence and Sustainability.
        </h1>
      </div>

      {/* Bagian Kanan (70%) */}
      <div className="w-full md:w-[40%] grid grid-cols-1 justify-start items-center gap-8 text-white mt-10">
        {/* Tools List */}
        <div className="space-y-8">
          <div className="border-b border-gray-300 py-2">
            <p className="text-lg font-medium">Strategic Business & Management</p>
          </div>
          <div className="border-b border-gray-300 py-2">
            <p className="text-lg font-medium">Organization Development & HR Management</p>
          </div>
          <div className="border-b border-gray-300 py-2">
            <p className="text-lg font-medium">Financial Structure & Engineering</p>
          </div>
          <div className="border-b border-gray-300 py-2">
            <p className="text-lg font-medium">Tax, Legal & Auditing</p>
          </div>
          <div className="border-b border-gray-300 py-2">
            <p className="text-lg font-medium">
              Public Affairs, Marketing & Corporate Communication
            </p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <p className="text-lg font-medium">Trainings & Coaching</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
