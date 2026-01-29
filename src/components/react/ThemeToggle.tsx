import { useState, useEffect } from "react";
import "./ThemeToggle.css";

/**
 * Theme Toggle Component
 * Interactive button to switch between light and dark themes
 * Persists preference to localStorage
 */

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <div className="icon-placeholder" />
      </button>
    );
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "dark" ? (
        // Night/Moon icon (shown in dark mode - click to go light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="theme-icon"
          viewBox="0 0 512 512"
        >
          <path
            d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18"
            stroke="currentColor"
            fill="none"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
            stroke="currentColor"
            fill="none"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // Sun/Light icon (shown in light mode - click to go dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="theme-icon"
          viewBox="0 0 512 512"
        >
          <path
            d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
            stroke="currentColor"
            fill="none"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63"
            stroke="currentColor"
            fill="none"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
