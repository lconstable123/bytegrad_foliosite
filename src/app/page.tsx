import About from "../../components/about";
import Contact from "../../components/contact";
import Experience from "../../components/experience";
import Header from "../../components/header";
import Intro from "../../components/intro";
import Projects from "../../components/projects";
import SectionDivider from "../../components/section-divider";
import Skills from "../../components/skills";

export default function Home() {
  return (
    <main className=" text-gray-950 flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
