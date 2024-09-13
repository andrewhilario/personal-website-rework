import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="text-center mt-20 xl:mt-32">
      <div className="text-3xl xl:text-[64px] xl:space-y-6 text-secondary">
        <h1>Hello!</h1>
        <h1 className="">
          I am <b>Andrew Hilario</b>.
        </h1>
        <h1>
          A <b>Full-Stack Developer</b>.
        </h1>
      </div>
      <div className="mt-10 text-secondary text-sm w-5/6 mx-auto xl:w-full xl:text-xl font-medium">
        <p>Welcome to my portfolio.</p>
        <p>
          Below are the works that I created for implementing different <br />
          tech-stacks that can be useful for website development.
        </p>
      </div>
    </div>
  );
}
