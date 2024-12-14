import "./MovieCard.css";
import saved_btn from "../../assets/saved_btn.svg";
import unsaved_btn from "../../assets/unsaved_btn.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, handleSaveMovie }) {
  // if user searches for results, show movieCardList, else, show default cards

  const [isSaved, setIsSaved] = useState(false);

  // set card Save on frontend until backend is built
  function onCardSave() {
    if (!isSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
    handleSaveMovie({ ...movie, isSaved });
  }

  return (
    <div className="movie__container">
      <Link className="movie__link" to={`/movies/${movie.imdbID}`}>
        <li className="movie">
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
        </li>
      </Link>

      <img
        src={isSaved ? saved_btn : unsaved_btn} // Toggle Save button image
        alt={isSaved ? "saved" : "not saved"}
        className="movie__save-btn"
        onClick={onCardSave}
      />
    </div>
  );
}

export default MovieCard;
