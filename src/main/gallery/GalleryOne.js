import React from "react";

function generateFileNames(prefix, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${index + 1}.jpg`
  );
}
const fileNames = generateFileNames("gm", 36);
const images = require.context("./greenwich-market", true);
const imageList = fileNames.map((fileName) => images(`./${fileName}`));

function GalleryOne({ toggleDarkMode }) {
  const handleClick = (targetGalleryId) => {
    const currentGallery = document.getElementById("gallery-1");
    const targetGallery = document.getElementById(targetGalleryId);

    if (!targetGallery.classList.contains("hidden")) {
      return;
    }

    currentGallery.classList.add("fade-out");
    setTimeout(() => {
      currentGallery.classList.add("hidden");
    }, 1000);
    targetGallery.classList.remove("hidden");
  };

  return (
    <div className="GalleryOne hidden" id="gallery-1">
      <div className="gallery-1">
        <div className="grid fade-in">
          <div className="text-start"></div>
          <div className="text-center">
            <h3>Greenwich Market</h3>
            <p
              className={`${
                toggleDarkMode ? "text-light-mode" : "text-dark-mode"
              }`}
            >
              Community
            </p>
          </div>
          <div className="text-end">
            <button
              onClick={() => handleClick("gallery-2")}
              className="ehla-eat-btn btn"
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
            <img key={index} src={image} alt={`Greenwich Market ${index}`} />
          ))}
        </div>
        <a href="#gallery-1">
          <i className="fa-thin fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default GalleryOne;
