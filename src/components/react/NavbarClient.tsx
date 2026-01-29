import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ThemeToggle.css";
import "./Logo.css";

/**
 * Theme Toggle Component with Animated Logo
 * Interactive button to switch between light and dark themes
 * Persists preference to localStorage
 * Also renders the animated logo that responds to theme changes
 */

type Theme = "light" | "dark";

// Logo Variants
const gVariantLight = {
  hidden: { fill: "rgba(255, 255, 255, 0)" },
  visible: {
    fill: "rgba(0, 0, 0, 0.8)",
    transition: {
      duration: 0.75,
      ease: "easeIn",
      when: "afterChildren",
      staggerChildren: 1.2,
    },
  },
};

const gVariantDark = {
  hidden: { fill: "rgba(255, 255, 255, 0)" },
  visible: {
    fill: "rgba(255, 255, 255, 0.9)",
    transition: {
      duration: 1,
      ease: "easeIn",
      when: "afterChildren",
      staggerChildren: 1.2,
    },
  },
};

const pathVariant = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

// Theme icon path animation variant
const iconPathVariant = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    fill: "none",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

interface NavbarClientProps {
  resumeLink: string;
}

const NavbarClient = ({ resumeLink }: NavbarClientProps) => {
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

  const gVariant = theme === "dark" ? gVariantDark : gVariantLight;

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="navbar-client">
        <a href="/" className="logo-link" aria-label="Home">
          <div style={{ width: 75, height: 49 }} />
        </a>
        <motion.a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          whileTap={{ scale: 0.9, transition: { ease: "easeInOut" } }}
        >
          RESUME
        </motion.a>
        <button className="theme-toggle" aria-label="Toggle theme">
          <div className="icon-placeholder" />
        </button>
      </nav>
    );
  }

  return (
    <nav className="navbar-client">
      {/* Animated Logo */}
      <a href="/" className="logo-link" aria-label="Home">
        <motion.svg
          key={theme} // Force re-render on theme change for animation
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="280.000000pt"
          height="182.000000pt"
          viewBox="0 0 280.000000 182.000000"
          preserveAspectRatio="xMidYMid meet"
          className={`logo-svg ${theme === "dark" ? "logo-svg--dark" : "logo-svg--light"}`}
          initial="hidden"
          animate="visible"
          aria-label="KAS Logo"
        >
          <motion.g
            transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)"
            variants={gVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M1033 1367 c-33 -19 -401 -484 -408 -518 -15 -66 5 -90 173 -207 296
            -206 289 -202 335 -202 23 1 52 6 63 13 20 11 88 91 190 223 43 56 273 343
            333 416 l38 47 50 -23 c140 -65 177 -245 75 -358 -42 -47 -101 -77 -150 -78
            -82 0 -142 -54 -142 -127 0 -38 5 -50 35 -80 l35 -35 83 4 c49 3 104 14 137
            27 118 45 240 176 277 299 24 77 23 209 -1 285 -42 128 -156 249 -283 297 -79
            30 -194 38 -228 16 -14 -9 -134 -153 -266 -319 -133 -166 -248 -309 -255 -316
            -12 -13 -27 -6 -109 50 -52 35 -93 69 -90 76 2 6 55 76 118 155 180 226 184
            234 152 302 -27 57 -107 84 -162 53z"
              variants={pathVariant}
              initial={theme === "dark" ? { rotate: 180 } : { rotate: 0 }}
              animate={{ rotate: 0, transition: { duration: 0.75, ease: "easeOut" } }}
            />
            <motion.path
              d="M758 1810 c-117 -20 -262 -78 -355 -141 -69 -47 -188 -164 -239 -236
            -55 -75 -115 -205 -140 -298 -29 -108 -27 -362 4 -470 71 -245 250 -461 478
            -574 45 -22 117 -51 160 -63 79 -23 82 -23 734 -23 652 0 655 0 734 23 304 88
            550 334 638 637 20 69 23 103 23 240 0 182 -12 246 -75 382 -49 105 -88 161
            -174 252 -120 124 -245 200 -417 253 -73 22 -81 22 -699 24 -344 1 -646 -2
            -672 -6z m1266 -174 c154 -30 273 -94 392 -212 70 -69 89 -95 132 -185 59
            -122 82 -216 82 -331 0 -117 -22 -208 -79 -324 -99 -206 -287 -352 -512 -399
            -103 -22 -1175 -22 -1278 0 -267 56 -484 258 -566 525 -9 30 -19 103 -22 161
            -5 86 -2 117 17 190 44 167 132 302 265 406 134 106 248 150 424 165 53 5 305
            7 560 6 411 -2 473 -4 585 -22z"
              variants={pathVariant}
            />
          </motion.g>
        </motion.svg>
      </a>

      {/* Resume Button */}
      <motion.a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        whileTap={{ scale: 0.9, transition: { ease: "easeInOut" } }}
      >
        RESUME
      </motion.a>

      {/* Animated Theme Toggle */}
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        whileTap={{ scale: 0.9, originX: 0, originY: 0 }}
      >
        {theme === "dark" ? (
          // Night/Moon icon (shown in dark mode - click to go light)
          <motion.svg
            key="night-icon"
            xmlns="http://www.w3.org/2000/svg"
            className="theme-icon ionicon"
            viewBox="0 0 512 512"
          >
            <motion.path
              d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18"
              stroke="#fff"
              fill="none"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconPathVariant}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
              stroke="#fff"
              fill="none"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconPathVariant}
              initial="initial"
              animate="animate"
            />
          </motion.svg>
        ) : (
          // Sun/Light icon (shown in light mode - click to go dark)
          <motion.svg
            key="light-icon"
            xmlns="http://www.w3.org/2000/svg"
            className="theme-icon ionicon"
            viewBox="0 0 512 512"
          >
            <motion.path
              d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
              stroke="#000"
              fill="none"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconPathVariant}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63"
              stroke="#000"
              fill="none"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconPathVariant}
              initial="initial"
              animate="animate"
            />
          </motion.svg>
        )}
      </motion.button>
    </nav>
  );
};

export default NavbarClient;
