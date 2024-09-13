"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

type Props = {};

const isBrowser = typeof window !== "undefined";

export default function ProgLang({}: Props) {
  let screenWidth = 0;

  if (isBrowser) {
    screenWidth = window.innerWidth;
  }

  const times = 100;
  const wordsArray = Array(times).fill("techstack");

  const numRows = screenWidth > 1024 ? 5 : 9;
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
    <div className="relative w-full flex justify-center items-center">
      <div className="mt-18 xl:mt-24 flex flex-col text-center xl:px-72 gap-20 py-10 justify-center z-10 relative">
        <h1 className="text-[#00296B] text-4xl xl:text-6xl font-black uppercase">
          Programming Languages & Development Tools
        </h1>
        <div className="grid grid-cols-5 w-[90%] xl:w-[70%] mx-auto justify-center items-center">
          <div className="flex justify-center items-center">
            <FaHtml5 className="text-5xl xl:text-8xl text-[#E44D26]" />
          </div>
          <div className="flex justify-center items-center">
            <FaCss3Alt className="text-5xl xl:text-8xl text-[#264DE4]" />
          </div>
          <div className="flex justify-center items-center">
            <SiDjango className="text-5xl xl:text-8xl text-[#092E20]" />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <IoLogoJavascript className="text-5xl xl:text-8xl text-[#F0DB4F]" />
          </div>
          <div className="flex justify-center items-center">
            <SiTypescript className="text-5xl xl:text-8xl text-[#3178C6]" />
          </div>
        </div>
        <div className="grid grid-cols-5 w-[90%] xl:w-[70%] mx-auto  justify-center items-center">
          <div className="flex justify-center items-center">
            {" "}
            <RiNextjsFill className="text-5xl xl:text-8xl text-[#000000]" />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <FaReact className="text-5xl xl:text-8xl text-[#61DAFB]" />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <SiTailwindcss className="text-5xl xl:text-8xl text-[#38B2AC]" />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <VscVscode className="text-5xl xl:text-8xl text-[#007ACC]" />
          </div>
          <div className="flex justify-center items-center">
            <FaGitAlt className="text-5xl xl:text-8xl text-[#F05032]" />
          </div>
        </div>
      </div>
      <div className="flex absolute w-full top-0 flex-col bg-primary overflow-hidden z-0">
        {[...Array(numRows)].map((_, rowIndex) => {
          const isOddRow = rowIndex % 2 !== 0;
          return (
            <div
              className={`flex justify-center w-full ${
                rowIndex > 0
                  ? `-mt-[50px] xl:-mt-[100px] -ml-[${150 * rowIndex}]`
                  : ""
              } text-center`}
              key={rowIndex}
            >
              {wordsArray.map((word, wordIndex) => (
                <motion.h2
                  key={wordIndex}
                  custom={rowIndex}
                  animate={controls}
                  className="text-[70px] xl:text-[150px] font-black text-[#00296B]/10 uppercase space-x-2"
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
