import React from "react";
import { motion } from "framer-motion";
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import Skill3 from "./Skill3";
import Skill4 from "./Skill4";
import Skill5 from "./Skill5";
import Skill6 from "./Skill6";
import Skill7 from "./Skill7";
import Skill8 from "./Skill8";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="tracking-[20px] text-gray-500 text-2xl absolute top-24 uppercase"
      >
        Skills
      </motion.div>
      <div className="text-sm absolute top-36 uppercase text-gray-500 tracking-[3px]">
        Hover over a skill for currenct profiency
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />    
      </div>
    </div>
  );
};

export default Skills;
