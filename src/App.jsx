import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieGrid from './components/MovieGrid';
import { fetchTrending, searchMovies, fetchGenres, fetchMoviesByGenre } from './api';

function App() {
  const [movies, setMovies] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setLoading(true);
        const [trendingData, genresData] = await Promise.all([
          fetchTrending(),
          fetchGenres()
        ]);
        
        if (trendingData.results && trendingData.results.length > 0) {
          setMovies(trendingData.results);
          // Set top 5 trending movies for the hero slider
          setHeroMovies(trendingData.results.slice(0, 5));
        }
        
        if (genresData.genres) {
          setGenres(genresData.genres);
        }
      } catch (error) {
        console.error("Failed to initialize app:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      // If search is cleared, fetch trending again
      setIsSearching(false);
      setSelectedGenre(null);
      loadTrending();
      return;
    }

    try {
      setLoading(true);
      setIsSearching(true);
      setSelectedGenre(null);
      const data = await searchMovies(query);
      setMovies(data.results || []);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadTrending = async () => {
    try {
      setLoading(true);
      const data = await fetchTrending();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Failed to fetch trending:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreSelect = async (genreId) => {
    setSelectedGenre(genreId);
    setIsSearching(false);
    
    if (!genreId) {
      loadTrending();
      return;
    }

    try {
      setLoading(true);
      const data = await fetchMoviesByGenre(genreId);
      setMovies(data.results || []);
    } catch (error) {
      console.error("Genre filter failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      
      {!isSearching && !selectedGenre && (
        <Hero movies={heroMovies} />
      )}

      <main className="main-content container" id="discover">
        <div style={{ paddingTop: (!isSearching && !selectedGenre) ? '2rem' : '8rem' }}>
          <h2 className="section-title">
            {isSearching ? 'Search Results' : selectedGenre ? 'Genre Filter' : 'Discover Movies'}
          </h2>
          
          <SearchBar onSearch={handleSearch} />
          
          {!isSearching && (
            <GenreFilter 
              genres={genres} 
              selectedGenre={selectedGenre} 
              onSelectGenre={handleGenreSelect} 
            />
          )}

          <MovieGrid movies={movies} loading={loading} />
        </div>
      </main>
    </div>
  );
}

export default App;
