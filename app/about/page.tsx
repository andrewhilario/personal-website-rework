import AboutComponent from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Andrew Hilario — a Full-Stack Developer passionate about building clean, scalable web applications.",
  alternates: {
    canonical: "https://andrewhilario.site/about"
  },
  openGraph: {
    title: "About | Andrew Hilario",
    description:
      "Learn more about Andrew Hilario — a Full-Stack Developer passionate about building clean, scalable web applications.",
    url: "https://andrewhilario.site/about"
  }
};

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
