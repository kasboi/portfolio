import React from "react";
import Navbar from "./Navbar.jsx";
import Background from "./Background.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global.js";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Theme } from "./components/styles/Theme.js";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import useFetch from "./hooks/useFetch.js";
import { propContext } from "./contexts/PropContext.js";

const { theme, invertTheme } = Theme;

function App() {
  const { here, setHere } = useFetch(); //Setting the theme mode
  const [switched, setSwitched] = useState(
    here ? (here.name === "light" ? "" : "switched") : "",
  );
  const [open, setOpen] = useState(""); //toggle hamburger
  const [modal, setModal] = useState(""); // toggle modal

  // Fallback to default theme if here is undefined
  const currentTheme = here || theme;

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <propContext.Provider
          value={{ open, setOpen, modal, setModal, switched, setSwitched }}
        >
          <Router
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Navbar
              here={here}
              setHere={setHere}
              theme={theme}
              invertTheme={invertTheme}
            />
            <Sidebar />
            <Home />
            <Background />
            <Projects />
            <Contact />
          </Router>
        </propContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
