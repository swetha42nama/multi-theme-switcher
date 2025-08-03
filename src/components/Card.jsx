


import React from "react";
import { useTheme } from "../context/ThemeContext";

const Card = ({ title, description }) => {
  const { theme } = useTheme();

  return (
    <div
      className="p-4 rounded-lg shadow-md transition"
      style={{
        background: theme.cardBackground,
        border: `2px solid ${theme.accentColor}`,
        color: theme.text,
        fontFamily: theme.fontFamily,
      }}
    >
      <h3 className="text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;