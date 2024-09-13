import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

type Props = {};

export default function ResumeComponent({}: Props) {
  return (
    <div className="py-10 px-4 xl:px-0 xl:w-2/3  flex justify-center items-center gap-10 text-secondary">
      <div className="rounded-2xl hover:shadow-2xl relative transition-all duration-500 ease-out">
        <Image
          src="/images/Resume.png"
          quality={100}
          // fill
          width={1000}
          height={1000}
          className=""
          alt="resume"
          priority
          style={{ borderRadius: "1rem", objectFit: "cover" }}
        />
        <div className="flex xl:hidden p-4 justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/hilarioandrew12/"
            target="_blank"
            rel="noreferrer"
            className="border-2 p-2 border-secondary text-secondary rounded-lg"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/resume/andrew_hilario_cv.pdf"
            download
            className="border-2 border-secondary text-secondary px-2 py-2 rounded-lg flex gap-2 items-center"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>
        <div className="hidden xl:flex absolute top-0 right-4 p-4  gap-4">
          <a
            href="https://www.linkedin.com/in/hilarioandrew12/"
            target="_blank"
            rel="noreferrer"
            className="border-2 p-2 border-secondary text-secondary rounded-lg"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/resume/andrew_hilario_cv.pdf"
            download
            className="border-2 border-secondary text-secondary px-2 py-2 rounded-lg flex gap-2 items-center"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
