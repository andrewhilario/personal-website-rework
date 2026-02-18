import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

type Props = {};

export default function ResumeComponent({}: Props) {
  return (
    <div className="py-10 px-4 xl:px-0 xl:w-2/3 flex flex-col justify-center items-center gap-6 text-secondary">
      <div className="flex justify-center items-center gap-3 mb-2">
        <a
          href="https://www.linkedin.com/in/hilarioandrew12/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-secondary text-secondary font-medium text-sm tracking-wide hover:bg-secondary hover:text-primary transition-all duration-200"
        >
          <FaLinkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a
          href="/resume/Andrew_Hilario_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-primary font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-200 shadow-md"
        >
          <Download size={16} />
          <span>Download CV</span>
        </a>
      </div>
      <div className="rounded-2xl hover:shadow-2xl relative transition-all duration-500 ease-out">
        <Image
          src="/images/resume-1.png"
          quality={100}
          width={600}
          height={800}
          className="w-full max-w-[600px] h-auto"
          alt="resume page 1"
          priority
          style={{ borderRadius: "1rem", objectFit: "contain" }}
        />
      </div>
      <div className="rounded-2xl hover:shadow-2xl transition-all duration-500 ease-out">
        <Image
          src="/images/resume-2.png"
          quality={100}
          width={600}
          height={800}
          className="w-full max-w-[600px] h-auto"
          alt="resume page 2"
          style={{ borderRadius: "1rem", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
