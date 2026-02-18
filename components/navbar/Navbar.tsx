"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 w-full flex justify-center px-4 transition-all duration-300`}
    >
      <nav
        className={`flex items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg shadow-secondary/5 border border-secondary/10"
            : "bg-white/60 backdrop-blur-sm border border-secondary/10"
        }`}
      >
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative px-4 py-2 rounded-xl text-sm xl:text-base font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-primary shadow-sm"
                  : "text-secondary hover:bg-secondary/8"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
