import React from "react";

function generateFileNames(prefix, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${index + 1}.jpg`
  );
}
const fileNames = generateFileNames("ee", 30);
const images = require.context("./ehla-eat", true);
const imageList = fileNames.map((fileName) => images(`./${fileName}`));

function GalleryTwo({ toggleDarkMode }) {
  const handleClick = (targetGalleryId) => {
    const currentGallery = document.getElementById("gallery-2");
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
    <div className="GalleryTwo hidden" id="gallery-2">
      <div className="gallery-2">
        <div className="grid fade-in">
          <div className="text-start">
            <button
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
            <p className={`${toggleDarkMode ? "text-dark" : "text-light"}`}>
              Eastern Mediterranean Food
            </p>
          </div>
          <div className="text-end">
            <button
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
            <img key={index} src={image} alt={`Ehla Eat ${index}`} />
          ))}
        </div>
        <a href="#gallery-2">
          <i className="fa-thin fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default GalleryTwo;
