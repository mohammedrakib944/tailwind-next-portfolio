import React from "react";
import ProjectsItem from "./ProjectsItem";

import Instagram from "../assets/projects/instaLong.png";
import Ecommerce from "../assets/projects/ecommerce.png";
import Movie from "../assets/projects/movie.png";
import NFT from "../assets/projects/NFT.png";

const Projects = () => {
  return (
    <div id="projects" className="wrapper">
      <p className="text-xl font-semibold tracking-widest text-sky-600">
        Projects
      </p>
      <h2 className="py-4 text-slate-700 dark:text-slate-200 mb-4">
        What I&apos;ve Build 😌💪
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectsItem
          name="Instagram Dark Mood"
          tech="Next Js, Tailwind CSS"
          url="https://rakib-insta.netlify.app/"
          bg={Instagram}
        />
        <ProjectsItem
          name="Ecommerce"
          tech="React Js"
          url="https://rakib-e-commerce.netlify.app/"
          bg={Ecommerce}
        />
        <ProjectsItem
          name="Movie"
          tech="React Js"
          url="https://rakib-movie.netlify.app/"
          bg={Movie}
        />
        <ProjectsItem
          name="NFT"
          tech="React Js"
          url="https://rakib38-swap.netlify.app/"
          bg={NFT}
        />
      </div>
    </div>
  );
};

export default Projects;
