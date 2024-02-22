import React, { useState } from "react";
import Navbar from "./main/Navbar.js";
import HomePage from "./main/HomePage.js";
import ProjectPage from "./main/ProjectPage.js";
import GalleryPage from "./main/GalleryPage.js";
import AboutPage from "./main/AboutPage.js";
import ContactPage from "./main/ContactPage.js";
import MenuPage from "./main/MenuPage.js";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const rootStyles = document.documentElement.style;
  rootStyles.setProperty("--filter", toggleDarkMode ? "none" : "invert(100%)");
  rootStyles.setProperty("--opacity", toggleDarkMode ? "0.2" : "0.5");

  const scrollbarTrackColor = toggleDarkMode ? "#c94d3a" : "#ffcfd7";
  const scrollbarThumbColor = toggleDarkMode ? "#ffcfd780" : "#c94d3a80";
  const scrollbarThumbColorHover = toggleDarkMode ? "#ffcfd7" : "#c94d3a";

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const lightBackground = "#ffcfd7";
  const lightText = "#c94d3a";
  const darkBackground = "#c94d3a";
  const darkText = "#ffcfd7";

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "light" : "dark",
      background: {
        default: toggleDarkMode ? lightBackground : darkBackground,
      },
      text: {
        primary: toggleDarkMode ? lightText : darkText,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div className="grain"></div>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          toggleDarkTheme={toggleDarkTheme}
        />
        <main>
          <HomePage toggleDarkMode={toggleDarkMode} />
          <ProjectPage toggleDarkMode={toggleDarkMode} />
          <GalleryPage toggleDarkMode={toggleDarkMode} />
          <AboutPage toggleDarkMode={toggleDarkMode} />
          <ContactPage toggleDarkMode={toggleDarkMode} />
          <MenuPage toggleDarkMode={toggleDarkMode} />
        </main>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            background-color: ${scrollbarTrackColor};
            width: 20px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${scrollbarThumbColor};
            border-radius: 20px;
            border: 6px solid transparent;
            background-clip: content-box;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: ${scrollbarThumbColorHover};
          }
        `}
      </style>
    </ThemeProvider>
  );
}

export default App;
