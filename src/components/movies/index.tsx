import { getMovies } from "../../services/movies";
import { useState } from "react";

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
    <div>
      <h1>Lista de Filmes</h1>

      <div>
        <form onSubmit={handleSearchSubmit}>
          <input type="text"
                 placeholder="Digite o nome do filme"
                 style={{ width: "400px", padding: "5px", marginRight: "10px", marginBottom: "10px"}}
                 onChange={handleSearchChange}/>
          <button type="submit" style={{ backgroundColor: "gray", marginBottom: "10px" }}>Buscar</button>
        </form>
      </div>

      <table style={{width: "100%", border: "1px solid black", borderCollapse: "collapse"}}>
        <tbody>
          {movies.map((movie: any) => (
            <tr key={movie.imdbID} style={{ border: "1px solid black" }}>
              <td style={{ width: "100px" }}>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}
                     alt={movie.Title}
                     style={{ width: "100px", height: "auto" }}></img>
              </td>
              <td style={{ padding: "10px" }}>
                <h3>{movie.Title} - {movie.Year}</h3>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
}

export default Movies;
