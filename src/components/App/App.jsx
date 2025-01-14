import { fetchImages } from '../../../images-api.js';
import { useEffect, useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === '') return;

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={css.page}>
      <div className={css.wrapper}>
        <h1>Search !</h1>
        <SearchBar onSubmit={handleSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onClick={handleOpenModal} />
        )}
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        <ImageModal
          onOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      </div>
    </section>
  );
}

// const handleSearch = async newQuery => {
//   try {
//     setError(false);
//     setIsLoading(true);
//     const data = await fetchImages(newQuery);
//     setImages(data);
//   } catch (error) {
//     setError(true);
//   } finally {
//     setIsLoading(false);
//   }
// };
