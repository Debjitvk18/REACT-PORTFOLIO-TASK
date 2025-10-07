import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb-6">
        Contact
      </h2>

      {/* Card container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 p-4 sm:p-8 bg-gray-50 rounded-md w-full">
        {/* Contact Card */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl w-full sm:w-3/4 md:w-1/2 p-4 sm:p-6 flex flex-col justify-between transition-shadow duration-300">
          <p className="text-gray-600 text-center text-sm sm:text-base">
            If you'd like to get in touch, feel free to reach out via email:
          </p>
          <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md self-center">
            <a
              href="mailto:debjitvk18@gmail.com"
              className="  hover:bg-sky-600 text-white rounded-md self-center inline-block text-center"
            >
              Email Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
