import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageItem } from '../../types/imageTypes';

interface ImageGalleryProps {
  items: ImageItem[];
  openModal: (image: ImageItem) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.img_list}>
      {items.map(({ id, urls, alt_description, user, likes }) => (
        <li key={id}>
          <ImageCard
            urls={urls.small}
            alt={alt_description}
            onClick={() => openModal({ alt_description, urls, user, likes })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
