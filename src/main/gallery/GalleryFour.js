import React from "react";

function generateFileNames(prefix, start, count) {
  return Array.from(
    { length: count },
    (_, index) => `${prefix}-${start + index}.jpg`
  );
}
const fileNames1 = generateFileNames("lm", 1, 4);
const fileNames2 = generateFileNames("lm", 5, 5);
const images = require.context("./live-music", true);
const imageList1 = fileNames1.map((fileName) => images(`./${fileName}`));
const imageList2 = fileNames2.map((fileName) => images(`./${fileName}`));

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
    }, 1000);
    targetGallery.classList.remove("hidden");
  };
  return (
    <div className="GalleryFour hidden" id="gallery-4">
      <div className="gallery-4">
        <div className="grid fade-in">
          <div className="text-start">
            <button
              onClick={() => handleClick("gallery-3")}
              className="ryan-london-btn btn"
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
            <p className={`${toggleDarkMode ? "text-dark" : "text-light"}`}>
              Events
            </p>
          </div>
          <div className="text-end"></div>
        </div>
        <div className="gallery-container-2 fade-in">
          {imageList1.map((image, index) => (
            <img key={index} src={image} alt={`Ryan London ${index}`} />
          ))}
        </div>
        <div className="gallery-container-3 fade-in">
          {imageList2.map((image, index) => (
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
