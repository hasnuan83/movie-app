const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchTrending = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error('Failed to fetch trending movies');
  return await response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`);
  if (!response.ok) throw new Error('Failed to search movies');
  return await response.json();
};

export const fetchGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) throw new Error('Failed to fetch genres');
  return await response.json();
};

export const fetchMoviesByGenre = async (genreId) => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US`);
  if (!response.ok) throw new Error('Failed to fetch movies by genre');
  return await response.json();
};
