import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CookiesConsentPopup from "@/components/CookiesConsent";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "ROMantic",
  description:
    "ROMantic is a platform that offers a gateway to the golden age of gaming. Dive into a world of retro gaming fun!",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
        <CookiesConsentPopup />
      </body>
    </html>
  );
}
