import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#e18028",        // Warna utama
        secondary: "#75614F",   // Warna latar belakang
        hover: "#34D399",     // Warna saat hover
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        glyphic: ["'Faculty Glyphic'", "serif"],  // Font untuk judul
        poppins: ["'Poppins'", "sans-serif"],     // Font untuk isi
      },
    },
  },
  plugins: [],
} satisfies Config;
