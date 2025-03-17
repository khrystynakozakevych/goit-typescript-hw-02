import css from './ImageCard.module.css';

interface ImageCardProps {
  urls: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ urls, alt, onClick }) => {
  return (
    <div onClick={onClick} className={css.image_modal}>
      <img src={urls} alt={alt} />
    </div>
  );
};

export default ImageCard;
