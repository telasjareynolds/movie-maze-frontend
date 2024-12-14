import "./MovieCardList.css";
import MovieCard from "../MovieCard/MovieCard";


function MovieCardList({ movies, handleSaveMovie }) {
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
                handleSaveMovie={handleSaveMovie}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default MovieCardList;
