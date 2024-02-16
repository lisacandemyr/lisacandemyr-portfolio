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
  return (
    <div className="GalleryThree hidden" id="gallery-3">
      <div className="gallery-3">
        <div className="grid fade-in">
          <div className="text-start">
            <a className="ehla-eat-btn btn" data-target-gallery="gallery-2">
              <i
                className={`fa-thin fa-chevron-left ${
                  toggleDarkMode ? "gallery-btn-light" : "gallery-btn-dark"
                }`}
              ></i>
            </a>
          </div>
          <div className="text-center">
            <h3>Ryan London</h3>
            <p className={`${toggleDarkMode ? "text-dark" : "text-light"}`}>
              Leather Goods
            </p>
          </div>
          <div className="text-end">
            <a className="live-music-btn btn" data-target-gallery="gallery-4">
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
            <img key={index} src={image} alt={`Ryan London ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryThree;
