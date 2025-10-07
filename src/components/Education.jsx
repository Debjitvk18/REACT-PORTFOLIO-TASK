import React from "react";
import CardSection from "./CardSection";

const Education = () => {
  const educationData = [
    {
      title: "University of Engineering and Management (UEM)",
      description:
        "B.Tech in Computer Science (2022 – 2026) GPA: 9.30 / 10 Jaipur, Rajasthan, India",
    },
    {
      title: "Rajagram S.B Raha Institution",
      description:
        "Higher Secondary (2019 – 2021) Grade: 93% Bankura, West Bengal, India",
    },
  ];

  return <CardSection title="Education" cards={educationData} />;
};

export default Education;
