import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.list}>
      {images.map((image, id) => (
        <li key={id}>
          <ImageCard {...image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
