import React, { useState } from "react";
import MenuPage from "./MenuPage";
import logoLightMode from "./logo-light.png";
import logoDarkMode from "./logo-dark.png";
import "./Navbar.css";

function Navbar({ toggleDarkMode, toggleDarkTheme }) {
  // State to manage menu visibility
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Function to show menu
  const showMenu = (pageId) => {
    const project1 = document.getElementById("project-1");
    const pages = [
      "home-page",
      "project-page",
      "gallery-page",
      "about-page",
      "contact-page",
      "gallery-1",
      "gallery-2",
      "gallery-3",
      "gallery-4",
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
        }, 600);
      }
    });

    if (project1) {
      const grid1 = document.querySelector(".project-grid-item-1");
      const grid2 = document.querySelector(".project-grid-item-2");
      grid1.classList.remove("float-left");
      grid1.classList.add("float-out-leftside");
      grid2.classList.remove("float-right");
      grid2.classList.add("float-out-rightside");
      setTimeout(() => {
        grid1.classList.add("float-left");
        grid1.classList.remove("float-out-leftside");
        grid2.classList.add("float-right");
        grid2.classList.remove("float-out-rightside");
        project1.classList.add("hidden");
      }, 550);
    }
  };

  // Function to close menu
  const closeMenu = () => {
    const menuPage = document.getElementById("menu-page");

    menuPage.classList.add("fade-out");
    setTimeout(() => {
      menuPage.classList.add("hidden");
      menuPage.classList.remove("fade-out");
      setMenuVisible(false);
    }, 500);
  };

  // Function to navigate to home page
  const goToHomePage = () => {
    const homePage = document.getElementById("home-page");
    const menuPage = document.getElementById("menu-page");
    const project1 = document.getElementById("project-1");

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

    pagesToHide.forEach((pageId) => {
      const page = document.getElementById(pageId);

      if (page) {
        page.classList.add("fade-out");
        setTimeout(() => {
          page.classList.add("hidden");
          page.classList.remove("fade-out");
        }, 500);
      }
    });

    setTimeout(() => {
      homePage.classList.remove("hidden");
    }, 600);

    // Additional logic for menu page
    if (menuPage) {
      setTimeout(() => {
        setMenuVisible(false);
      }, 500);
    }

    // Additional logic for project page(s)
    if (project1) {
      const grid1 = document.querySelector(".project-grid-item-1");
      const grid2 = document.querySelector(".project-grid-item-2");
      grid1.classList.remove("float-left");
      grid1.classList.add("float-out-leftside");
      grid2.classList.remove("float-right");
      grid2.classList.add("float-out-rightside");
      setTimeout(() => {
        project1.classList.add("hidden");
        project1.classList.remove("fade-out");
        grid1.classList.add("float-left");
        grid1.classList.remove("float-out-leftside");
        grid2.classList.add("float-right");
        grid2.classList.remove("float-out-rightside");
        homePage.classList.remove("hidden");
      }, 550);
    }
  };

  return (
    <div className="Navbar float-down">
      <header>
        <nav>
          <div>
            <button onClick={goToHomePage} className="brand">
              <img
                src={toggleDarkMode ? logoLightMode : logoDarkMode}
                height="45"
                width="45"
                alt="Logotype"
              />
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
                className={`${
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
