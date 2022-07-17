import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

import bg from "../assets/bg.png";

const Main = () => {
  const Background = {
    backgroundImage: `url(${bg.src})`,
  };

  return (
    <div
      className="w-full h-screen text-center bg-no-repeat bg-contain"
      style={Background}
    >
      <div className="container w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-slate-600 dark:text-slate-300">
            LETS BUILD SOMETING TOGETHER
          </p>
          <h1 className="py-4 text-slate-700 dark:text-sky-100">
            Hi, I&apos;m <span className="text-sky-500">Rakib 😎</span>
          </h1>
          <h1 className="py-2 text-slate-700 dark:text-sky-100">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-slate-600  max-w-[70%] mx-auto dark:text-slate-400">
            I am an undergraduate computer science student. I am passionate
            about Programming and Technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] mx-auto py-4">
            <div className="c-button p-5 text-lg">
              <FaLinkedinIn />
            </div>
            <div className="c-button p-5 text-lg">
              <FaGithub />
            </div>
            <div className="c-button p-5 text-lg">
              <AiOutlineMail />
            </div>
            <div className="c-button p-5 text-lg">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
