import AboutComponent from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <main className="w-full bg-primary flex items-center flex-col">
      <Navbar />
      <AboutComponent />
      <Footer />
    </main>
  );
}
