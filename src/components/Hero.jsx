import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './Hero.module.css';

const Hero = ({ movies }) => {
  if (!movies || movies.length === 0) return <div className={`${styles.heroContainer} skeleton`}></div>;

  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, bulletClass: `swiper-pagination-bullet ${styles.bullet}`, bulletActiveClass: `swiper-pagination-bullet-active ${styles.bulletActive}` }}
        loop={true}
        className={styles.swiper}
      >
        {movies.map((movie) => {
          const backdropUrl = `${import.meta.env.VITE_TMDB_IMAGE_ORIGINAL_URL}${movie.backdrop_path}`;
          return (
            <SwiperSlide key={movie.id}>
              <div className={styles.hero} style={{ backgroundImage: `url(${backdropUrl})` }}>
                <div className={styles.overlay}></div>
                <div className={`container ${styles.content}`}>
                  <h1 className={styles.title}>{movie.title || movie.name}</h1>
                  <div className={styles.meta}>
                    <span className={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}</span>
                    <span className={styles.date}>{movie.release_date?.split('-')[0]}</span>
                  </div>
                  <p className={styles.overview}>{movie.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
