import React from "react";
import Typewriter from "typewriter-effect";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from 'next/link'

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-8 text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full mx-auto object-cover h-32 w-32"
        src="/srinivasport.jpg"
        height="500"
        width="500"
        alt=""
      />

      <div className="z-20">
        <div className="text-sm uppercase tracking-[15px] text-gray-500 pb-2">
          Programmer and a Devloper
        </div>
        <div className="text-4xl lg:text-6xl font-semibold tracking-wide">
          <Typewriter
            options={{
              strings: [
                "Hi! Im Srinivas",
                "Enthusiastic",
                "Also Loves To explore more",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </div>
        <div className="pt-5">
          <Link href='#about'><button className="herobutton">About</button></Link>
          <Link href='#experience'><button className="herobutton">Experience</button></Link>
          <Link href='#skills'><button className="herobutton">Skills</button></Link>
          <Link href='#projecs'><button className="herobutton">Projects</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
