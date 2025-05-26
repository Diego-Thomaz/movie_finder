import { getMovies } from "../../services/movies";
import { useState } from "react";
import SearchBar from "../../components/searchBar";
import MovieCard from "../../components/movieCard";
import PaginationBar from "../../components/paginationBar";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const fetchMovies = async (query: string, page: number = 1) => {
    const data = await getMovies(query, page);

    if(data.Response === "True") {
      setMovies(data.Search);
      setTotalResults(data.totalResults);
    }
    else {
      setMovies([]);
      setTotalResults(0);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(search.trim()) {
      setPage(1);
      fetchMovies(search, 1);
    }
  }

  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    fetchMovies(search, pageNumber);
  }

  return <>
    <div className="movies-container">
      <h1>Movie's list</h1>

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

      {totalPages > 1 && (
        <PaginationBar
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  </>
}

export default Movies;
