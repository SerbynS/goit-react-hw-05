import style from "./MovieInfo.module.css";

export default function MovieInfo({ movie }) {
  return (
    <div className={style.wrapper}>
      <img
        className={style.image}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={style.information}>
        <h2 className={style.title}>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h2>
        <p className={style.text}>
          User Score: {Math.round(movie.vote_average * 10)}%
        </p>
        <h3 className={style.subtitle}>Overview</h3>
        <p className={style.text}>{movie.overview}</p>
        <h3 className={style.subtitle}>Genres</h3>
        <div className={style.genres}>
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
