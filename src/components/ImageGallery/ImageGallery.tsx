import { ObjectType } from '../../types';
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

interface IImageGallery {
    photos: ObjectType[]
    modalOpen: () => void
    setModalUrl: (url: string) => void
}
 const ImageGallery: React.FC <IImageGallery> = ({ photos, modalOpen, setModalUrl }) =>  {
  const handlePhotoClick = (photo: ObjectType) => {
		setModalUrl(photo.urls.regular);
		modalOpen();
  };
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.galleryItem}>
          <ImageCard photo={photo} onPhotoClick={handlePhotoClick} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery