import "./Main.css";
import MovieCardList from "../MovieCardList/MovieCardList";

function Main({ onSearch, movies, handleSaveMovie, isLoggedIn, savedMovies }) {
  return (
    <main className="main">
      <MovieCardList
        movies={movies}
        onSearch={onSearch}
        handleSaveMovie={handleSaveMovie}
        isLoggedIn={isLoggedIn}
        savedMovies={savedMovies}
      />
    </main>
  );
}

export default Main;
