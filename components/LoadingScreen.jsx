import React, { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Mulai animasi keluar
    }, 2500); // Loading selesai setelah 2,5 detik

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-transform duration-700 ${
        isExiting ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <Image
        src="/LOOKLS.gif" // Path file GIF
        alt="Loading..."
        width={450}
        height={450}
        className="object-contain"
      />
    </div>
  );
};

export default LoadingScreen;
