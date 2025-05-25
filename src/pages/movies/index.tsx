import { getMovies } from "../../services/movies";
import { useState } from "react";
import SearchBar from "../../components/searchBar";
import MovieCard from "../../components/movieCard";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const fetchMovies = async (query: string) => {
    const data = await getMovies(query);
    setMovies(data.Search);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(search.trim()) fetchMovies(search);
  }

  return <>
    <div className="movies-container">
      <h1>Lista de Filmes</h1>

      <SearchBar
        search={search}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <div className="movie-grid">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))}
      </div>
    </div>
  </>
}

export default Movies;
