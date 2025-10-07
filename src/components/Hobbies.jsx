import React from "react";

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-6">
        Hobbies and Interest
      </h2>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 p-4 sm:p-8 bg-gray-50 rounded-md w-full">
        {/* Card */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl w-full sm:w-3/4 md:w-1/2 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Outside of engineering, I enjoy exploring AI tools, competitive
            coding, and contributing to open-source projects. I also like
            reading about emerging technologies, playing chess, and watching
            tech documentaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
