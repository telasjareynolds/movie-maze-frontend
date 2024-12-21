import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getWatchList } from "../../utils/api";

function SavedMovies({ handleSaveMovie, savedMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);

  //fetch movie details of id
  useEffect(() => {
    getWatchList()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) =>
        console.error("There was an error getting watchlist:", err)
      );
  }, []);

  return (
    <section className="watchlist">
      <h2 className="watchlist__heading">{currentUser.username}'s watchlist</h2>
      {!movies || movies.length === 0 ? (
        <p className="watchlist__empty-message">No saved movies yet!</p>
      ) : (
        <ul className="watchlist__list">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                movies={movies}
                handleSaveMovie={handleSaveMovie}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default SavedMovies;
