import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-lg border-t-[1px] border-b-[1px] border-zinc-500 z-50 backdrop-blur-lg">
      <div className="px-4 flex items-center justify-between ">
        {/* Name on the far left */}
        <div className="flex items-center">
          <div className="text-green-400 font-mono text-lg font-bold md:pl-12 md:pr-16 py-2 border-zinc-500 md:border-r-[1px]">
            <span className="text-green-400">&lt;/&gt; </span>
            <a href="/">ishtiak-saad</a>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:space-x-6 font-mono text-sm text-gray-400">
          <a href="#_about-me" className="hover:text-orange-400 transition duration-300">
            _about-me
          </a>
          <a href="#_projects" className="hover:text-orange-400 transition duration-300">
            _projects
          </a>
          <a href="#_education" className="hover:text-orange-400 transition duration-300">
            _education
          </a>
        </div>

        {/* Contact button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-green-500 font-bold hover:text-orange-400 font-mono md:pl-16 md:pr-12 py-3 md:border-l-[1px] border-zinc-500 transition duration-300"
          >
            _contact-me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-orange-400 transition duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col bg-gray-900 text-white font-mono text-center transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-screen py-4" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <a href="#_about-me" className="py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>
          _about-me
        </a>
        <a href="#_projects" className="py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>
          _projects
        </a>
        <a href="#_education" className="py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>
          _education
        </a>
        <a href="#contact" className="py-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>
          _contact-me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
