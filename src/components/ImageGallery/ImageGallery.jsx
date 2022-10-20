import React from 'react';
import css from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

const ImageGallery = ({images,modalOpen}) => {
  return (
    <div>
      <ul className={css.ImageGallery}>
        {images.map(image => {
          return <ImageGalleryItem
            key={image.id}
            littleImage={image.webformatURL}
            largeImage = {image.largeImageURL}
            alt={image.tags}
            modalOpen={modalOpen}
          />
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })),
  modalOpen: PropTypes.func.isRequired,
}

export default ImageGallery;

