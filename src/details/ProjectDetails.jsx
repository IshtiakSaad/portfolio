import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("../../public/projects.json") // Adjust path if needed
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === projectId);
        setProject(foundProject);
      })
      .catch((err) => console.error("Error fetching project data:", err));
  }, [projectId]);

  if (!project) {
    return (
      <div className="text-center text-red-500 font-mono mt-10">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-300">
      <h1 className="text-3xl font-bold text-green-400 font-mono">{project.name}</h1>

      <img src={project.image} alt={project.name} className="w-full mt-6 rounded-lg shadow-lg border border-gray-700" />

      <p className="mt-6 text-lg text-gray-400">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-orange-400">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.mainTechStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-sm font-mono rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-orange-400">Features:</h2>
        <ul className="list-disc ml-6 text-gray-400">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Live Demo */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-orange-400">Live Demo:</h2>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
          {project.liveLink}
        </a>
      </div>

      {/* GitHub Repo */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-orange-400">GitHub Repo:</h2>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
          {project.github}
        </a>
      </div>

      {/* Challenges Faced */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-orange-400">Challenges Faced:</h2>
        <ul className="list-disc ml-6 text-gray-400">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Potential Improvements */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-orange-400">Potential Improvements:</h2>
        <ul className="list-disc ml-6 text-gray-400">
          {project.potentialImprovements.map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
