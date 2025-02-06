import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen">
      <Navbar></Navbar>

      <div className="flex-grow pt-20 pb-20 container mx-auto px-6">
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Education></Education>
        <ProjectsSection></ProjectsSection>
        <ContactInfo></ContactInfo>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
