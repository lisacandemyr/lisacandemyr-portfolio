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

function GalleryTwo() {
  return (
    <div className="GalleryTwo">
      <div className="gallery-2" id="gallery-2">
        <div className="grid fade-in">
          <div className="text-start">
            <a
              className="greenwich-market-btn btn"
              data-target-gallery="gallery-1"
            >
              <i className="fa-thin fa-chevron-left"></i>
            </a>
          </div>
          <div className="text-center">
            <h3>Ehla Eat</h3>
            <p>Community</p>
          </div>
          <div className="text-end">
            <a className="ryan-london-btn btn" data-target-gallery="gallery-3">
              <i className="fa-thin fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="gallery-container">
          {imageList.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryTwo;