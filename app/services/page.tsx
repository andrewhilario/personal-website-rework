import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ServicesComponent from "@/components/services/ServicesComponent";
import React from "react";

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
