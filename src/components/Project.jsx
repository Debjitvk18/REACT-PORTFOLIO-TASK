import React from "react";
import CardSection from "./CardSection";

const Projects = () => {
  const projectData = [
    {
      title: "Kissan Helper",
      description:
        "ML and IoT-based system for crop selection, disease prediction, soil analysis, and smart irrigation.",
      link: "https://github.com/dashboard",
      buttonText: "Live Link",
    },
    {
      title: "Crowdfunding DApp",
      description:
        "Blockchain-based crowdfunding system using Ethereum and Web3.js.",
      link: "https://github.com/dashboard",
      buttonText: "Live Link",
    },
    {
      title: "SoilNutrient Using ML",
      description:
        "Analyzed 18 soil features to predict suitable crops and suggested top 5 alternatives using ML models.",
      link: "https://github.com/dashboard",
      buttonText: "Live Link",
    },
  ];

  return <CardSection title="Projects" cards={projectData} />;
};

export default Projects;
