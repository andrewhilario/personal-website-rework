"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

type Props = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
};

// Each card is a stagger child
export default function Cards({ title, image, github, live, description }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3-D tilt on mouse-move
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px -8px rgba(0,41,107,0.18)" }}
      className="group rounded-2xl overflow-hidden border border-secondary/10 bg-white shadow-sm flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-secondary/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-secondary/60 flex items-center justify-center gap-3"
        >
          <Link
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-secondary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={15} />
            Code
          </Link>
          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-secondary text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <HiExternalLink size={15} />
              Live
            </Link>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          {/* Animated underline on title */}
          <h3 className="relative text-secondary font-bold text-lg leading-snug inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-secondary/40 after:transition-all after:duration-300 group-hover:after:w-full">
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-secondary/40 hover:text-secondary transition-colors duration-150"
              aria-label="GitHub repository"
            >
              <FaGithub size={18} />
            </Link>
            {live && (
              <Link
                href={live}
                target="_blank"
                rel="noreferrer"
                className="text-secondary/40 hover:text-secondary transition-colors duration-150"
                aria-label="Live site"
              >
                <HiExternalLink size={18} />
              </Link>
            )}
          </div>
        </div>
        <p className="text-secondary/60 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
