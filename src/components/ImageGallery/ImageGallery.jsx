import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.img_list}>
      {console.log(items)}
      {items.map(({ id, urls, alt_description, user, likes }) => (
        <li key={id}>
          <ImageCard
            urls={urls.small}
            alt={alt_description}
            onClick={() =>
              openModal({ alt_description, urls, user: user.name, likes })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
