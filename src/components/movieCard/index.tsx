import { useNavigate } from 'react-router-dom';
import type { Movie } from '../../types/movie';

type MovieCardProps = {
  movie: Movie;
}

const MovieCard = ({movie}: MovieCardProps) => {
  const no_image_available = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
  const imgSource = movie.Poster !== "N/A" ? movie.Poster : no_image_available;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`)
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={imgSource}
           alt={movie.Title}
           onError={(e) => {
            e.currentTarget.src = no_image_available;
           }} />
      <div className="movie-info">
        <h5>{movie.Title} - {movie.Year}</h5>

      </div>
    </div>
  )
}

export default MovieCard;
