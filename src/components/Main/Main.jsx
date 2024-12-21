import "./Main.css";
import MovieCardList from "../MovieCardList/MovieCardList";

function Main({ onSearch, movies, handleSaveMovie, isLoggedIn }) {

  return (
    <main className="main">
        <MovieCardList
          movies={movies}
          onSearch={onSearch}
          handleSaveMovie={handleSaveMovie}
          isLoggedIn={isLoggedIn}
        />
    </main>
  );
}

export default Main;
