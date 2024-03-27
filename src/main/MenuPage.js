import React, { useState, useEffect } from "react";
import "./MenuPage.css";

function MenuPage({ closeMenu, isMenuVisible, toggleDarkMode }) {
  // State to track the selected page
  const [selectedPage, setSelectedPage] = useState(null);

  // Function to handle page clicks
  const handleClick = (pageId) => {
    // List of page IDs
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

    // Hide and display pages with delay
    setTimeout(() => {
      pages.forEach((pageId) => {
        const element = document.getElementById(pageId);
        if (element) {
          element.classList.add("hidden");
        }
      });

      const selectedElement = document.getElementById(pageId);
      if (selectedElement) {
        selectedElement.classList.remove("hidden");
      }

      setSelectedPage(pageId);
    }, 600);

    // Close the menu
    closeMenu();
  };

  // useEffect to handle menu visibility changes
  useEffect(() => {
    if (!isMenuVisible) {
      if (selectedPage) {
        const element = document.getElementById(selectedPage);
        if (element) {
          element.classList.remove("hidden");
        }
      } else {
        // If selectedPage is null, show the home page
        const homePage = document.getElementById("home-page");
        if (selectedPage === null) {
          homePage.classList.remove("hidden");
        }
      }
    }
  }, [isMenuVisible, selectedPage]);

  return (
    <div className={`MenuPage ${isMenuVisible ? "" : "hidden"}`} id="menu-page">
      <ul className="float-right">
        <li
          className={`${toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"}`}
        >
          01
          <button
            title="Homepage"
            onClick={() => handleClick("home-page")}
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Home
          </button>
        </li>
        <li
          className={`${toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"}`}
        >
          02
          <button
            title="Lisa's Web Projects"
            onClick={() => handleClick("project-page")}
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Projects
          </button>
        </li>
        <li
          className={`${toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"}`}
        >
          03
          <button
            title="Lisa's Photo Gallery"
            onClick={() => handleClick("gallery-page")}
            className={`ms-2 gallery-btn ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            G<span className="more-spacing">a</span>lle
            <span className="more-spacing">r</span>y
          </button>
        </li>
        <li
          className={`${toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"}`}
        >
          04
          <button
            title="About Lisa"
            onClick={() => handleClick("about-page")}
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            About
          </button>
        </li>
        <li
          className={`${toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"}`}
        >
          05
          <button
            title="Contact Lisa"
            onClick={() => handleClick("contact-page")}
            className={`ms-2 contact-btn ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Con<span className="more-spacing">t</span>act
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuPage;
