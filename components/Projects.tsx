import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
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
          {projects.map((project, i) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Image src="/favicon1.ico" alt="" width="200" height="200" />
              </motion.div>
              <div className="text-4xl font-sans font-semibold">
                <div>Case Study {i + 1} of 0: UPS Clone </div>
              </div>
              <div className="text-lg text-center md:text-left">
                Created aRealestatewebsite using react for my fathers bussiness.which is resposive and a frontend application.
                Ill further add the backend to the code which helps in retriving the properties from the backend.
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[500px] -skew-y-12 opacity-10"></div>
      </motion.div>
    </>
  );
};

export default Projects;
