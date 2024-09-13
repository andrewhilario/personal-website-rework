import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
};
const isBrowser = typeof window !== "undefined";

export default function Cards({
  title,
  image,
  github,
  live,
  description
}: Props) {
  const [showBtns, setShowBtns] = useState(false);
  const router = useRouter();

  // get the width of the screen
  let screenWidth = 0;

  if (isBrowser) {
    screenWidth = window.innerWidth;
  }

  const handleHover = () => {
    // alert("Hovered");
    setShowBtns(!showBtns);
  };

  return (
    <div
      className="rounded-lg cursor-pointer relative overflow-hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`${
          showBtns &&
          "absolute w-full h-full bg-black/70 transition-all duration-700 ease-in-out z-10"
        }`}
      ></div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className={`rounded-lg object-fill w-full transition-all duration-400 ease-in-out`}
      />

      {screenWidth < 1024 && (
        <>
          <h1 className="text-xl text-secondary px-4 py-2 rounded-lg text-center">
            {title}{" "}
          </h1>
          <h2 className="text-md text-secondary px-4 py-2 rounded-lg text-center">
            {description}
          </h2>
          <div className="flex gap-2 items-center justify-center">
            <button
              className="bg-[#151B23] text-white px-4 py-2 rounded-lg"
              onClick={() => router.push(github)}
            >
              Github
            </button>
            {live !== undefined && (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  if (live) {
                    router.push(live);
                  }
                }}
              >
                Live
              </button>
            )}
          </div>
        </>
      )}

      <div
        className={`w-full flex flex-col z-20 gap-2 items-center absolute  left-[50%] translate-x-[-50%] transition-all duration-400 ease-in-out ${
          showBtns ? "bottom-10" : "bottom[-200%] xl:bottom-[-100%]"
        }`}
      >
        <h1 className="text-4xl text-white px-4 py-2 mb-2 rounded-lg text-center">
          {title}{" "}
        </h1>
        <h2 className="text-xl text-white px-4 py-2 mb-5 rounded-lg text-center">
          {description}
        </h2>

        <div className="flex gap-2 items-center">
          <button
            className="bg-[#151B23] text-white px-4 py-2 rounded-lg"
            onClick={() => router.push(github)}
          >
            Github
          </button>
          {live !== undefined && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                if (live) {
                  router.push(live);
                }
              }}
            >
              Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
