import { BASE_URL } from "./constants";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error:  ${res.status}`);
  }
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

// fictional watchlist until backend is built
//pretending that you're fetching to the database to get the movies saved in the watchlist
export function getWatchList() {
  return new Promise((resolve) =>
    resolve([
      {
        Title: "Transformers",
        Year: "2007",
        imdbID: "tt0418279",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg",
        Runtime: "144 min",
        Genre: "Action, Adventure, Sci-Fi",
        Director: "Michael Bay",
        Writer: "Roberto Orci, Alex Kurtzman, John Rogers",
        Actors: "Shia LaBeouf, Megan Fox, Josh Duhamel",
        Plot: "High-school student Sam Witwicky buys his first car, who is actually the Autobot Bumblebee. Bumblebee defends Sam and his girlfriend Mikaela Banes from the Decepticon Barricade, before the other Autobots arrive on Earth. They are searching for the Allspark, and the war on Earth heats up as the Decepticons attack a United States military base in Qatar. Sam and Mikaela are taken by the top-secret agency Sector 7 to help stop the Decepticons, but when they learn the agency also intends to destroy the Autobots, they formulate their own plan to Save the world.",
      },
      {
        Title: "The Conjuring",
        Year: "2013",
        imdbID: "tt1457767",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
        Runtime: "112 min",
        Genre: "Horror, Mystery, Thriller",
        Director: "James Wan",
        Writer: "Chad Hayes, Carey W. Hayes",
        Actors: "Patrick Wilson, Vera Farmiga, Ron Livingston",
        Plot: "In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror. In desperation, Carolyn contacts the noted paranormal investigators, Ed and Lorraine Warren, to examine the house. What the Warrens discover is a whole area steeped in a satanic haunting that is now targeting the Perron family wherever they go. To stop this evil, the Warrens will have to call upon all their skills and spiritual strength to defeat this spectral menace at its source that threatens to destroy everyone involved.",
      },
      {
        Title: "Scream",
        Year: "2022",
        imdbID: "tt11245972",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmE4ZmE5NTMtZTZmNi00YWZjLTk0MjYtOGViZDdhZWMyZmRmXkEyXkFqcGc@._V1_SX300.jpg",
        Runtime: "114 min",
        Genre: "Horror, Mystery, Thriller",
        Director: "Matt Bettinelli-Olpin, Tyler Gillett",
        Writer: "James Vanderbilt, Guy Busick, Kevin Williamson",
        Actors: "Neve Campbell, Courteney Cox, David Arquette",
        Plot: "Save the original movie 25 years ago, a cute teenage girl is at home alone when the phone rings. A man wants to play a game with her. With the threat of killing her best friend, Tara's forced to play along. She barely survives the ghost face masked intruder's stabbing. Her 5 year older sister, Sam(antha), who left home at 18 due to mental problems, Sam's boyfriend and Tara's high school friends visit her at the hospital. Later on in a bar, a guy provokes the friends and is later attacked outside in the parking lot by Ghostface. Sam receives a call from him at the hospital and then he unsuccessfully attacks her. She later reveals family secrets to her sister. Sam contacts one of the original victims, Dewey, for help. He warns two other original victims, Sidney Prescott and Gale Weathers, about Ghostface being back. Who is Ghostface? How many more must die?",
      },
    ])
  );
}

// Save movie
export function saveMovie({ imdbID, token }) {
  return request(`${BASE_URL}/movies/${imdbID}/saves`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.parse( imdbID ),
  });
}

// Unsave movie
export function unsaveMovie({ imdbID, token }) {
  return request(`${BASE_URL}/movies/${imdbID}/saves`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}
