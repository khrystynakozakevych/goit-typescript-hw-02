import { fetchImages } from './assets/photos-api';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function asyncWrapper() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalImages(data.total);
      } catch (error) {
        setError('Failed to fetch images. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [query, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  const hasMoreImages = images.length < totalImages;

  const openModal = selectedImage => {
    setIsOpen(true);
    setModalData(selectedImage);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <main>
        {images.length > 0 && (
          <ImageGallery items={images} openModal={openModal} />
        )}
        {hasMoreImages && !isLoading && (
          <LoadMoreBtn onClick={onLoadMore}>Load More</LoadMoreBtn>
        )}

        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalData={modalData}
        />
      </main>
    </>
  );
}

export default App;
