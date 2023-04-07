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
          </div><div className="text-lg text-center md:text-left">
          ● It is a Replica of Chatgpt which internally calls openAI API to fetch the Output for the Prompt input.
          ● Developed using Vanilla JS and OpenAI API.Deployed on Versel.
          ● TECH USED: HTML CSS JavaScript Vanilla JS OpenAI API
          </div>
        </div>
  )
}
export default Project2;