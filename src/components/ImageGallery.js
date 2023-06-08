import React, { useState } from "react";
import styles from "./ImageGallery.module.css";

function ImageGallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.galleryContainer}>
      <h1>Gallery</h1>
      <div className={styles.galleryWrap}>
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className={styles.single} key={index}>
                <img src={slide.src} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImageGallery;
