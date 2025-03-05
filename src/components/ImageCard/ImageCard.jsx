import css from './ImageCard.module.css';

const ImageCard = ({ urls, alt, onClick }) => {
  return (
    <div onClick={onClick} className={css.image_modal}>
      <img src={urls} alt={alt} />
    </div>
  );
};

export default ImageCard;
