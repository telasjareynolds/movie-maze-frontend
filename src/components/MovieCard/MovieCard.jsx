import "./MovieCard.css";
import saved_btn from "../../assets/saved_btn.svg";
import unsaved_btn from "../../assets/unsaved_btn.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MovieCard({ movie, handleSaveMovie, isLoggedIn }) {
  // if user searches for results, show movieCardList, else, show default cards
  const currentUser = useContext(CurrentUserContext);

  console.log(movie);
  const isSaved = movie.saves ? movie.saves.some((id) => id === currentUser._id) : false

  console.log(currentUser);

  // set card Save on frontend until backend is built
  function onCardSave(e) {
    e.preventDefault();
    handleSaveMovie({ imdbID: movie.imdbID, isSaved });
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
          src={isSaved ? saved_btn : unsaved_btn} // Toggle Save button image
          alt={isSaved ? "saved" : "not saved"}
          className="movie__save-btn"
          onClick={onCardSave}
        />
      )}
    </li>
  );
}

export default MovieCard;
