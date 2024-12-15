import "./MovieCardList.css";
import MovieCard from "../MovieCard/MovieCard";


function MovieCardList({ movies, handleSaveMovie }) {
  return (
    <section className="movies">
      <h1 className="movies__heading">Fan Favorites</h1>
      {!movies || movies.length === 0 ? (
        <p className="movies__empty-message">
          No results found. Try a different search!
        </p>
      ) : (
        <ul className="movies__list">
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
