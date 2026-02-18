"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Cards from "./cards/Cards";
import { work } from "@/constants/work";

type Props = {};

type WorkType = {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
};

const isBrowser = typeof window !== "undefined";

export default function Works({}: Props) {
  // get the width of the screen
  let screenWidth = 0;

  if (isBrowser) {
    screenWidth = window.innerWidth;
  }

  const times = 100;
  const wordsArray = Array(times).fill("Works");

  const numRows = screenWidth > 1024 ? 7 : 32;
  const [positions, setPositions] = useState(Array(numRows).fill(0));

  const prevScrollY = useRef<number>(0);
  const controls = useAnimation();
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = (currentScrollY - prevScrollY.current) as number;
      prevScrollY.current = currentScrollY;

      setPositions((prevPositions) =>
        prevPositions.map((position, index) =>
          index % 2 === 0 ? position - deltaY : position + deltaY
        )
      );

      controls.start((index) => ({
        x: positions[index],
        transition: { type: "spring", stiffness: 80, damping: 30 }
      }));
    };
    // Ensure window is defined
    if (typeof window !== "undefined") {
      // Set initial scrollY value
      prevScrollY.current = window.scrollY;

      const onScroll = () => {
        if (requestRef.current === null) {
          requestRef.current = requestAnimationFrame(() => {
            handleScroll();
            requestRef.current = null;
          });
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [controls, positions]);

  return (
    <div className="relative mt-16 w-full">
      {/* Section heading — fades in on scroll */}
      <motion.div
        className="text-center mb-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold text-secondary/40 uppercase tracking-widest mb-2">
          Portfolio
        </p>
        <h2 className="text-3xl xl:text-5xl font-black text-secondary">
          Selected Works
        </h2>
      </motion.div>

      {/* Cards grid — staggered entrance */}
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 px-4 xl:px-72 gap-8 py-10 bg-white/0 mt-10 z-10 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } }
        }}
      >
        {work.map((item: WorkType) => (
          <Cards
            key={item.id}
            title={item.title}
            image={item.image}
            github={item.github}
            live={item.live}
            description={item.description}
          />
        ))}
      </motion.div>
      {/* Background */}
      <div className="flex absolute w-full top-0 flex-col bg-primary overflow-hidden z-0">
        {[...Array(numRows)].map((_, rowIndex) => {
          const isOddRow = rowIndex % 2 !== 0;
          return (
            <div
              className={`flex justify-center w-full ${
                rowIndex > 0
                  ? `-mt-[70px] xl:-mt-[150px] -ml-[${150 * rowIndex}]`
                  : ""
              } text-center`}
              key={rowIndex}
            >
              {wordsArray.map((word, wordIndex) => (
                <motion.h2
                  key={wordIndex}
                  custom={rowIndex}
                  animate={controls}
                  className="text-[100px] xl:text-[228px] font-black text-[#00296B]/10 uppercase space-x-2"
                >
                  {word}
                </motion.h2>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
