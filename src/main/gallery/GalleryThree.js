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

function GalleryThree() {
  return (
    <div className="GalleryThree hidden">
      <div className="gallery-3" id="gallery-3">
        <div className="grid fade-in">
          <div className="text-start">
            <a className="ehla-eat-btn btn" data-target-gallery="gallery-2">
              <i className="fa-thin fa-chevron-left"></i>
            </a>
          </div>
          <div className="text-center">
            <h3>Ryan London</h3>
            <p>Leather Goods</p>
          </div>
          <div className="text-end">
            <a className="live-music-btn btn" data-target-gallery="gallery-4">
              <i className="fa-thin fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="gallery-container">
          {imageList.map((image, index) => (
            <img key={index} src={image} alt={`Ryan London ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryThree;
