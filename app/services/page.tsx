import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ServicesComponent from "@/components/services/ServicesComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the development services offered by Andrew Hilario — web development, API design, UI/UX implementation, and more.",
  alternates: {
    canonical: "https://andrewhilario.site/services"
  },
  openGraph: {
    title: "Services | Andrew Hilario",
    description:
      "Explore the development services offered by Andrew Hilario — web development, API design, UI/UX implementation, and more.",
    url: "https://andrewhilario.site/services"
  }
};

const ServicesPage: React.FC = () => {
  return (
    <main className="w-full  flex items-center flex-col">
      <Navbar />
      <ServicesComponent />
      <Footer />
    </main>
  );
};

export default ServicesPage;
