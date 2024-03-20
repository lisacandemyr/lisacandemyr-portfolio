import React, { useState } from "react";
import Navbar from "./main/Navbar.js";
import HomePage from "./main/HomePage.js";
import ProjectPage from "./main/ProjectPage.js";
import GalleryPage from "./main/GalleryPage.js";
import AboutPage from "./main/AboutPage.js";
import ContactPage from "./main/ContactPage.js";
import MenuPage from "./main/MenuPage.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

function App() {
  // State to manage dark mode toggle
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // Function to toggle dark mode
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // Theme creation based on dark mode state
  const theme = createTheme({
    palette: {
      mode: toggleDarkMode ? "light" : "dark",
      background: {
        default: toggleDarkMode ? "#ffcfd7" : "#c94d3a",
      },
      text: {
        primary: toggleDarkMode ? "#c94d3a" : "#ffcfd7",
      },
    },
  });

  // Set intensity of grain filter based on dark mode state
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty("--filter", toggleDarkMode ? "none" : "invert(100%)");
  rootStyles.setProperty("--opacity", toggleDarkMode ? "0.2" : "0.5");

  // Define scrollbar colors based on dark mode state
  const scrollbarTrackColor = toggleDarkMode ? "#c94d3a" : "#ffcfd7";
  const scrollbarThumbColor = toggleDarkMode ? "#ffcfd780" : "#c94d3a80";
  const scrollbarThumbColorHover = toggleDarkMode ? "#ffcfd7" : "#c94d3a";

  return (
    <ThemeProvider theme={theme}>
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
