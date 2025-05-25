type MovieCardProps = {
  title: string;
  year: string;
  poster: string;
}

const MovieCard = ({title, year, poster}: MovieCardProps) => {
  const imgSource = poster !== "N/A" ? poster : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

  return (
    <div className="movie-card">
      <img src={imgSource} alt={title} />
      <div className="movie-info">
        <h5>{title} - {year}</h5>
      </div>
    </div>
  )
}

export default MovieCard;
