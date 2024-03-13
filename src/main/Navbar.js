import React, { useState } from "react";
import MenuPage from "./MenuPage";
import logoLight from "./logo-light.png";
import logoDark from "./logo-dark.png";
import "./Navbar.css";

function Navbar({ toggleDarkMode, toggleDarkTheme }) {
  const [isMenuVisible, setMenuVisible] = useState(false);

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
      const grid1 = document.querySelector("#project-1 .grid-item-1");
      const grid2 = document.querySelector("#project-1 .grid-item-2");
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
      }, 550);
    }
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
      "project-1",
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

    if (project1) {
      const grid1 = document.querySelector("#project-1 .grid-item-1");
      const grid2 = document.querySelector("#project-1 .grid-item-2");
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
      }, 600);
    }

    if (menuPage) {
      menuPage.classList.add("fade-out");
      setTimeout(() => {
        menuPage.classList.add("hidden");
        menuPage.classList.remove("fade-out");
        setMenuVisible(false);
      }, 500);
    }
  };

  return (
    <div className="Navbar float-down">
      <header>
        <nav>
          <div>
            <button onClick={goToHomepage} className="brand">
              <img
                src={toggleDarkMode ? logoLight : logoDark}
                width="45"
                alt="Logotype"
              ></img>
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
