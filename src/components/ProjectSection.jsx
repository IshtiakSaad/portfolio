import React from "react";
import project1 from "../assets/project-1.png";
import projectN from "../assets/project-n.png";
import projectM from "../assets/project-m.png";

const projects = [
  {
    name: "RUET Cafeteria Management System",
    image: project1,
    detailsLink: "/projects/ruet-cafeteria",
    stack: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    liveLink: "#",
    github: "https://github.com/IshtiakSaad/RUET-Cafeteria-Client-Side",
  },
  {
    name: "Nazirabazar Online Marketplace",
    image: projectN,
    detailsLink: "/projects/nazirabazar",
    stack: ["React", "Redux", "MongoDB", "Express.js"],
    liveLink: "#",
    github: "https://github.com/IshtiakSaad/nazirabazar-client-side",
  },
  {
    name: "Movie Portal",
    image: projectM,
    detailsLink: "/projects/movie-portal",
    stack: ["React", "TMDB API", "Tailwind CSS"],
    liveLink: "#",
    github: "https://github.com/IshtiakSaad/Movie-Portal-Client",
  },
];

const ProjectsSection = () => {
  return (
    <section className="text-gray-300 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-400 font-mono mb-8">
          _my-projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[radial-gradient(#1a1a1a,#000)] bg-opacity-80 border border-gray-600 p-6 rounded-2xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-green-500/20"
            >
              <figure className="rounded-lg overflow-hidden border border-gray-600">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-75"
                />
              </figure>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold text-gray-300 font-mono">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-sm font-mono rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-between">
                  <a
                    href={project.detailsLink}
                    className="px-4 py-2 font-mono text-sm border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-all duration-500 ease-in-out"
                  >
                    View More
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 font-mono text-sm border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-500 ease-in-out"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
