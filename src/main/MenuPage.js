import React, { useState, useEffect } from "react";
import "./MenuPage.css";

function MenuPage({ closeMenu, isMenuVisible, toggleDarkMode }) {
  // State to track the selected page
  const [selectedPage, setSelectedPage] = useState(null);

  // Effect to handle page visibility and menu button click
  useEffect(() => {
    // Function to hide pages based on visibility
    const hidePages = () => {
      // List of page IDs to hide
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

      // Hide each page in the list
      pagesToHide.forEach((pageId) => {
        const page = document.getElementById(pageId);
        if (page) {
          page.classList.add("hidden");
        }
      });

      // If no page is selected and menu is not visible, display the home page
      if (!selectedPage && !isMenuVisible) {
        const home = document.getElementById("home-page");
        if (home) {
          setTimeout(() => {
            home.classList.remove("hidden");
          }, 600);
        }
      }

      // If menu is not visible, display the selected page
      if (!isMenuVisible) {
        const selectedElement = document.getElementById(selectedPage);
        if (selectedElement) {
          setTimeout(() => {
            selectedElement.classList.remove("hidden");
          }, 600);
        }
      }
    };

    // Call the function to hide pages
    hidePages();

    // Event listener for the home button click
    const homeButton = document.querySelector(".brand");
    homeButton.addEventListener("click", () => {
      if (!isMenuVisible) {
        setSelectedPage("home-page");
      }
    });
  }, [selectedPage, isMenuVisible]);

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

    // Add fade-out effect to all pages
    pages.forEach((pageId) => {
      const element = document.getElementById(pageId);
      if (element) {
        element.classList.add("fade-out");
      }
    });

    // Hide and display pages with delay
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

      // Set the selected page
      setSelectedPage(pageId);
    }, 600);

    // Close the menu
    closeMenu();
  };

  return (
    <div className={`MenuPage ${isMenuVisible ? "" : "hidden"}`} id="menu-page">
      <ul className="float-right">
        <li
          className={`${toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"}`}
        >
          01
          <button
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
