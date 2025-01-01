import "./MovieCard.css";
import saved from "../../assets/saved_btn.svg";
import unsaved from "../../assets/unsaved_btn.svg";
import { Link } from "react-router-dom";

function MovieCard({ movie, handleSaveMovie, isLoggedIn, savedMovies }) {
  const isMovieSaved = savedMovies.some(
    (savedMovie) => savedMovie.imdbID === movie.imdbID
  );

  // set card Save on frontend until backend is built

  function onCardSave(e) {
    e.preventDefault();
    handleSaveMovie(movie);
  }

  return (
    <li className="movie">
      <Link className="movie__link" to={`/movies/${movie.imdbID}`}>
        <div className="movie__container">
          <img
            src={movie.poster}
            alt={movie.title}
            className="movie__card-img"
          />
          <div className="movie__info-container">
            <p className="movie__name">
              {movie.title} ({movie.year})
            </p>
          </div>
        </div>
      </Link>
      {isLoggedIn && (
        <img
          src={isMovieSaved ? saved : unsaved} // Toggle Save button image
          alt={isMovieSaved ? "saved" : "not saved"}
          className="movie__save-btn"
          onClick={onCardSave}
        />
      )}
    </li>
  );
}

export default MovieCard;
