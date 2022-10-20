import React from 'react';
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({littleImage,largeImage,alt,modalOpen}) => {
  return (
    <div>
      <li className={css.ImageGalleryItem} >
        <img className={css.ImageGalleryItemImage}
             src={littleImage}
             alt={alt}
             onClick={()=>modalOpen(largeImage,alt)}
        />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    littleImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })),
  modalOpen: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
