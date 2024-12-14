import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";

function SavedMovies({ movies }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="movies">
      <h1 className="movie__heading">{currentUser.username}'s watchlist</h1>
      {!movies || movies.length === 0 ? (
        <p className="movie__empty-message">No saved movies yet!</p>
      ) : (
        <ul className="movie__list">
          {movies.map((movie) => {
            return (
              <MovieCard key={movie.imdbID} movie={movie} movies={movies} />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default SavedMovies;
