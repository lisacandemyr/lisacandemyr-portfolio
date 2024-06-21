import React, { useState } from "react";
import Navbar from "./main/Navbar.js";
import HomePage from "./main/HomePage.js";
import ProjectPage from "./main/ProjectPage.js";
import GalleryPage from "./main/GalleryPage.js";
import AboutPage from "./main/AboutPage.js";
import ContactPage from "./main/ContactPage.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

function App() {
  // State to manage mode toggle
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // Function to toggle mode state
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // Colour theme based on mode state
  const theme = createTheme({
    palette: {
      mode: toggleDarkMode ? "light" : "dark",
      text: {
        primary: toggleDarkMode ? "#c94d3a" : "#ffcfd7",
      },
    },
  });
  
  // Settings for grain based on mode state
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty("--filter", toggleDarkMode ? "none" : "invert(100%)");
  rootStyles.setProperty("--opacity", toggleDarkMode ? "0.20" : "0.40");

  // Settings for scrollbar based on mode state
  const scrollbarTrackColor = toggleDarkMode ? "#a22544" : "#fcf8db";
  const scrollbarThumbColor = toggleDarkMode ? "#fcf8dbbf" : "#a22544bf";
  const scrollbarThumbColorHover = toggleDarkMode ? "#fcf8d9" : "#a22544";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="grain"></div>
        <div className={`gradients-container ${toggleDarkMode ? "light-background" : "dark-background"}`}>
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        </div>
        <Navbar toggleDarkMode={toggleDarkMode} toggleDarkTheme={toggleDarkTheme}/>
        <main>
          <HomePage toggleDarkMode={toggleDarkMode} />
          <ProjectPage toggleDarkMode={toggleDarkMode} />
          <GalleryPage toggleDarkMode={toggleDarkMode} />
          <AboutPage toggleDarkMode={toggleDarkMode} />
          <ContactPage toggleDarkMode={toggleDarkMode} />
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
            cursor: pointer;
          }
        `}
      </style>
    </ThemeProvider>
  );
}

export default App;
