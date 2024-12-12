import "./MovieInfoPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovieDetailsByID } from "../../utils/Ombdapi";

function MovieInfoPage({ movies }) {
  const { imdbID } = useParams();
  const movie = movies.find((m) => m.imdbID === imdbID);

  //fetch movie details of id
  useEffect(() => {
    fetchMovieDetailsByID(imdbID);
  }, [imdbID]);

  console.log(movie);

  return (
    <section className="info">
      <img src={movie.Poster} alt={movie.Title} className="info__poster" />
      <ul className="info__list">
        <li className="info__list-item">
          {" "}
          <strong>Title:</strong> {movie.Title}
        </li>
        <li className="info__list-item">
          {" "}
          <strong> Movie or TV Show:</strong> {movie.Type}
        </li>

        <li className="info__list-item">
          <strong> Year:</strong> {movie.Year}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Rated:</strong> {movie.Rated}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Runtime:</strong> {movie.Runtime}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Actors:</strong> {movie.Actors}
        </li>
        <li className="info__list-item">
          <strong> Director:</strong> {movie.Director}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Writer:</strong> {movie.Writer}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Genre:</strong> {movie.Genre}
        </li>
        <li className="info__list-item">
          <strong> Plot:</strong> {movie.Plot}
        </li>
      </ul>
    </section>
  );
}

export default MovieInfoPage;
