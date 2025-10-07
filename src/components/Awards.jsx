import React from "react";
import CardSection from "./CardSection";

const Awards = () => {
  const awardsData = [
    { description: "3rd Place – HackUEM 2.0 (2024)" },
    { description: "15th Place – Ace Hack 4.0 (2025)" },
    { description: "NMMS Scholarship – MHRD, Govt. of India" },
  ];

  return <CardSection title="Awards" cards={awardsData} />;
};

export default Awards;
