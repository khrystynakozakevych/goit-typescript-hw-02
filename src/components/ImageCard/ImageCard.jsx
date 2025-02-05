const ImageCard = ({ urls, alt }) => {
  return (
    <div>
      <img src={urls} alt={alt} />
    </div>
  );
};

export default ImageCard;
