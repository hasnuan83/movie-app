import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path 
    ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={movie.title || movie.name} loading="lazy" />
        <div className={styles.rating}>
          ⭐ {movie.vote_average?.toFixed(1)}
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title} title={movie.title || movie.name}>
          {movie.title || movie.name}
        </h3>
        {movie.overview && (
          <p className={styles.overview} title={movie.overview}>
            {movie.overview}
          </p>
        )}
        <p className={styles.date}>
          {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
