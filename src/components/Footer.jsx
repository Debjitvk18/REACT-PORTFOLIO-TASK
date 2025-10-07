// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resumePdf from "../assets/Debjit_Ghosh_Resume.pdf"; // Add your resume PDF in assets

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">
        {/* Logo / Name */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Debjit Ghosh
          </h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Fullstack Developer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-0">
          <a
            href="#about"
            className="hover:text-white transition-colors text-sm sm:text-base"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors text-sm sm:text-base"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors text-sm sm:text-base"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors text-sm sm:text-base"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="https://github.com/Debjitvk18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/debjit-ghosh-61b110249"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Download Resume */}
        <a
          href={resumePdf}
          download
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
        >
          Download Resume
        </a>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Debjit Ghosh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
