import React from "react";
import {
  FaReact,
  FaVuejs,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaJira,
  FaHtml5,
  FaLess,
} from "react-icons/fa";
import { SiAntdesign, SiRedux, SiAxios, SiTailwindcss  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
const ICONS = [
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaReact,
  FaVuejs,
  FaJira,
  SiAntdesign,
  SiRedux,
  SiAxios,
  SiTailwindcss,
  FaHtml5,
  FaLess,
  GrMysql,
];
import Marquee from "react-fast-marquee";

export const Footer = () => {
  return (
    <div className="bg-black min-h-[300px] py-4 px-3 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-slate-200 font-semibold text-2xl md:text-3xl">{`<Q.Pham /> Frontend Developer`}</h1>
        <form className="w-full max-w-3xl">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Email to me..."
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
        <div className="w-1/3">
          <Marquee>
            <div className="flex items-center gap-4 mt-6">
              {ICONS.map((Component, index) => (
                <Component key={index} color="white" size="20" />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="italic font-medium text-slate-300 block text-center">
          You must be the change you wish too see in the world
        </span>
        <span className="italic font-medium text-slate-300 block text-center text-xs">
          Copyright © by Quan Pham
        </span>
      </div>
    </div>
  );
};
