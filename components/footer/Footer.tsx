import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="mt-24 w-full h-20  flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <a
            href="https://www.facebook.com/andrew.hilario.0412"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-2xl xl:text-4xl" />
          </a>
        </div>
        {/* <div className="text-center">
          <a href="" target="_blank" rel="noreferrer">
            <FaSquareXTwitter className="text-2xl" />
          </a>
        </div> */}
        <div className="text-center">
          <a
            href="https://github.com/andrewhilario"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl xl:text-4xl" />
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/hilarioandrew12/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl xl:text-4xl" />
          </a>
        </div>
      </div>
      <a
        href="/"
        className="text-center text-secondary mt-4 text-sm xl:text-lg"
      >
        © {new Date().getFullYear()} andrewhilario.tech
      </a>
    </div>
  );
}
