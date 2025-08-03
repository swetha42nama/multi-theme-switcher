import React from "react";
import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";

const Home = () => {
  const { theme } = useTheme();

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="py-6" style={{ fontFamily: theme.fontFamily }}>
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to the Themed App</h1>
        <p className="text-base md:text-lg mb-4">
          Experience different layouts, fonts, and colors just by switching the theme!
        </p>
        <button
          onClick={handleClick}
          className="px-6 py-2 rounded shadow"
          style={{
            background: theme.accentColor,
            color: "#fff",
            fontFamily: theme.fontFamily,
          }}
        >
          Click Me
        </button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Minimal Interface" description="Clean, modern design perfect for focus." />
        <Card title="Sidebar Layout" description="Navigate easily in dark mode layout." />
        <Card title="Colorful Cards" description="Bright and playful card-based structure." />
      </section>
    </main>
  );
};

export default Home;