import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchTrending = async () => {
  const response = await tmdb.get('/trending/movie/week');
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await tmdb.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data;
};

export const fetchGenres = async () => {
  const response = await tmdb.get('/genre/movie/list');
  return response.data;
};

export const fetchMoviesByGenre = async (genreId) => {
  const response = await tmdb.get('/discover/movie', {
    params: {
      with_genres: genreId,
    },
  });
  return response.data;
};
