import React, { useState } from "react";
import profileImg from "../assets/profile.jpg";
import BlurText from "../design/BlutText";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Awards", href: "#awards" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full bg-zinc-600 shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
        {/* Profile Image + Name */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-14 w-14 sm:h-20 sm:w-20 bg-zinc-900 flex items-center justify-center rounded-full overflow-hidden p-1">
            <img
              src={profileImg}
              alt="profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <BlurText
            text="Debjit Ghosh"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg sm:text-xl md:text-2xl text-white"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-center gap-6 text-white font-medium text-sm sm:text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-amber-300 transition duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-300 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-700 w-full flex flex-col items-center py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg hover:text-amber-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
