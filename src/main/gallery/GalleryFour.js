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
  return (
    <div className="GalleryFour hidden" id="gallery-4">
      <div className="gallery-4">
        <div className="grid fade-in">
          <div className="text-start">
            <a className="ryan-london-btn btn" data-target-gallery="gallery-3">
              <i
                className={`fa-thin fa-chevron-left ${
                  toggleDarkMode ? "gallery-btn-light" : "gallery-btn-dark"
                }`}
              ></i>
            </a>
          </div>
          <div className="text-center">
            <h3>Live Music</h3>
            <p className={`${toggleDarkMode ? "text-dark" : "text-light"}`}>
              Events
            </p>
          </div>
          <div className="text-end"></div>
        </div>
        <div className="gallery-container-2 float-up">
          {imageList1.map((image, index) => (
            <img key={index} src={image} alt={`Ryan London ${index}`} />
          ))}
        </div>
        <div className="gallery-container-3 float-up">
          {imageList2.map((image, index) => (
            <img key={index} src={image} alt={`Live Music ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryFour;
