import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Project1 = (props : Props) => {
  return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
          >
              <Image src="/favicon1.ico" alt="" width="200" height="200" />

      </motion.div><div className="text-4xl font-sans font-semibold">
              <div><a href="https://pjrrealestate.netlify.app/">PJR real estate website</a></div>
          </div><div className="text-lg text-center md:text-left">
              ● Developed a Single page Website for my Fathers Business using Reactjs.
              ● Which brought up the sales by 30% providing reliability on the business.
              ● Its a Frontend web application deployed on Netlify.
              ● TECH USED: HTML CSS ReactJS
          </div>
        </div>
  )
}
export default Project1;