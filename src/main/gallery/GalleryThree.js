import React from "react";

// Function to generate file names with a given prefix and count
function generateFileNames(prefix, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${index + 1}.jpg`
  );
}

// Generate file names for the gallery
const fileNames = generateFileNames("rl", 30);

// Require images from the specified directory
const images = require.context("./ryan-london", true);

// Create a list of image URLs
const imageList = fileNames.map((fileName) => images(`./${fileName}`));

function GalleryThree({ toggleDarkMode }) {
  // Function to handle click events for gallery navigation
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
      <div className="grid fade-in">
        <div className="text-start">
          <button
            title="Ehla Eat - Eastern Mediterranean Food Gallery"
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
          <p>Leather Goods</p>
        </div>
        <div className="text-end">
          <button
            title="Live Music - Events Gallery"
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
            height="100%"
            width="100%"
            src={image}
            alt={`Ryan London ${index}`}
            className="gallery-image"
          />
        ))}
      </div>
      <a
        href="#gallery-3"
        className={`${toggleDarkMode ? "top-btn-dark" : "top-btn-light"}`}
      >
        <i className="fa-thin fa-angle-up"></i>
      </a>
    </div>
  );
}

export default GalleryThree;
