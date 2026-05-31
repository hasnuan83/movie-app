import React from 'react';
import styles from './GenreFilter.module.css';

const GenreFilter = ({ genres, selectedGenre, onSelectGenre }) => {
  if (!genres || genres.length === 0) return null;

  return (
    <div className={styles.genreContainer}>
      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.genreBtn} ${!selectedGenre ? styles.active : ''}`}
          onClick={() => onSelectGenre(null)}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`${styles.genreBtn} ${selectedGenre === genre.id ? styles.active : ''}`}
            onClick={() => onSelectGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
