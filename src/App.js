import React, { useState } from "react";
import Navbar from "./Navbar.js";
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

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "light" : "dark",
      main: "#f8f8f8",
    },
    secondary: {
      main: "#f8f8f8",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
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
    </ThemeProvider>
  );
}

export default App;
