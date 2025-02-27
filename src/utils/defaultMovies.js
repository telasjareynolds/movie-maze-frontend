const defaultMovies = [
  {
    title: "Transformers",
    year: "2007",
    imdbID: "tt0418279",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg",
    runtime: "144 min",
    genre: "Action, Adventure, Sci-Fi",
    director: "Michael Bay",
    writer: "Roberto Orci, Alex Kurtzman, John Rogers",
    actors: "Shia LaBeouf, Megan Fox, Josh Duhamel",
    plot: "High-school student Sam Witwicky buys his first car, who is actually the Autobot Bumblebee. Bumblebee defends Sam and his girlfriend Mikaela Banes from the Decepticon Barricade, before the other Autobots arrive on Earth. They are searching for the Allspark, and the war on Earth heats up as the Decepticons attack a United States military base in Qatar. Sam and Mikaela are taken by the top-secret agency Sector 7 to help stop the Decepticons, but when they learn the agency also intends to destroy the Autobots, they formulate their own plan to Save the world.",
  },
  {
    title: "The Conjuring",
    year: "2013",
    imdbID: "tt1457767",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
    runtime: "112 min",
    genre: "Horror, Mystery, Thriller",
    director: "James Wan",
    writer: "Chad Hayes, Carey W. Hayes",
    actors: "Patrick Wilson, Vera Farmiga, Ron Livingston",
    plot: "In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror. In desperation, Carolyn contacts the noted paranormal investigators, Ed and Lorraine Warren, to examine the house. What the Warrens discover is a whole area steeped in a satanic haunting that is now targeting the Perron family wherever they go. To stop this evil, the Warrens will have to call upon all their skills and spiritual strength to defeat this spectral menace at its source that threatens to destroy everyone involved.",
  },
  {
    title: "Scream",
    year: "2022",
    imdbID: "tt11245972",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmE4ZmE5NTMtZTZmNi00YWZjLTk0MjYtOGViZDdhZWMyZmRmXkEyXkFqcGc@._V1_SX300.jpg",
    runtime: "114 min",
    genre: "Horror, Mystery, Thriller",
    director: "Matt Bettinelli-Olpin, Tyler Gillett",
    writer: "James Vanderbilt, Guy Busick, Kevin Williamson",
    actors: "Neve Campbell, Courteney Cox, David Arquette",
    plot: "Save the original movie 25 years ago, a cute teenage girl is at home alone when the phone rings. A man wants to play a game with her. With the threat of killing her best friend, Tara's forced to play along. She barely survives the ghost face masked intruder's stabbing. Her 5 year older sister, Sam(antha), who left home at 18 due to mental problems, Sam's boyfriend and Tara's high school friends visit her at the hospital. Later on in a bar, a guy provokes the friends and is later attacked outside in the parking lot by Ghostface. Sam receives a call from him at the hospital and then he unsuccessfully attacks her. She later reveals family secrets to her sister. Sam contacts one of the original victims, Dewey, for help. He warns two other original victims, Sidney Prescott and Gale Weathers, about Ghostface being back. Who is Ghostface? How many more must die?",
  },
  {
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    year: "2012",
    imdbID: "tt1673434",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_SX300.jpg",
    runtime: "115 min",
    genre: "Adventure, Drama, Fantasy",
    director: "Bill Condon",
    writer: "Stephenie Meyer, Melissa Rosenberg",
    actors: "Kristen Stewart, Robert Pattinson, Taylor Lautner",
    plot: "The final Twilight Saga begins with Bella now a vampire learning to use her abilities. And happy to see her daughter, Renesmee is flourishing. But when someone sees Renesmee do something that makes them think that she was turned. This person goes to the Volturi, because it is a violation to turn a child. And the penalty is death for both who turned the child into a vampire and the child, cause they deem a turned child too dangerous. Alice gets a vision of the Volturi coming after them. So the Cullens try to convince them that Renesmee is not a threat. So they ask friends and family to come stand with them. But when someone who has it in for the Volturi shows up and tells them they should be ready for a fight. And they get ready.",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    year: "2005",
    imdbID: "tt0330373",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    runtime: "157 min",
    genre: "Adventure, Family, Fantasy",
    director: "Mike Newell",
    writer: "Steve Kloves, J.K. Rowling",
    actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    plot: 'Harry\'s (Daniel Radcliffe\'s) fourth year at Hogwarts is about to start and he is enjoying the summer vacation with his friends. They get the tickets to The Quidditch World Cup Final, but after the match is over, people dressed Save Lord Voldemort\'s (Ralph Fiennes\') "Death Eaters" set a fire to all of the visitors\' tents, coupled with the appearance of Voldemort\'s symbol, the "Dark Mark" in the sky, which causes a frenzy across the magical community. That same year, Hogwarts is hosting "The Triwizard Tournament", a magical tournament between three well-known schools of magic : Hogwarts, Beauxbatons, and Durmstrang. The contestants have to be above the age of seventeen, and are chosen by a magical object called "The Goblet of Fire". On the night of selection, however, the Goblet spews out four names instead of the usual three, with Harry unwittingly being selected as the Fourth Champion. Since the magic cannot be reversed, Harry is forced to go with it and brave three exceedingly difficult tasks.',
  },
  {
    title: "Avengers: Endgame",
    year: "2019",
    imdbID: "tt4154796",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    runtime: "181 min",
    genre: "Action, Adventure, Drama",
    director: "Anthony Russo, Joe Russo",
    writer: "Christopher Markus, Stephen McFeely, Stan Lee",
    actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
  },
  {
    title: "The Vampire Diaries",
    year: "2009–2017",
    imdbID: "tt1405406",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmNjOWQzYmYtNGYxOS00MjVkLTg1MWUtMTkzMGE0MDgwNzQ5XkEyXkFqcGc@._V1_SX300.jpg",
    runtime: "43 min",
    genre: "Drama, Fantasy, Horror",
    director: "N/A",
    writer: "Julie Plec, Kevin Williamson",
    actors: "Nina Dobrev, Paul Wesley, Ian Somerhalder",
    plot: "After centuries of quarreling, Stefan and Damon Salvatore return to their original town of Mystic Fall, Virginia. Stefan, the selfless, brave, guilt-ridden brother, meets a high school girl named Elena Gilbert whom he instantly falls in love with, while Damon, the gorgeous, dangerous and selfish vampire, is after his brother's girl to pay him back for making him turn into a vampire in 1864.",
  },
  {
    title: "Ginny & Georgia",
    year: "2021–",
    imdbID: "tt10813940",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2U2NjA5NmUtNTUzYi00NDdjLWEwZjgtZGFmYjAzNzk3ZjFkXkEyXkFqcGc@._V1_SX300.jpg",
    genre: "Comedy, Drama",
    writer: "Sarah Lampert",
    actors: "Brianne Howey, Antonia Gentry, Felix Mallard",
    plot: "Angsty and awkward fifteen year old Ginny Miller often feels more mature than her thirty year old mother, the irresistible and dynamic Georgia Miller. After years on the run, Georgia desperately wants to put down roots in picturesque New England and give her family something they've never had a normal life. But it's not all carpool and Kombucha as Georgia's past threatens her and her family's new way of life and Georgia will do anything to protect her family.",
  },
  {
    title: "Mean Girls",
    year: "2004",
    imdbID: "tt0377092",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
    runtime: "97 min",
    genre: "Comedy",
    director: "Mark Waters",
    writer: "Rosalind Wiseman, Tina Fey",
    actors: "Lindsay Lohan, Jonathan Bennett, Rachel McAdams",
    plot: "Lindsay Lohan stars as Cady Heron, a 16 year old homeschooled girl who not only makes the mistake of falling for Aaron Samuels (Jonathan Bennett), the ex-boyfriend of queenbee Regina George (Rachel McAdams), but also unintentionally joins The Plastics, led by Regina herself. Join Cady as she learns that high school life can and will be really tough.",
  },
  {
    title: "Stranger Things",
    year: "2016–2025",
    imdbID: "tt4574334",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE2N2MyMzEtNmU5NS00OTI0LTlkNTMtMWM1YWYyNmU4NmY0XkEyXkFqcGc@._V1_SX300.jpg",
    runtime: "51 min",
    genre: "Drama, Fantasy, Horror",
    director: "N/A",
    writer: "Matt Duffer, Ross Duffer",
    actors: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
    plot: "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that there's more going on than meets the eye.",
  },
];

export default defaultMovies;
