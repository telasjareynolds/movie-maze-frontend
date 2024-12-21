import { request } from "./api";

const API_BASE_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

// Fetch details for a single movie by IMDb ID
export function fetchMovieDetailsByID(imdbID) {
  return request(`${API_BASE_URL}&i=${imdbID}`);
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
  return request(`${API_BASE_URL}&s=${searchTerm}`, {
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
