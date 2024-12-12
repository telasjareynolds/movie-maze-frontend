import "./MovieCardList.css";
import defaultMovies from "../../utils/defaultMovies";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

function MovieCardList({ movies, onSearch, onCardLike, query }) {
  return (
    <section className="movie__container">
      <h1 className="movie__heading">Fan Favorites</h1>
      {!movies || movies.length === 0 ? (
        <p className="movie__empty-message">
          No results found. Try a different search!
        </p>
      ) : (
        <ul className="movie__list">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                movies={movies}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default MovieCardList;
