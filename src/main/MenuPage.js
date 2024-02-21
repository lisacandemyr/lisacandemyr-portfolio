import React, { useState, useEffect } from "react";
import "./MenuPage.css";

function MenuPage({ closeMenu, isMenuVisible, toggleDarkMode }) {
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const home = document.getElementById("home-page");
    const project = document.getElementById("project-page");
    const gallery = document.getElementById("gallery-page");
    const about = document.getElementById("about-page");
    const contact = document.getElementById("contact-page");
    const gallery1 = document.getElementById("gallery-1");
    const gallery2 = document.getElementById("gallery-2");
    const gallery3 = document.getElementById("gallery-3");
    const gallery4 = document.getElementById("gallery-4");

    [
      home,
      project,
      gallery,
      about,
      contact,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
    ].forEach((page) => {
      if (page) {
        page.classList.add("hidden");
      }
    });

    if (!selectedPage && !isMenuVisible) {
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
    }
  }, [selectedPage, isMenuVisible]);

  const handleClick = (pageId) => {
    const home = document.getElementById("home-page");
    const project = document.getElementById("project-page");
    const gallery = document.getElementById("gallery-page");
    const about = document.getElementById("about-page");
    const contact = document.getElementById("contact-page");
    const menu = document.getElementById("menu-page");
    const gallery1 = document.getElementById("gallery-1");
    const gallery2 = document.getElementById("gallery-2");
    const gallery3 = document.getElementById("gallery-3");
    const gallery4 = document.getElementById("gallery-4");

    [
      home,
      project,
      gallery,
      about,
      contact,
      menu,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
    ].forEach((element) => {
      if (element) {
        element.classList.add("fade-out");
      }
    });

    setTimeout(() => {
      [
        home,
        project,
        gallery,
        about,
        contact,
        menu,
        gallery1,
        gallery2,
        gallery3,
        gallery4,
      ].forEach((element) => {
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
        <div className="row">
          <div className="col-3"></div>
          <div className="col-8">
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
                  home
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
                  projects
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
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  gallery
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
                  about
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
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
