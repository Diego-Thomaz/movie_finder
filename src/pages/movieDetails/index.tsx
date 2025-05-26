import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/movies';
import LoadingSpinner from '../../components/loadingSpinner';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const no_image_available = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
  // const imgSource = movie.Poster !== "N/A" ? movie.Poster : no_image_available;

  useEffect(() => {
    const fetchMovie = async () => {
      try{
        const data = await getMovieById(imdbID as string);
        setMovie(data);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [imdbID]);

  if (loading) return <LoadingSpinner />;
  if (!movie || movie.Response === "False") return <div>Movie not found!</div>

  return (
    <div className="container my-4">
      <h1>{movie.Title} - {movie.Year}</h1>

      <img src={movie.Poster}
           alt={movie.Title}
           onError={(e) => {
             e.currentTarget.src = no_image_available;
           }} />
      <p><strong>Ano:</strong> {movie.Year}</p>
      <p><strong>Gênero:</strong> {movie.Genre}</p>
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Sinopse:</strong> {movie.Plot}</p>
    </div>
  )
}

export default MovieDetails;
