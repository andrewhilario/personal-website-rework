"use client";

import CodeParticles from "./CodeParticles";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden min-h-screen">
      {/* Three.js particle background */}
      <CodeParticles />

      {/* Foreground content — layered above canvas */}
      <div className="relative z-10 flex flex-col items-center pt-28 xl:pt-36 pb-20">
        {/* Availability badge */}
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-sm font-medium"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Available for freelance work
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-secondary"
      >
        <h1 className="text-4xl xl:text-[72px] font-black leading-tight xl:leading-tight tracking-tight">
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            Andrew Hilario
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-secondary/30 rounded-full" />
          </span>
          .
        </h1>
        <h2 className="mt-3 xl:mt-4 text-2xl xl:text-4xl font-semibold text-secondary/70">
          Full-Stack Developer
        </h2>
      </motion.div>

      {/* Sub-description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-secondary/60 text-base xl:text-lg max-w-xl leading-relaxed"
      >
        I build fast, scalable, and beautiful web applications — from concept to
        deployment. Let&apos;s turn your idea into reality.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all duration-200 text-sm xl:text-base"
        >
          Hire Me
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 border-2 border-secondary text-secondary font-semibold px-6 py-3 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-200 text-sm xl:text-base"
        >
          About Me
        </Link>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex items-center gap-4 text-secondary/50"
      >
        <a
          href="https://github.com/andrewhilario"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <span className="w-px h-4 bg-secondary/20" />
        <a
          href="https://www.linkedin.com/in/hilarioandrew12/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-secondary/30 flex flex-col items-center gap-1 text-xs"
      >
        <span>scroll down</span>
        <HiArrowDown className="animate-bounce" size={16} />
      </motion.div>
      </div>
    </section>
  );
}
