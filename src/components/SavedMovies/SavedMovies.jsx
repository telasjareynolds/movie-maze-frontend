import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getWatchList } from "../../utils/api";

function SavedMovies({}) {
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
