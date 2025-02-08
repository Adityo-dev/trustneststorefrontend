import MainNavigationBar from "@/components/shared/navigationBar/MainNavigationBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavigationBar from "@/components/shared/navigationBar/MainNavigationBar";
import Footer from "@/components/shared/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trust next store",
  description: "Generated by create next app",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
