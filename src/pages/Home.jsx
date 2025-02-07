import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ProjectsSection from "../components/ProjectSection";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <ProjectsSection></ProjectsSection>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
