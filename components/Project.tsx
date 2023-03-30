import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Project = (props : Props) => {
  return (
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
                <div>Case Study of 1 </div>
            </div>
            <div className="text-lg text-center md:text-left">
                Created a Realestate website using react for my fathers bussiness.which is resposive and a frontend application.
                Ill further add the backend to the code which helps in retriving the properties from the backend.
            </div>
        </div>
  )
}
export default Project;