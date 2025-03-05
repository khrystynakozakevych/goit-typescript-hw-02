const ImageCard = ({ urls, alt, onClick }) => {
  return (
    <div>
      <img src={urls} alt={alt} />
    </div>
  );
};

export default ImageCard;
