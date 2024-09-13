import ChangingText from "@/utils/ChangingText";
import Image from "next/image";
import React from "react";

type Props = {};

export default function AboutComponent({}: Props) {
  return (
    <div className="py-32 xl:py-52 xl:w-3/4 flex flex-col xl:flex-row justify-center items-center gap-10 text-secondary px-5">
      <div>
        <Image
          src="/images/profile.png"
          width={800}
          height={800}
          quality={100}
          className=""
          alt="profile"
        />
      </div>
      <div className="flex flex-col space-y-8">
        <h1 className="text-5xl xl:text-8xl">
          I’m <ChangingText />
        </h1>
        <p className="text-lg xl:text-2xl text-secondary">
          I’m a Front-End Developer from Philippines.
        </p>
        <p className="text-lg xl:text-2xl text-secondary">
          For more than 4 years of experience in the IT field, I have learned
          and worked on various projects being a Full-Stack Developer.
          Additionally, I am fairly knowledgeable on Mobile and WordPress
          Development.
        </p>
        <p className="text-lg xl:text-2xl text-secondary">
          When I’m not doing my job, I usually play online games and streaming.
          I also love editing videos and share it on my social media. 😊
        </p>
      </div>
    </div>
  );
}
