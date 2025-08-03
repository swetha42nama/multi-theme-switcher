
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSelector = () => {
  const { themeName, setThemeName } = useTheme();

  return (
    <select
      value={themeName}
      onChange={(e) => setThemeName(e.target.value)}
      className="p-2 rounded border"
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeSelector;