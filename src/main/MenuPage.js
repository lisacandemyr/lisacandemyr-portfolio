import React, { useState, useEffect } from "react";
import "./MenuPage.css";

function MenuPage({ closeMenu, isMenuVisible, toggleDarkMode }) {
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const hidePages = () => {
      const pagesToHide = [
        "home-page",
        "project-page",
        "gallery-page",
        "about-page",
        "contact-page",
        "gallery-1",
        "gallery-2",
        "gallery-3",
        "gallery-4",
        "project-1",
      ];

      pagesToHide.forEach((pageId) => {
        const page = document.getElementById(pageId);
        if (page) {
          page.classList.add("hidden");
        }
      });

      if (!selectedPage && !isMenuVisible) {
        const home = document.getElementById("home-page");
        if (home) {
          setTimeout(() => {
            home.classList.remove("hidden");
          }, 500);
        }
      }

      if (!isMenuVisible) {
        const selectedElement = document.getElementById(selectedPage);
        if (selectedElement) {
          setTimeout(() => {
            selectedElement.classList.remove("hidden");
          }, 500);
        }
        if (selectedElement === "home-page") {
          setSelectedPage("home-page");
        }
      }
    };

    hidePages();

    const homeButton = document.querySelector(".brand");
    homeButton.addEventListener("click", () => {
      if (!isMenuVisible) {
        setSelectedPage("home-page");
      }
    });
  }, [selectedPage, isMenuVisible]);

  const handleClick = (pageId) => {
    const pages = [
      "home-page",
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

    pages.forEach((pageId) => {
      const element = document.getElementById(pageId);
      if (element) {
        element.classList.add("fade-out");
      }
    });

    setTimeout(() => {
      pages.forEach((pageId) => {
        const element = document.getElementById(pageId);
        if (element) {
          element.classList.add("hidden");
          element.classList.remove("fade-out");
        }
      });

      const selectedElement = document.getElementById(pageId);
      if (selectedElement) {
        selectedElement.classList.remove("hidden");
      }

      setSelectedPage(pageId);
    }, 500);

    closeMenu();
  };

  return (
    <div className={`MenuPage ${isMenuVisible ? "" : "hidden"}`} id="menu-page">
      <div className="menu-page">
        <ul className="float-right">
          <li
            className={`${
              toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
            }`}
          >
            01
            <button
              onClick={() => handleClick("home-page")}
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Home
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
            }`}
          >
            02
            <button
              onClick={() => handleClick("project-page")}
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Projects
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
            }`}
          >
            03
            <button
              onClick={() => handleClick("gallery-page")}
              className={`gallery-btn ${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              G<span className="more-spacing">a</span>lle
              <span className="more-spacing">r</span>y
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
            }`}
          >
            04
            <button
              onClick={() => handleClick("about-page")}
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              About
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
            }`}
          >
            05
            <button
              onClick={() => handleClick("contact-page")}
              className={`contact-btn ${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Con<span className="more-spacing">t</span>act
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuPage;
