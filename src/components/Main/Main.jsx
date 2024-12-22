import "./Main.css";
import MovieCardList from "../MovieCardList/MovieCardList";

function Main({ onSearch, movies, handleSaveMovie, isLoggedIn, isMovieSaved }) {

  return (
    <main className="main">
        <MovieCardList
          movies={movies}
          onSearch={onSearch}
          handleSaveMovie={handleSaveMovie}
          isLoggedIn={isLoggedIn}
        isMovieSaved={isMovieSaved}
        />
    </main>
  );
}

export default Main;
