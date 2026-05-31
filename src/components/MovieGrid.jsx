import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ movies, loading }) => {
  if (loading) {
    return (
      <div className={styles.grid}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`${styles.skeletonCard} skeleton`}></div>
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No movies found 😢</h2>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
