import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      <div className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-6">
        Awards
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 p-4 sm:p-8 bg-gray-50 rounded-md">
        {/* Card 1 */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <p className="text-gray-600 text-center text-sm sm:text-base">
            3rd Place – HackUEM 2.0 (2024)
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <p className="text-gray-600 text-center text-sm sm:text-base">
            15th Place – Ace Hack 4.0 (2025)
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <p className="text-gray-600 text-center text-sm sm:text-base">
            NMMS Scholarship – MHRD, Govt. of India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
