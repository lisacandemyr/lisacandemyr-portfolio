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
  return (
    <div className="GalleryOne hidden" id="gallery-1">
      <div className="gallery-1">
        <div className="grid fade-in">
          <div className="text-start"></div>
          <div className="text-center">
            <h3>Greenwich Market</h3>
            <p className={`${toggleDarkMode ? "text-dark" : "text-light"}`}>
              Community
            </p>
          </div>
          <div className="text-end">
            <a className="ehla-eat-btn btn" data-target-gallery="gallery-2">
              <i
                className={`fa-thin fa-chevron-right ${
                  toggleDarkMode ? "gallery-btn-light" : "gallery-btn-dark"
                }`}
              ></i>
            </a>
          </div>
        </div>
        <div className="gallery-container">
          {imageList.map((image, index) => (
            <img key={index} src={image} alt={`Greenwich Market ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryOne;
