import React from "react";

function generateFileNames(prefix, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${index + 1}.jpg`
  );
}
const fileNames = generateFileNames("lm", 6);
const images = require.context("./live-music", true);
const imageList = fileNames.map((fileName) => images(`./${fileName}`));

function GalleryFour({ toggleDarkMode }) {
  const handleClick = (targetGalleryId) => {
    const currentGallery = document.getElementById("gallery-4");
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
    <div className="GalleryFour hidden" id="gallery-4">
      <div className="gallery-4">
        <div className="grid fade-in">
          <div className="text-start">
            <button
              onClick={() => handleClick("gallery-3")}
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
            <h3>Live Music</h3>
            <p
              className={`${
                toggleDarkMode ? "text-light-mode" : "text-dark-mode"
              }`}
            >
              Events
            </p>
          </div>
          <div className="text-end"></div>
        </div>
        <div className="gallery-container-2 fade-in">
          {imageList.map((image, index) => (
            <img key={index} src={image} alt={`Live Music ${index}`} />
          ))}
        </div>
        <a href="#gallery-4">
          <i className="fa-thin fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default GalleryFour;
