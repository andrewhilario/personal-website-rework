import AboutComponent from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ResumeComponent from "@/components/resume/ResumeComponent";
import React from "react";

type Props = {};

export default function Resume({}: Props) {
  return (
    <main className="w-full bg-primary flex items-center flex-col">
      <Navbar />
      <ResumeComponent />
      <Footer />
    </main>
  );
}
