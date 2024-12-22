import "./MovieCard.css";
import saved_btn from "../../assets/saved_btn.svg";
import unsaved_btn from "../../assets/unsaved_btn.svg";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function MovieCard({ movie, handleSaveMovie, isLoggedIn}) {

  const currentUser = useContext(CurrentUserContext);
  const isMovieSaved = movie.owner === currentUser._id;

  // set card Save on frontend until backend is built
  function onCardSave(e) {
    e.preventDefault();
    handleSaveMovie(movie.imdbID);
  }

  return (
    <li className="movie">
      <Link className="movie__link" to={`/movies/${movie.imdbID}`}>
        <div className="movie__container">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie__card-img"
          />
          <div className="movie__info-container">
            <p className="movie__name">
              {movie.Title} ({movie.Year})
            </p>
          </div>
        </div>
      </Link>
      {isLoggedIn && (
        <img
          src={isMovieSaved ? saved_btn : unsaved_btn} // Toggle Save button image
          alt={isMovieSaved ? "saved" : "not saved"}
          className="movie__save-btn"
          onClick={onCardSave}
        />
      )}
    </li>
  );
}

export default MovieCard;
