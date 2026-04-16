"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/andrewhilario", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/hilarioandrew12/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/drewdlesss", icon: FaFacebook, label: "Facebook" }
];

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" }
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-24 w-full border-t border-secondary/10 py-10 px-4"
    >
      <div className="max-w-4xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-col items-center xl:items-start gap-1"
        >
          <Link href="/" className="text-secondary font-black text-lg tracking-tight hover:opacity-80 transition-opacity">
            andrewhilario.site
          </Link>
          <p className="text-secondary/40 text-xs">Full-Stack Developer &middot; Philippines</p>
        </motion.div>

        {/* Nav links with sliding underline */}
        <nav className="flex items-center gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-secondary/50 hover:text-secondary text-sm font-medium transition-colors duration-150 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-secondary rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Social icons with spring bounce */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-secondary/40 hover:text-secondary transition-colors duration-150"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-secondary/30 text-xs mt-8"
      >
        &copy; {new Date().getFullYear()} Andrew Hilario. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}
