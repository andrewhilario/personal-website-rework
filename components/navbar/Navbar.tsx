import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav>
      <ul className="flex justify-center w-full gap-5 items-center px-4 py-1 mt-6 rounded-2xl  bg-[#F9F7FE]">
        <li className="text-md xl:text-xl text-secondary font-bold text-center p-2 rounded-lg cursor-pointer hover:bg-white">
          <a href="/">Work</a>
        </li>
        <li className="text-md xl:text-xl text-secondary font-bold text-center p-2 rounded-lg cursor-pointer hover:bg-white">
          <a href="/about">About</a>
        </li>
        <li className="text-md xl:text-xl text-secondary font-bold text-center p-2 rounded-lg cursor-pointer hover:bg-white">
          <a href="/resume">Resume</a>
        </li>
        <li className="text-md xl:text-xl text-secondary font-bold text-center p-2 rounded-lg cursor-pointer hover:bg-white">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>Blogs</TooltipTrigger>
              <TooltipContent>
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </nav>
  );
}
