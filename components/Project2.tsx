import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Project2 = (props : Props) => {
  return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
          >
              <Image src="/favicon2.ico" alt="" width="200" height="200" />

      </motion.div><div className="text-4xl font-sans font-semibold">
              <div><a href="https://codes-xi.vercel.app/">CodeS -Your coding AI</a></div>
              <div className="flex pt-2">
        <button className="flex flex-row bg-gray-800 hover:bg-gray-500 text-white py-1 px-1 ml-6 rounded-full">
            <a href="https://pjrrealestate.netlify.app/">Visit</a>
        </button>
        <button className="flex flex-row bg-gray-800 hover:bg-gray-500 text-white py-1 px-1 ml-2 rounded-full">
            <a href="https://github.com/SrinivasRedyy221/portfolio-1">Github</a>
        </button>
        </div>
          </div>
          <div className="text-lg text-center md:text-left">
          ● It is a Replica of Chatgpt which internally calls openAI API to fetch the Output for the Prompt input.
          ● Developed using Vanilla JS and OpenAI API.Deployed on Versel.
          ● TECH USED: HTML CSS JavaScript Vanilla JS OpenAI API
          </div>
        </div>
  )
}
export default Project2;