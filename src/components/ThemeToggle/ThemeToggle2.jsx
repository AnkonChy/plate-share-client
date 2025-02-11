import React, { useState } from "react";

const ThemeToggle2 = () => {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <input
      type="checkbox"
      className="toggle theme-controller hidden md:block"
      onChange={handleThemeChange}
      checked={theme === "dark"}
    />
  );
};

export default ThemeToggle2;
