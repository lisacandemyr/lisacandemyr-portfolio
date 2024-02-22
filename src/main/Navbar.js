import React, { useState } from "react";
import MenuPage from "./MenuPage";
import "./Navbar.css";

function Navbar({ toggleDarkMode, toggleDarkTheme }) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = (pageId) => {
    const pages = [
      "home-page",
      "project-page",
      "gallery-page",
      "about-page",
      "contact-page",
    ];

    pages.forEach((id) => {
      const page = document.getElementById(id);
      if (id === pageId) {
        setTimeout(() => {
          page.classList.remove("hidden");
        }, 500);
      } else {
        page.classList.add("fade-out");
        setTimeout(() => {
          page.classList.add("hidden");
          page.classList.remove("fade-out");
          setMenuVisible(true);
        }, 500);
      }
    });
  };

  const closeMenu = () => {
    const menu = document.getElementById("menu-page");

    menu.classList.add("fade-out");
    setTimeout(() => {
      menu.classList.add("hidden");
      menu.classList.remove("fade-out");
      setMenuVisible(false);
    }, 500);
  };

  const goToHomepage = () => {
    setMenuVisible(false);

    const home = document.getElementById("home-page");
    const pagesToHide = [
      "project-page",
      "gallery-page",
      "about-page",
      "contact-page",
      "menu-page",
      "gallery-1",
      "gallery-2",
      "gallery-3",
      "gallery-4",
    ];

    pagesToHide.forEach((page) => {
      const element = document.getElementById(page);

      if (element) {
        element.classList.add("fade-out");
        setTimeout(() => {
          element.classList.add("hidden");
          element.classList.remove("fade-out");
        }, 500);
      }
    });

    setTimeout(() => {
      home.classList.remove("hidden");
    }, 550);
  };

  return (
    <div className="Navbar float-down">
      <header>
        <nav>
          <div>
            <button
              onClick={goToHomepage}
              className={`brand ms-3 ${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              L<span className="letter">C</span>
              <span className="stop">.</span>
            </button>
          </div>
          <div className="btn-container">
            <div>
              <button
                className={`btn ${
                  toggleDarkMode ? "theme-btn-light" : "theme-btn-dark"
                }`}
                onClick={toggleDarkTheme}
              >
                <i
                  className={`fa-lightbulb ${
                    toggleDarkMode ? "fa-solid" : "fa-thin"
                  }`}
                ></i>
              </button>
            </div>
            <div>
              <button
                onClick={() => showMenu("menu-page")}
                className={`btn ${
                  toggleDarkMode ? "menu-btn-light" : "menu-btn-dark"
                }
              } ${isMenuVisible ? "hidden" : ""} `}
              >
                <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
                <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
                <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
              </button>
              <button
                onClick={closeMenu}
                className={`menu-btn-close btn ${
                  isMenuVisible ? "" : "hidden"
                }`}
              >
                <i
                  className={`fa-solid fa-xmark ${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MenuPage
        isMenuVisible={isMenuVisible}
        showMenu={showMenu}
        closeMenu={closeMenu}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}

export default Navbar;
