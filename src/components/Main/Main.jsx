import "./Main.css";
import MovieCardList from "../MovieCardList/MovieCardList";

function Main({ onSearch, movies, query, handleSaveMovie }) {

  return (
    <main className="main">
        <MovieCardList
          movies={movies}
          query={query}
          onSearch={onSearch}
          handleSaveMovie={handleSaveMovie}
        />
    </main>
  );
}

export default Main;
