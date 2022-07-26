import React from "react";
import ProjectsItem from "./ProjectsItem";

import Instagram from "../assets/projects/instaLong.png";
import Ecommerce from "../assets/projects/ecommerce.png";
import Movie from "../assets/projects/movie.png";
import NFT from "../assets/projects/NFT.png";

import { motion, variants } from "framer-motion";
import { Iam, emoji, popUp } from "../public/animate";

const Projects = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
      id="projects"
      className="wrapper"
    >
      <p className="text-xl font-semibold tracking-widest text-sky-600">
        Projects
      </p>
      <motion.h2
        variants={Iam}
        className="py-4 text-slate-700 dark:text-slate-200 mb-4"
      >
        What I&apos;ve Build{" "}
        <motion.div className="inline-block" variants={emoji}>
          😌💪
        </motion.div>
      </motion.h2>
      <div
        className="grid md:grid-cols-3 gap-8"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div variants={popUp}>
          <ProjectsItem
            name="Instagram Dark Mood"
            tech="Next Js, Tailwind CSS"
            url="https://rakib-insta.netlify.app/"
            bg={Instagram}
          />
        </motion.div>
        <motion.div variants={popUp}>
          <ProjectsItem
            name="Ecommerce"
            tech="React Js"
            url="https://rakib-e-commerce.netlify.app/"
            bg={Ecommerce}
          />
        </motion.div>
        <motion.div variants={popUp}>
          <ProjectsItem
            name="Movie"
            tech="API integration, React Js"
            url="https://rakib-movie.netlify.app/"
            bg={Movie}
          />
        </motion.div>
        <motion.div variants={popUp}>
          <ProjectsItem
            name="NFT"
            tech="React Js"
            url="https://rakib38-swap.netlify.app/"
            bg={NFT}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
