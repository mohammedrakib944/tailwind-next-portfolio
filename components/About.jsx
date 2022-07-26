import Image from "next/image";
import React from "react";
import { motion, variants } from "framer-motion";

import man from "../assets/rakib.jpg";
import { pAnimateY, Iam, emoji, imgAnimate } from "../public/animate";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto lg:w-[70%] px-4 flex items-center p-4"
    >
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="md:grid grid-cols-8 gap-10"
      >
        <div className="col-span-4 flex flex-col justify-center ">
          <p className="text-xl font-semibold tracking-widest text-sky-600 ">
            About
          </p>
          <motion.h2 variants={Iam} className="py-4 dark:text-slate-200">
            Who I Am
            <motion.div className="inline-block" variants={emoji}>
              🙄
            </motion.div>
          </motion.h2>
          <motion.p
            viewport={pAnimateY}
            className="py-2 text-slate-500 dark:text-slate-400 text-lg"
          >
            - I am your next Developer (maybe 🙂).
          </motion.p>
          <motion.p
            variants={pAnimateY}
            className="py-2 text-slate-500 dark:text-slate-400 text-lg"
          >
            My Name is Md.Rakibuzzaman (Rakib). I am an undergraduate computer
            science student. I have been doing programming since 2016. In early
            stage I learned HTML, CSS, and javascript. Javscript ! is my
            favorite Language 🥰. I started to do competitive programming in
            2019 then learn Data Structure and Algorithms. And Solved many
            problems on different websites like codechef.com, codeforces.com,
            hackerrank.com, etc. Besides, I attend Programming contests.
          </motion.p>
          <motion.p
            variants={pAnimateY}
            className="py-2 text-slate-500 dark:text-slate-400 text-lg"
          >
            Then I move to full stack development and Learn React js, Next js,
            Tailwind, Node js, Express js, and MongoDB. My goal was to be a
            skilled full stack developer. On the middle of 2021, I got a job. I
            did the job for 8 months as Front End Developer. Now a days, I am
            doing freelancing projects for my clients, And of course, Learning
            new technologies.
          </motion.p>
          <p className="py-2 text-slate-500 dark:text-slate-400 cursor-pointer">
            Check out my latest Projects
          </p>
        </div>
        <motion.div
          variants={imgAnimate}
          className="col-span-4 w-full  h-auto mt-4 md:m-auto shadow-xl border-2 rounded-[20px] justify-center items-center p-2 overflow-hidden dark:border-slate-700"
        >
          <Image
            src={man}
            alt="Rakib"
            layout="responsive"
            className="rounded-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
