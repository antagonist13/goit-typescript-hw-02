import React from 'react';
import { PhotoType } from '../../types';
import css from './ImageCard.module.css'

interface ImageCardType {
    photo: PhotoType
    onPhotoClick: (photo: PhotoType) => void
}
const ImageCard: React.FC<ImageCardType> = ({ photo, onPhotoClick }) => {
  return (
    <div>
      <img
        onClick={() => onPhotoClick(photo)}
        className={css.galleryItemPhoto}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
}
export default ImageCard