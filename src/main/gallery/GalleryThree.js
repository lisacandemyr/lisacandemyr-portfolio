import React from "react";

function generateFileNames(prefix, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${index + 1}.jpg`
  );
}
const fileNames = generateFileNames("rl", 30);
const images = require.context("./ryan-london", true);
const imageList = fileNames.map((fileName) => images(`./${fileName}`));

function GalleryThree({ toggleDarkMode }) {
  const handleClick = (targetGalleryId) => {
    const currentGallery = document.getElementById("gallery-3");
    const targetGallery = document.getElementById(targetGalleryId);

    if (!targetGallery.classList.contains("hidden")) {
      return;
    }

    currentGallery.classList.add("fade-out");
    setTimeout(() => {
      currentGallery.classList.add("hidden");
      currentGallery.classList.remove("fade-out");
    }, 1000);
    setTimeout(() => {
      targetGallery.classList.remove("hidden");
    }, 700);
  };
  return (
    <div className="GalleryThree hidden" id="gallery-3">
      <div className="gallery-3">
        <div className="grid fade-in">
          <div className="text-start">
            <button
              onClick={() => handleClick("gallery-2")}
              className="ehla-eat-btn btn"
            >
              <i
                className={`fa-thin fa-angle-left ${
                  toggleDarkMode ? "gallery-btn-light" : "gallery-btn-dark"
                }`}
              ></i>
            </button>
          </div>
          <div className="text-center">
            <h3>Ryan London</h3>
            <p
              className={`${
                toggleDarkMode ? "text-light-mode" : "text-dark-mode"
              }`}
            >
              Leather Goods
            </p>
          </div>
          <div className="text-end">
            <button
              onClick={() => handleClick("gallery-4")}
              className="live-music-btn btn"
            >
              <i
                className={`fa-thin fa-angle-right ${
                  toggleDarkMode ? "gallery-btn-light" : "gallery-btn-dark"
                }`}
              ></i>
            </button>
          </div>
        </div>
        <div className="gallery-container fade-in">
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Ryan London ${index}`}
              className="gallery-image"
            />
          ))}
        </div>
        <a href="#gallery-3">
          <i className="fa-thin fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default GalleryThree;
