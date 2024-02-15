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

function GalleryThree() {
  return (
    <div className="GalleryFour">
      <div class="gallery-4" id="gallery-4">
        <div class="grid fade-in">
          <div class="text-start">
            <a class="ryan-london-btn btn" data-target-gallery="gallery-3">
              <i class="fa-thin fa-chevron-left"></i>
            </a>
          </div>
          <div class="text-center">
            <h3 class="text">Live Music</h3>
            <p class="text">Events</p>
          </div>
          <div class="text-end"></div>
        </div>
        <div class="gallery-container-2 float-up">
          {imageList1.map((image, index) => (
            <img key={index} src={image} alt={`Ryan London ${index}`} />
          ))}
        </div>
        <div class="gallery-container-3 float-up">
          {imageList2.map((image, index) => (
            <img key={index} src={image} alt={`Live Music ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryThree;
