import "./MovieCard.css";
import liked_btn from "../../assets/liked_btn.svg";
import unliked_btn from "../../assets/unliked_btn.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ onSearch, movies, movie }) {
  // if user searches for results, show movieCardList, else, show default cards

  const [isLiked, setIsLiked] = useState(false);

  // set card like on frontend until backend is built
  function onCardLike(e) {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }

  return (
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
      <img
        src={isLiked ? liked_btn : unliked_btn} // Toggle like button image
        alt={isLiked ? "Liked" : "Not liked"}
        className="movie__like-btn"
        onClick={onCardLike}
      />
    </li>
   </Link>
  );
}

export default MovieCard;
