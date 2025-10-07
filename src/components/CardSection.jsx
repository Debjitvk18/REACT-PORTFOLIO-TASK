// components/CardSection.jsx
import React from "react";

const CardSection = ({ title, cards }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-6">
        {title}
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 p-4 sm:p-8 bg-gray-50 rounded-md w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`shadow-md hover:shadow-lg rounded-xl w-full sm:w-80 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            {/* Card Content */}
            {card.title && (
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {card.title}
              </h3>
            )}
            <p className="text-gray-600 text-center text-sm sm:text-base">
              {card.description}
            </p>

            {/* Optional Button */}
            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md self-center"
              >
                {card.buttonText || "Visit"}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
