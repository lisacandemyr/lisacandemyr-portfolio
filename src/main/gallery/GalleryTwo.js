import React from "react";

// Function to generate file names with a given prefix and count
function generateFileNames(prefix, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${index + 1}.jpg`
  );
}

// Generate file names for the gallery
const fileNames = generateFileNames("ee", 30);

// Require images from the specified directory
const images = require.context("./ehla-eat", true);

// Create a list of image URLs
const imageList = fileNames.map((fileName) => images(`./${fileName}`));

function GalleryTwo({ toggleDarkMode }) {
  // Function to handle click events for gallery navigation
  const handleClick = (targetGalleryId) => {
    const currentGallery = document.getElementById("gallery-2");
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
    <div className="GalleryTwo hidden" id="gallery-2">
      <div className="grid fade-in">
        <div className="text-start">
          <button
            title="Greenwich Market - Community Gallery"
            onClick={() => handleClick("gallery-1")}
            className="greenwich-market-btn btn"
          >
            <i
              className={`fa-thin fa-angle-left ${
                toggleDarkMode ? "gallery-btn-light" : "gallery-btn-dark"
              }`}
            ></i>
          </button>
        </div>
        <div className="text-center">
          <h3>Ehla Eat</h3>
          <p>Eastern Mediterranean Food</p>
        </div>
        <div className="text-end">
          <button
            title="Ryan London - Leather Goods Gallery"
            onClick={() => handleClick("gallery-3")}
            className="ryan-london-btn btn"
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
            alt={`Ehla Eat ${index}`}
            className="gallery-image"
          />
        ))}
      </div>
      <a
        href="#gallery-2"
        className={`${toggleDarkMode ? "top-btn-dark" : "top-btn-light"}`}
      >
        <i className="fa-thin fa-angle-up"></i>
      </a>
    </div>
  );
}

export default GalleryTwo;
