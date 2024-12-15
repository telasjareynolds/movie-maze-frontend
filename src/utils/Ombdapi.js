import { BASE_URL } from "./constants";
import { request } from "./api";

// Fetch details for a single movie by IMDb ID
export function fetchMovieDetailsByID(imdbID) {
  return request(`${BASE_URL}&i=${imdbID}`);
}

// fetch home page movies
export function getInitialMovies(defaultMovies) {
  const promises = defaultMovies.map((movie) => {
    if (!movie.imdbID) {
      console.error("Missing imdbID for movie:", movie);
      return null;
    }
    return fetchMovieDetailsByID(movie.imdbID);
  });

  return Promise.all(promises.filter(Boolean));
}

// search movies using searchbar
export function searchMovies(searchTerm) {
  return request(`${BASE_URL}&s=${searchTerm}`, {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(searchTerm),
  }).then((movies) => {
    const searchedResults = movies.Search;
    const promises = searchedResults.map((movie) => {
      return fetchMovieDetailsByID(movie.imdbID);
    });
    return Promise.all(promises);
  });
}

// fictional backend api
export function SaveMovie(movie) {
  return new Promise((resolve) => {
    resolve({
      id: "12345",
      imdbID: movie.imbdID,
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
    });
  });
}
