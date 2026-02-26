"use client";

import ChangingText from "@/utils/ChangingText";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Happy Clients" },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Django",
  "React Native",
  "PostgreSQL",
  "Tailwind CSS",
  "WordPress",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutComponent() {
  return (
    <section className="relative w-full overflow-hidden py-24 xl:py-36 px-5">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00296B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-16 xl:gap-24">
        {/* ── Left column: profile + stats ── */}
        <div className="flex flex-col items-center gap-8 shrink-0">
          {/* Profile image card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-secondary/10 blur-2xl" />
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-secondary/20 animate-[spin_20s_linear_infinite]" />
            {/* Inner solid ring */}
            <div className="absolute -inset-1.5 rounded-full border border-secondary/15" />
            <Image
              src="/images/profile.png"
              width={320}
              height={320}
              quality={100}
              className="relative rounded-full object-cover w-52 h-52 xl:w-64 xl:h-64 border-4 border-white shadow-2xl shadow-secondary/20"
              alt="Andrew Hilario profile photo"
            />
            {/* Floating availability badge */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              custom={3}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-white border border-secondary/10 shadow-md shadow-secondary/10 rounded-full px-3.5 py-1.5 text-xs font-semibold text-secondary whitespace-nowrap"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for hire
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex items-stretch gap-0 rounded-2xl overflow-hidden border border-secondary/15 shadow-sm bg-white/60 backdrop-blur-sm divide-x divide-secondary/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-6 py-4">
                <span className="text-2xl xl:text-3xl font-black text-secondary">
                  {stat.value}
                </span>
                <span className="text-[10px] xl:text-xs text-secondary/50 mt-0.5 whitespace-nowrap font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/andrewhilario"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-secondary/40 hover:text-secondary transition-colors duration-200 text-sm font-medium"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
              <span className="hidden xl:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </a>
            <span className="w-px h-5 bg-secondary/15" />
            <a
              href="https://www.linkedin.com/in/hilarioandrew12/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-secondary/40 hover:text-secondary transition-colors duration-200 text-sm font-medium"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
              <span className="hidden xl:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── Right column: text content ── */}
        <div className="flex flex-col gap-7 max-w-2xl text-secondary w-full">

          {/* Label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="inline-flex items-center gap-2"
          >
            <span className="w-8 h-px bg-secondary/30" />
            <p className="text-xs font-bold text-secondary/40 uppercase tracking-[0.2em]">
              About Me
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            <h1 className="text-4xl xl:text-6xl font-black leading-tight tracking-tight">
              I&apos;m{" "}
              <span className="relative">
                <ChangingText />
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-secondary/20 origin-left"
                />
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            custom={3}
            className="w-full h-px bg-secondary/10"
          />

          {/* Bio paragraphs */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="text-base xl:text-lg text-secondary/70 leading-relaxed"
          >
            A <strong className="text-secondary font-bold">Full-Stack Developer</strong> from the Philippines with 4+
            years of experience building web and mobile applications. I specialise
            in modern JavaScript/TypeScript ecosystems, Django back-ends, and
            delivering polished user experiences.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="text-base xl:text-lg text-secondary/70 leading-relaxed"
          >
            I&apos;m also familiar with Mobile (React Native) and WordPress
            development, which lets me cover a wide range of client needs — from
            landing pages to full-featured SaaS products.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="text-base xl:text-lg text-secondary/70 leading-relaxed"
          >
            Outside of coding I enjoy gaming, streaming, and video editing.
          </motion.p>

          {/* Skill tags */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-semibold text-secondary/70 border border-secondary/15 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full hover:border-secondary/30 hover:text-secondary transition-colors duration-150"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={7}
            className="flex flex-wrap gap-3 pt-1"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-xl shadow-md shadow-secondary/20 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              Hire Me
            </Link>
            <a
              href="/resume/Andrew_Hilario_Resume.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary font-semibold px-6 py-3 rounded-xl hover:bg-secondary hover:text-primary hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              <HiDownload size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
