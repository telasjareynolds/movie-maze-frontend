import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about__container">
      <h1 className="about__heading">Welcome to Movie Maze!</h1>
      <p className="about__text">
        Movie Maze is your personalized gateway to discovering, tracking, and
        diving deep into the world of movies. Whether you’re a casual movie
        watcher or a dedicated filmaholic, our app is designed to make your film
        journey seamless and enjoyable. Here’s what you can expect:
      </p>

      <h2 className="about__heading">Key Features:</h2>
      <ul className="about__list">
        <li className="about__text">
          <strong>Home Page of Fan Favorites:</strong> Start your exploration
          with a curated selection of beloved films, ensuring there’s always
          something exciting to catch your eye.
        </li>
        <li className="about__text">
          <strong>Save to Watchlist:</strong> Found a movie you don’t want to
          forget? Simply click the save button, and it’ll be added to your
          personal watchlist—ready for you whenever you are. Simply remove the saved movies once you've completed them.
        </li>
        <li className="about__text">
          <strong>Account Management:</strong> Log in to access your watchlist
          and keep your movie picks synced across devices. Sign out when you’re
          done to keep your account secure. Also, customize your avatar and username whenever you'd like!
        </li>
        <li className="about__text">
          <strong>Detailed Movie Pages:</strong> Dive deeper by clicking on any
          movie. Each page includes a comprehensive synopsis, details about the
          directors, cast, and additional movie information, giving you the full
          picture.
        </li>
        <li className="about__text"><strong>Search Bar:</strong> Use the search bar to find movies and discover exactly what you’re looking for with ease.</li>
      </ul>

      <h2 className="about__heading">About the Developer:</h2>
      <p className="about__text">
        I'm Telasja Reynolds and I created Movie Maze with a deep passion for
        film. With a bachelor’s degree in Film Production, I’ve always been
        fascinated by the art of storytelling on the big screen. This project
        combines my love for cinema with my growing expertise in software
        development, creating a platform that not only celebrates movies but
        also makes it easier for others to enjoy them.
      </p>

      <p className="about__text">
        Thank you for visiting Movie Maze. Happy exploring and happy watching!
      </p>
    </section>
  );
};

export default About;
