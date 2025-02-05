// import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import ImageModal from './components/ImageModal/ImageModal';
// import Loader from './components/Loader/Loader';
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { ColorRing } from 'react-loader-spinner';
import { fetchImages } from './assets/photos-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImages(topic);
      setImages(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf']}
        />
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery items={images} />}
      {/* <LoadMoreBtn />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal /> */}
    </>
  );
}

export default App;
