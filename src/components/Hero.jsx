import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="py-10 md:py-24 flex flex-col lg:flex-row items-center justify-evenly px-6 gap-6">
        <div className="w-[280px] md:w-[360px] border-2 border-green-400 shadow-lg shadow-green-500/20">
          <img
            src="https://avatars.githubusercontent.com/u/40642231?v=4"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left text-white font-mono">
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">Ishtiak Saad</h1>
          <h2 className="md:text-2xl text-blue-400 mt-1">
            &gt; MERN Stack developer
          </h2>

          <div className="mt-6 text-sm lg:text-base">
            <p className="text-gray-400">// my number</p>
            <p className="text-green-400">
              const <span className="text-yellow-300">phoneNum</span> ={" "}
              <span className="text-white">018 7696 1930</span>;
            </p>

            <p className="text-gray-400 mt-3">// my e-mail</p>
            <p className="text-green-400">
              const <span className="text-yellow-300">email</span> = "
              <span className="text-red-400">ishtiak.m.saad@gmail.com</span>";
            </p>

            <p className="text-gray-400 mt-3">// GitHub</p>
            <p className="text-green-400">
              const <span className="text-yellow-300">githubLink</span> = "
              <a
                href="https://github.com/IshtiakSaad"
                className="text-blue-400 hover:underline"
              >
                https://github.com/IshtiakSaad
              </a>
              ";
            </p>

            <p className="text-gray-400 mt-3">// LinkedIn</p>
            <p className="text-green-400">
              const <span className="text-yellow-300">linkedinPage</span> = "
              <a
                href="https://www.linkedin.com/in/davide-simone-a2823619a/"
                className="text-blue-400 hover:underline"
              >
                https://www.linkedin.com/in/ishtiaksaad/
              </a>
              ";
            </p>

            <p className="text-green-400 pt-8 text-center">
              <a
                href="#" // Replace with actual resume URL when ready
                download
                className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-mono text-sm"
              >
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Branding */}
        <div className="font-mono text-sm">
          <span className="text-green-400">&lt;/&gt;</span>
          <span className="text-gray-300"> ishtiak-saad</span>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-orange-400 transition duration-300 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-orange-400 transition duration-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-orange-400 transition duration-300 text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-orange-400 transition duration-300 text-xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
