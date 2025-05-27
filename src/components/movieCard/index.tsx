import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import type { Movie } from '../../types/movie';

type MovieCardProps = {
  movie: Movie;
}

const MovieCard = ({movie}: MovieCardProps) => {
  const no_image_available = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
  const imgSource = movie.Poster !== "N/A" ? movie.Poster : no_image_available;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`)
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;

    if (favorites.includes(movie.imdbID)) {
      updatedFavorites = favorites.filter((id: string) => id !== movie.imdbID);
    } else {
      updatedFavorites = [...favorites, movie.imdbID];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(movie.imdbID));
  }, [movie.imdbID]);

  return (
    <div>
      <div className="movie-card" onClick={handleClick}>
        <div className="favorite-icon" onClick={handleToggleFavorite}>
          {isFavorite ? <FaStar color="gold" /> : <FaRegStar color="gray" />}
        </div>
        <img src={imgSource}
            alt={movie.Title}
            onError={(e) => {
              e.currentTarget.src = no_image_available;
            }} />
        <div className="movie-info">
          <h5>{movie.Title} - {movie.Year}</h5>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;
