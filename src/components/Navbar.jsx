const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-lg border-t-[1px] border-b-[1px] border-zinc-500 z-50 backdrop-blur-lg">
        <div className="px-4 flex items-center justify-between">
          {/* Name on the far left */}
          <div className="flex">
            <div className="text-green-400 font-mono text-lg font-bold md:pl-12 md:pr-16 py-2 border-zinc-500 md:border-r-[1px]">
              <span className="text-green-400">&lt;/&gt; </span>
              ishtiak-saad
            </div>
  
            {/* Links in the center */}
            <div className="hidden md:grid md:grid-cols-3 font-mono text-sm text-gray-400">
              <a
                href="#_about-me"
                className="hover:text-orange-400 text-center py-3 transition duration-300 relative"
              >
                _about-me
              </a>
              <a
                href="#_projects"
                className="hover:text-orange-400 text-center md:border-r-[1px] md:border-l-[1px] border-zinc-500 py-3 transition duration-300 relative"
              >
                _projects
              </a>
              <a
                href="#_education"
                className="hover:text-orange-400 text-center py-3 px-4 border-r-[1px] border-zinc-500 transition duration-300 relative"
              >
                _education
              </a>
            </div>
          </div>
  
          {/* Contact button on the far right */}
          <div>
            <a
              href="#contact"
              className="text-green-400 hover:text-orange-400 font-mono md:pl-16 md:pr-12 py-3 md:border-l-[1px] border-zinc-500 transition duration-300"
            >
              _contact-me
            </a>
          </div>
        </div>
      </nav>
);
  };
  
  export default Navbar;
  