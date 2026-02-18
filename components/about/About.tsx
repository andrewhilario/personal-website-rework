import ChangingText from "@/utils/ChangingText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

type Props = {};

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Happy Clients" }
];

export default function AboutComponent({}: Props) {
  return (
    <section className="py-24 xl:py-40 xl:w-3/4 w-full flex flex-col xl:flex-row justify-center items-center gap-16 text-secondary px-5">
      {/* Profile image + stats */}
      <div className="flex flex-col items-center gap-8 shrink-0">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-secondary/10 blur-sm" />
          <Image
            src="/images/profile.png"
            width={320}
            height={320}
            quality={100}
            className="relative rounded-full object-cover w-56 h-56 xl:w-72 xl:h-72 border-4 border-white shadow-xl"
            alt="Andrew Hilario profile photo"
          />
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl xl:text-3xl font-black text-secondary">
                {stat.value}
              </p>
              <p className="text-xs xl:text-sm text-secondary/50 mt-0.5 whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-6 max-w-2xl">
        <div>
          <p className="text-sm font-semibold text-secondary/40 uppercase tracking-widest mb-2">
            About Me
          </p>
          <h1 className="text-4xl xl:text-6xl font-black leading-tight">
            I&apos;m <ChangingText />
          </h1>
        </div>

        <p className="text-base xl:text-lg text-secondary/70 leading-relaxed">
          A <strong>Full-Stack Developer</strong> from the Philippines with 4+
          years of experience building web and mobile applications. I specialise
          in modern JavaScript/TypeScript ecosystems, Django back-ends, and
          delivering polished user experiences.
        </p>

        <p className="text-base xl:text-lg text-secondary/70 leading-relaxed">
          I&apos;m also familiar with Mobile (React Native) and WordPress
          development, which lets me cover a wide range of client needs — from
          landing pages to full-featured SaaS products.
        </p>

        <p className="text-base xl:text-lg text-secondary/70 leading-relaxed">
          Outside of coding I enjoy gaming, streaming, and video editing. �
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-5 py-2.5 rounded-xl shadow-md hover:opacity-90 transition-all duration-200 text-sm"
          >
            Hire Me
          </Link>
          <a
            href="/resume/Andrew_Hilario_Resume.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-secondary text-secondary font-semibold px-5 py-2.5 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-200 text-sm"
          >
            <HiDownload size={16} />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 pt-1">
          <a
            href="https://github.com/andrewhilario"
            target="_blank"
            rel="noreferrer"
            className="text-secondary/40 hover:text-secondary transition-colors duration-150"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/hilarioandrew12/"
            target="_blank"
            rel="noreferrer"
            className="text-secondary/40 hover:text-secondary transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
