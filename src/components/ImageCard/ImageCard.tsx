import React from 'react';
import { ObjectType } from '../../types';
import css from './ImageCard.module.css'

interface ImageCardType {
    photo: ObjectType
    onPhotoClick: (photo: ObjectType) => void
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