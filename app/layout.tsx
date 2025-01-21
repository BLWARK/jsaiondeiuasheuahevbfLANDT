import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer"
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});


// Metadata API (SEO Optimization)
export const metadata: Metadata = {
  title: "L&T Business Consulting - Konsultan Bisnis Profesional",
  description: "L&T Business Consulting membantu mengembangkan bisnis Anda dengan strategi yang inovatif dan terukur.",
  keywords: ["Konsultan Bisnis", "Pengembangan Bisnis", "Strategi Bisnis", "Layanan Bisnis", "Bisnis Konsultasi"],
  authors: [{ name: "L&T Business Consulting", url: "https://ltbusinessconsulting.com" }],
  generator: "Next.js",
  applicationName: "L&T Business Consulting",
  creator: "L&T Business Consulting",
  publisher: "L&T Business Consulting",
  metadataBase: new URL("https://ltbusinessconsulting.com"),
  alternates: {
    canonical: "https://ltbusinessconsulting.com",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ltbusinessconsulting.com",
    title: "L&T Business Consulting - Konsultan Bisnis Profesional",
    description: "Kami membantu bisnis Anda tumbuh dengan solusi yang tepat dan efektif.",
    siteName: "L&T Business Consulting",
    images: [
      {
        url: "https://ltbusinessconsulting.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L&T Business Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L&T Business Consulting - Konsultan Bisnis Profesional",
    description: "Solusi bisnis terbaik untuk kebutuhan Anda.",
    creator: "@ltbusinessconsulting",
    images: ["https://ltbusinessconsulting.com/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "Business Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        
      </head>
      <body
        className={`${poppins.variable}  antialiased bg-main text-white font-poppins`}
      >
        <div className="relative overflow-hidden">
          <Navbar />
          <main className="relative ">{children}</main>
         <Footer/>
        </div>
      </body>
    </html>
  );
}
