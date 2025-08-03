
import React, { createContext, useContext, useState, useEffect } from "react";

export const themes = {
  theme1: {
    name: "Theme 1",
    layout: "top",
    background: "#f9f9f9",
    text: "#111",
    fontFamily: " sans-serif",
    cardBackground: "#ffffff",
    accentColor: "#2563eb",
  },
  theme2: {
    name: "Theme 2",
    layout: "sidebar",
    background: "#1f2937",
    text: "#f1f1f1",
    fontFamily: "bold serif",
    cardBackground: "#374151",
    accentColor: "#10b981",
  },
  theme3: {
    name: "Theme 3",
    layout: "grid",
    background: "#fff8e1",
    text: "#4a148c",
    fontFamily: "'Pacifico', cursive",
    cardBackground: "#ffffff",
    accentColor: "#ff6f61",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const saved = localStorage.getItem("theme");
  const defaultTheme = themes[saved] ? saved : "theme1";
  const [themeName, setThemeName] = useState(defaultTheme);
  const theme = themes[themeName];

  useEffect(() => {
    localStorage.setItem("theme", themeName);
    document.body.style.background = theme.background;
    document.body.style.color = theme.text;
    document.body.style.fontFamily = theme.fontFamily;

    if (theme.fontFamily.includes("Pacifico")) {
      const link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, [themeName, theme.background, theme.text, theme.fontFamily]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);