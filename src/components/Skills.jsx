import React from "react";

const Skills = () => {
  const skills = [
    "C/C++",
    "JavaScript",
    "HTML5",
    "React.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "SQL",
    "Firebase",
    "Machine Learning",
    "IoT",
    "Blockchain",
    "Git",
    "GitHub",
    "Debugging",
    "Problem Solving",
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-10">
        Skills
      </h2>

      {/* Skill boxes */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-100 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-sm 
                       hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer text-sm sm:text-base"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
