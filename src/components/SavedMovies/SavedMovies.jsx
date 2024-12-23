import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MovieCard from "../MovieCard/MovieCard";
import { useContext } from "react";

function SavedMovies({ movies, handleSaveMovie, isLoggedIn, savedMovies }) {
  const currentUser = useContext(CurrentUserContext);

  const userSavedMovies = (savedMovies || []).filter((movie) => {
    return movie.owner === currentUser._id;
  });


  return (
    <section className="watchlist">
      <h2 className="watchlist__heading">{currentUser.username}'s watchlist</h2>
      {!savedMovies || savedMovies.length === 0 ? (
        <p className="watchlist__empty-message">No saved movies yet!</p>
      ) : (
        <ul className="watchlist__list">
          {userSavedMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                handleSaveMovie={handleSaveMovie}
                isLoggedIn={isLoggedIn}
                savedMovies={savedMovies}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default SavedMovies;
