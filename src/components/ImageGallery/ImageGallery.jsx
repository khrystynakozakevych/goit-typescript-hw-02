import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard
            urls={urls.small}
            alt={alt_description}
            onClick={() => openModal({ alt_description, urls })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
