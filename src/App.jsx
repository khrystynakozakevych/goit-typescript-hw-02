// import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import ImageModal from './components/ImageModal/ImageModal';
// import Loader from './components/Loader/Loader';
import { ColorRing } from 'react-loader-spinner';
import { fetchImages } from './assets/photos-api';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  // const [perPage, setPerPage] = useState(defaultPerPage);
  // const [isEmpty, setIsEmpty] = useState(false);
  // const [isLastPage, setIsLastPage] = useState(false);
  // const [currentImageItem, setCurrentImageItem] = useState({});

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function asyncWrapper() {
      console.log(query, page);

      const data = await fetchImages(query, page);
      setImages(images => [...images, ...data]);
    }
    asyncWrapper();
  }, [query, page]);

  const onLoadMore = () => {
    console.log();
    setPage(page + 1);
  };

  const getQuery = query => {
    console.log(query);
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const openModal = selectedImage => {
    setIsOpen(true);
    setModalData(selectedImage);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  // const handleSearch = async topic => {
  //   try {
  //     setImages([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await fetchImages(topic);
  //     setImages(data);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <SearchBar onSearch={getQuery} />
      {isLoading && (
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
      <main>
        {images.length > 0 && (
          <ImageGallery items={images} openModal={openModal} />
        )}
        {images.length > 0 && (
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
