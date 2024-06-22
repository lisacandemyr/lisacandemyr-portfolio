import React from 'react';
import "../GalleryPage.css";

function Gallery({ toggleDarkMode }) {
  // Function to show select gallery page
  const handleClick = (pageId) => {
    const gallery = document.getElementById("gallery-page");
    const page = document.getElementById(pageId);

    if (page.classList.contains("hidden")) {
      gallery.classList.add("fade-out");
      setTimeout(() => {
        gallery.classList.add("hidden");
        gallery.classList.remove("fade-out");
      }, 1000);
      page.classList.remove("hidden");
    }
  };

  return (
    <div className="Gallery hidden" id="gallery-page">
      <h2 className={`text-center float-up ${toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"}`}>
        G<span className="space">a</span>lle<span className="space">r</span>y
      </h2>
      <div className={`grid text-center fade-in ${toggleDarkMode ? "gallery-border-light-mode" : "gallery-border-dark-mode"}`}>
        <button title="Greenwich Market - Community Gallery" onClick={() => handleClick("gallery-1")} className={`greenwich-market ${toggleDarkMode ? "greenwich-market-light-mode" : "greenwich-market-dark-mode"}`}>
          <h3 className="gallery-headline">Greenwich Market</h3>
          <p className="gallery-paragraph">Community</p>
        </button>
        <button title="Ehla Eat - Eastern Mediterranean Food Gallery" onClick={() => handleClick("gallery-2")} className={`ehla-eat ${toggleDarkMode ? "ehla-eat-light-mode" : "ehla-eat-dark-mode"}`}>
          <h3 className="gallery-headline">Ehla Eat</h3>
          <p className="gallery-paragraph">Eastern Mediterranean Food</p>
        </button>
        <button title="Ryan London - Leather Goods Gallery" onClick={() => handleClick("gallery-3")} className={`ryan-london ${toggleDarkMode ? "ryan-london-light-mode" : "ryan-london-dark-mode"}`}>
          <h3 className="gallery-headline">Ryan London</h3>
          <p className="gallery-paragraph">Leather Goods</p>
        </button>
        <button title="Live Music - Events Gallery" onClick={() => handleClick("gallery-4")} className={`live-music ${toggleDarkMode ? "live-music-light-mode" : "live-music-dark-mode"}`}>
          <h3 className="gallery-headline">Live Music</h3>
          <p className="gallery-paragraph">Events</p>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
