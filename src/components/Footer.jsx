import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gray-400 border-t-[1px] border-gray-600 py-6">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Branding */}
        <div className="font-mono text-sm">
          <span className="text-green-400">&lt;/&gt;</span>  
          <span className="text-gray-300"> ishtiak-saad</span>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-orange-400 transition duration-300 text-xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-orange-400 transition duration-300 text-xl">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-orange-400 transition duration-300 text-xl">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-orange-400 transition duration-300 text-xl">
            <FaFacebook />
          </a>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-xs font-mono mt-4 md:mt-0">
          © {new Date().getFullYear()} <span className="text-green-400">ishtiak-saad</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
