import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-6">
        Education
      </h2>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 p-4 sm:p-8 bg-gray-50 rounded-md w-full">
        {/* Card 1 */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
            University of Engineering and Management (UEM)
          </h3>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            B.Tech in Computer Science (2022 – 2026) GPA: 9.30 / 10 Jaipur, Rajasthan, India
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
            Rajagram S.B Raha Institution
          </h3>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Higher Secondary (2019 – 2021) Grade: 93% Bankura, West Bengal, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
