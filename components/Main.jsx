import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="container w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-slate-600 dark:text-slate-300">
            LETS BUILD SOMETING TOGETHER
          </p>
          <h1 className="py-4 text-slate-700 dark:text-indigo-100">
            Hi, I{"'"}m <span className="text-indigo-600">Rakib</span>
          </h1>
          <h1 className="py-2 text-slate-700 dark:text-indigo-100">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-slate-600 max-w-[70%] mx-auto dark:text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            pariatur voluptatem possimus molestias reiciendis, quidem rerum
            officia unde at! Deserunt.
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
