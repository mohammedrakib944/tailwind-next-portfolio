import React from "react";
import ProjectsItem from "./ProjectsItem";

import Dorac from "../assets/projects/dorac.png";
import Ecommerce from "../assets/projects/ecommerce.png";
import Movie from "../assets/projects/movie.png";
import NFT from "../assets/projects/NFT.png";

const Projects = () => {
  return (
    <div className="wrapper">
      <p className="text-xl tracking-widest text-indigo-600">Projects</p>
      <h2 className="py-4 text-slate-700 dark:text-slate-200 mb-4">
        What I've Build
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectsItem
          name="Dorac APP"
          tech="React Js"
          url="https://rakib-nft-2.netlify.app/"
          bg={Dorac}
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
