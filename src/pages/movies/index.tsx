import { getMovies } from "../../services/movies";
import { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import SearchBar from "../../components/searchBar";
import MovieCard from "../../components/movieCard";
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

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
    fetchMovies(search, pageNumber);
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

      {totalResults > 10 && (
        <Pagination className="justify-content-center mt-4">
          <PaginationItem disabled={page === 1}>
            <PaginationLink previous onClick={() => handlePageClick(page - 1)} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
                .map((pageNum) => (
                  <PaginationItem key={pageNum} active={pageNum === page}>
                    <PaginationLink onClick={() => handlePageClick(pageNum)}>{pageNum}</PaginationLink>
                  </PaginationItem>
          ))}

          <PaginationItem disabled={page === totalPages}>
            <PaginationLink next onClick={() => handlePageClick(page + 1)} />
          </PaginationItem>
        </Pagination>
      )}
    </div>
  </>
}

export default Movies;
