"use client";

import { useState, useEffect } from "react";

const ChangingText = () => {
  const words = [
    "A Gamer.",
    "A Developer.",
    "A Video Editor.",
    "Andrew.",
    "A Streamer."
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(words[currentWord].slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === words[currentWord].length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentWord]);

  return (
    <span className="font-bold transition-all duration-500 ease-in-out">
      {displayText}{" "}
      <span className="blinking-cursor text-md xl:text-8xl">|</span>
    </span>
  );
};

export default ChangingText;
