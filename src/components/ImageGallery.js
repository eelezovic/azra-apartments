import React, { useState } from "react";
import styles from "./ImageGallery.module.css";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function ImageGallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { t } = useTranslation();

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  return (
    <>
      {openModal && (
        <div className={styles.slideWrap}>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className={styles.buttonClose}
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className={styles.buttonPrev}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className={styles.buttonNext}
            onClick={nextSlide}
          />
          <div className={styles.fullScreenImage}>
            <img
              src={galleryImages[slideNumber].src}
              alt={galleryImages[slideNumber].alt}
            />
          </div>
        </div>
      )}
      <div className={styles.galleryContainer}>
      <h1>{t('gallery.title')}</h1> 
        <div className={styles.galleryWrap}>
          {galleryImages &&
            galleryImages.map((slide, index) => {
              return (
                <div
                  className={styles.single}
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img src={slide.src} alt={slide.alt} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
