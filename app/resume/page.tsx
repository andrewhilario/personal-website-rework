import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ResumeComponent from "@/components/resume/ResumeComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download the resume of Andrew Hilario — Full-Stack Developer with experience in React, Next.js, Django, and TypeScript.",
  alternates: {
    canonical: "https://andrewhilario.site/resume"
  },
  openGraph: {
    title: "Resume | Andrew Hilario",
    description:
      "View and download the resume of Andrew Hilario — Full-Stack Developer with experience in React, Next.js, Django, and TypeScript.",
    url: "https://andrewhilario.site/resume"
  }
};

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
