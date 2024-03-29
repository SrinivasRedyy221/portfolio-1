import { NextPage} from 'next'
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Image from "next/image";
import Link from "next/link";


const Home:NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Srinivas Portfolio</title>
      </Head>
      <Header />
      <div id="hero" className="snap-start">
        <Hero />
      </div>
      <div id="about" className="snap-center">
        <About />
      </div>
      {/* <div id="experience" className="snap-center">
        <WorkExperience />
      </div> */}
      <div id="skills" className="snap-start">
        <Skills />
      </div>
      <div id="projects" className="snap-start">
        <Projects />
      </div>
      <div id="contact" className="snap-start">
        <ContactMe />
      </div>

      <Link href="#hero">
        <div className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/srinivasport.jpg"
              alt=""
              width="100"
              height="100"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;

/*export const getStaticProps: GetStaticProps<Props> = async () => {
  /*const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Socials[] = await fetchSocials();

  return {
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  }
};*/
