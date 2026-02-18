"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { icon: FaHtml5, label: "HTML5", color: "#E44D26" },
  { icon: FaCss3Alt, label: "CSS3", color: "#264DE4" },
  { icon: IoLogoJavascript, label: "JavaScript", color: "#F0DB4F" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: FaReact, label: "React", color: "#61DAFB" },
  { icon: RiNextjsFill, label: "Next.js", color: "#111111" },
  { icon: SiDjango, label: "Django", color: "#092E20" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38B2AC" },
  { icon: FaGitAlt, label: "Git", color: "#F05032" },
  { icon: VscVscode, label: "VS Code", color: "#007ACC" }
];

function TechCard({
  icon: Icon,
  label,
  color,
  index
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  index: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Magnetic motion values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 20 });
  const sy = useSpring(my, { stiffness: 300, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 14);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.82 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 14,
        delay: index * 0.06
      }}
      className="flex flex-col items-center gap-2"
    >
      <div
        ref={wrapperRef}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <motion.div
          style={{ x: sx, y: sy }}
          animate={{
            scale: hovered ? 1.22 : 1,
            boxShadow: hovered
              ? `0 8px 24px -4px ${color}55`
              : "0 1px 4px rgba(0,0,0,0.06)"
          }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center rounded-2xl bg-white border border-secondary/10"
        >
          <Icon
            style={{ color: hovered ? color : undefined }}
            className="text-2xl xl:text-3xl transition-colors duration-200"
          />
        </motion.div>
        <span
          style={{ color: hovered ? color : undefined }}
          className="text-[10px] xl:text-xs font-medium text-secondary/50 transition-colors duration-200"
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function ProgLang() {
  return (
    <section className="relative w-full py-20 xl:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold text-secondary/40 uppercase tracking-widest mb-3"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl xl:text-5xl font-black text-secondary mb-12"
        >
          Tools &amp; Technologies
        </motion.h2>

        <div className="grid grid-cols-5 xl:grid-cols-10 gap-6 xl:gap-8">
          {techStack.map((tech, i) => (
            <TechCard key={tech.label} {...tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
