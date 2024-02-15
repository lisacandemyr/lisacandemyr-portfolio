import React from "react";

const images = require.context("./greenwich-market", true);
const imageList = images.keys().map((image) => images(image));

function GalleryOne() {
  return (
    <div className="GalleryOne">
      <div className="gallery-1" id="gallery-1">
        <div className="grid fade-in">
          <div className="text-start"></div>
          <div className="text-center">
            <h3>Greenwich Market</h3>
            <p>Community</p>
          </div>
          <div className="text-end">
            <a className="ehla-eat-btn btn" data-target-gallery="gallery-2">
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

export default GalleryOne;
