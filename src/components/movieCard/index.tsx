type MovieCardProps = {
  title: string;
  year: string;
  poster: string;
}

const MovieCard = ({title, year, poster}: MovieCardProps) => {
  const no_image_available = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
  const imgSource = poster !== "N/A" ? poster : no_image_available;

  return (
    <div className="movie-card">
      <img src={imgSource}
           alt={title}
           onError={(e) => {
            e.currentTarget.src = no_image_available;
           }} />
      <div className="movie-info">
        <h5>{title} - {year}</h5>
      </div>
    </div>
  )
}

export default MovieCard;
