import Gallery from "./gallery/Gallery.js";
import GalleryOne from "./gallery/GalleryOne.js";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Gallery />
      <GalleryOne />
    </div>
  );
}

export default GalleryPage;
