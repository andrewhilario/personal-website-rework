import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ProgLang from "@/components/prog-lang/ProgLang";
import Works from "@/components/works/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-primary flex items-center flex-col">
      <Navbar />
      <Hero />
      <Works />
      <ProgLang />
      <Footer />
    </main>
  );
}
