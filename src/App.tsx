import { fetchImages } from './assets/photos-api';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { ImageItem } from './types/imageTypes';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ImageItem | null>(null);
  const [totalImages, setTotalImages] = useState<number>(0);

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

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  const hasMoreImages = images.length < totalImages;

  const openModal = (selectedImage: ImageItem) => {
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
};

export default App;
