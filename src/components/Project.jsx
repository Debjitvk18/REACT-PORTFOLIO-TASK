import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-6">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 p-4 sm:p-8 bg-gray-50 rounded-md">
        {/* Card 1 */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Kissan Helper
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              ML and IoT-based system for crop selection, disease prediction,
              soil analysis, and smart irrigation. Integrated ML models with
              10+ sensor inputs to enhance yield and accuracy.
            </p>
          </div>
          <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md self-center">
            Live Link
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Crowdfunding DApp
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Blockchain-based crowdfunding system using Ethereum and Web3.js.
              Designed to ensure transparency and authenticity in donations.
            </p>
          </div>
          <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md self-center">
            Live Link
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-200 shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              SoilNutrient Using ML
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Analyzed 18 soil features to predict suitable crops and suggested
              top 5 alternatives using regression and classification models.
            </p>
          </div>
          <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md self-center">
            Live Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
