import React from "react";
import Project from "./project";
import { motion } from "framer-motion";


type Props = {};

const Projects = (props : Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
      >
        <div className="absolute tracking-[20px] uppercase top-24 text-gray-500 text-2xl">
          Projects
        </div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Project />
            <Project />
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[500px] -skew-y-12 opacity-10"></div>
      </motion.div>
    </>
  );
}

export default Projects;
