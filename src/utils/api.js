// fictional watchlist until backend is built
export function getWatchList() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        id: "12345",
        imdbID: movie.imbdID,
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
      },
      {
        id: "123456",
        imdbID: movie.imbdID,
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
      },
      {
        id: "1234567",
        imdbID: movie.imbdID,
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
      },
    ])
  );
}
