import Image from "next/image";
import React from "react";

import man from "../assets/man.jpg";

const About = () => {
  return (
    <div className="container mx-auto md:h-screen lg:w-[70%] px-4 flex items-center py-4">
      <div className="md:grid grid-cols-7 gap-10">
        <div className="col-span-4 flex flex-col justify-center ">
          <p className="uppercase text-xl tracking-widest text-indigo-600 ">
            About
          </p>
          <h2 className="py-4 dark:text-slate-200">Who I Am</h2>
          <p className="py-2 text-slate-500">
            // I am not your normal Developer.
          </p>
          <p className="py-2 text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tenetur vel reiciendis quam perferendis laborum iure quae nesciunt,
            dignissimos officia.
          </p>
          <p className="py-2 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            animi, rem voluptas ullam, iste a voluptatum molestias cumque
            corporis ipsa officiis, veniam fuga quidem aliquam necessitatibus!
            Omnis deserunt a natus?
          </p>
          <p className="py-2 text-indigo-500 underline cursor-pointer">
            Check out my latest Projects
          </p>
        </div>
        <div className="col-span-3 w-full md:w-[280px] lg:w-[380px] h-auto m-auto shadow-xl border-2 rounded-xl justify-center items-center p-2 overflow-hidden dark:border-slate-700">
          <Image src={man} alt="man" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
