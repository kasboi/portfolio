import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/styles/Theme.js";
import { propContext } from "./contexts/PropContext.js";
import GlobalStyle from "./components/styles/Global.js";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Home from "./Home.jsx";
import Background from "./Background.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const { theme, invertTheme } = Theme;

// Custom hook for theme persistence (moved inline to avoid hook issues)
const useTheme = () => {
  const key = "userTheme";

  const getUserTheme = () => {
    if (typeof window === "undefined") return theme;
    try {
      const storedTheme = localStorage.getItem(key);
      if (storedTheme) {
        return JSON.parse(storedTheme);
      }
    } catch (error) {
      console.error("Error reading theme from localStorage:", error);
    }
    return theme;
  };

  const [currentTheme, setCurrentTheme] = useState(getUserTheme);

  const saveUserTheme = (userToken) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(userToken));
      setCurrentTheme(userToken);
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  };

  return {
    currentTheme,
    setCurrentTheme: saveUserTheme,
  };
};

function PortfolioApp() {
  const { currentTheme, setCurrentTheme } = useTheme();
  const [switched, setSwitched] = useState(
    currentTheme ? (currentTheme.name === "light" ? "" : "switched") : "",
  );
  const [open, setOpen] = useState("");
  const [modal, setModal] = useState("");

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <propContext.Provider
        value={{ open, setOpen, modal, setModal, switched, setSwitched }}
      >
        <Navbar
          here={currentTheme}
          setHere={setCurrentTheme}
          theme={theme}
          invertTheme={invertTheme}
        />
        <Sidebar />
        <Home />
        <Background />
        <Projects />
        <Contact />
      </propContext.Provider>
    </ThemeProvider>
  );
}

export default PortfolioApp;
