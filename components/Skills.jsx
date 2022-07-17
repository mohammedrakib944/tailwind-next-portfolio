import Image from "next/image";
import React from "react";

import ReactImg from "../assets/react.png";

const Skills = () => {
  return (
    <div className="container mx-auto lg:w-[70%] px-4 py-16">
      <p className="text-xl text-indigo-500 tracking-widest">Skills</p>
      <h2 className="py-4 text-slate-700 dark:text-slate-200 mb-4">
        What I Can Do
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none">
          <div className="text-center">
            <div className="m-auto">
              <Image width="100%" height="110px" src={ReactImg} />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              React Js
            </p>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none">
          <div className="text-center">
            <div className="m-auto">
              <Image width="100%" height="110px" src={ReactImg} />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              React Js
            </p>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none">
          <div className="text-center">
            <div className="m-auto">
              <Image width="100%" height="110px" src={ReactImg} />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              React Js
            </p>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none">
          <div className="text-center">
            <div className="m-auto">
              <Image width="100%" height="110px" src={ReactImg} />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              React Js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
