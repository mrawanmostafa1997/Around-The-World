import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../assets/icons";
const activeState = "flex items-center justify-center w-5 h-5 rounded-full ";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  const toggleTheme = (theme) => {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  return (
    <div className="flex h-8 w-14 items-center justify-around rounded-full bg-[#2e2f33]">
      <button
        onClick={() => toggleTheme("light")}
        className={`${activeState} ${theme === "light" ? "bg-gray-300" : ""}`}
      >
        <img
          className="fill-gray-800 dark:fill-gray-100"
          src={SunIcon}
          alt="Night Mode Icon"
        />
      </button>
      <button
        onClick={() => toggleTheme("dark")}
        className={`${activeState} ${theme === "dark" ? "bg-gray-300" : ""}`}
      >
        <img
          className="fill-white dark:fill-gray-900"
          src={MoonIcon}
          alt="Night Mode Icon"
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
