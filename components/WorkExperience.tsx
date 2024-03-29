import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl"
      >
        Experience
      </motion.div>

      <div className="flex w-full space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard example={""} />
        <ExperienceCard example={""} />
      </div>
    </div>
  );
};

export default WorkExperience;
