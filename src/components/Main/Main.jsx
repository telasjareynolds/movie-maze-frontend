import "./Main.css";
import MovieCardList from "../MovieCardList/MovieCardList";

function Main({ onSearch, movies, query, handleSaveMovie }) {
  // if user searches for results, show movieCardList, else, show default cards

  return (
    <main className="main">
      <div className="main__overlay">
        <MovieCardList
          movies={movies}
          query={query}
          onSearch={onSearch}
          handleSaveMovie={handleSaveMovie}
        />
      </div>
    </main>
  );
}

export default Main;
