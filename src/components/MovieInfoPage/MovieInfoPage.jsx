import "./MovieInfoPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetailsByID } from "../../utils/Ombdapi";

function MovieInfoPage() {
  const { imdbID } = useParams();
  //const movie = movies.find((m) => m.imdbID === imdbID);
  const [movie, setMovie] = useState({
    actors: "",
    awards: "",
    boxOffice: "",
    country: "",
    director: "",
    genre: "",
    language: "",
    metascore: "",
    plot: "",
    poster: "",
    production: "",
    rated: "",
    ratings: [],
    released: "",
    response: "",
    runtime: "",
    title: "",
    type: "",
    website: "",
    writer: "",
    year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: "",
  });

  //fetch movie details of id
  useEffect(() => {
    fetchMovieDetailsByID(imdbID)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) =>
        console.error(
          "There was an error fetching movie by ID for details:",
          err
        )
      );
  }, [imdbID]);

  return (
    <section className="info">
      <img src={movie.poster} alt={movie.title} className="info__poster" />
      <ul className="info__list">
        <li className="info__list-item">
          {" "}
          <strong>Title:</strong> {movie.title}
        </li>
        <li className="info__list-item">
          {" "}
          <strong> Movie or TV Show:</strong> {movie.type}
        </li>

        <li className="info__list-item">
          <strong> Year:</strong> {movie.year}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Rated:</strong> {movie.rated}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Runtime:</strong> {movie.runtime}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Actors:</strong> {movie.actors}
        </li>
        <li className="info__list-item">
          <strong> Director:</strong> {movie.director}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Writer:</strong> {movie.writer}
        </li>
        <li className="info__list-item">
          {" "}
          <strong>Genre:</strong> {movie.genre}
        </li>
        <li className="info__list-item">
          <strong> Plot:</strong> {movie.plot}
        </li>
      </ul>
    </section>
  );
}

export default MovieInfoPage;
