import { FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="text-gray-300 py-16 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-400 font-mono mb-8">_skills</h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl text-orange-400 font-semibold mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 bg-gray-900/50 border border-gray-700 p-4 rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-gray-300 text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
