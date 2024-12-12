import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import defaultMovies from "../../utils/defaultMovies.js";
import * as api from "../../utils/Ombdapi.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import About from "../About/About.jsx";
import MovieInfoPage from "../MovieInfoPage/MovieInfoPage.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [modalActive, setModalActive] = useState("");
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    username: "",
    _id: "",
  });

  // get default movies on page load
  useEffect(() => {
    setIsLoading(true);
    api
      .getInitialMovies(defaultMovies)
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.error(`Error fetching initial movies:`, err))
      .finally(setIsLoading(false));
  }, []);

  //Stop ESC listener if there are no active modals
  useEffect(() => {
    if (!modalActive) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActivemodal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [modalActive]);

  //handle search queries
  function searchMovies(query) {
    setIsLoading(true);
    api
      .searchMovies(query)
      .then((data) => {
        if (data.length === 0) {
          setMovies([]);
        } else {
          setQuery(data);
          setErrorMessage("");
        }
      })
      .catch((err) => {
        setErrorMessage(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
        console.error(`Error fetching searched movies:`, err);
      })
      .finally(setIsLoading(false));
  }

  // Open modals
  const openSignUpModal = (e) => {
    e.preventDefault();
    setModalActive("register");
  };
  const openSignInModal = (e) => {
    e.preventDefault();
    setModalActive("login");
  };

  // close any modal
  const closeActivemodal = () => {
    setModalActive("");
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : errorMessage ? (
        <p className="page page__error-message">{errorMessage}</p>
      ) : (
        <div className="page">
          <div className="page__overlay">
            <Header onSearch={searchMovies} openSignInModal={openSignInModal} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    onSearch={searchMovies}
                    movies={query.length > 0 ? query : defaultMovies}
                    query={query}
                  />
                }
              />
              <Route
                path="/movies/:imdbID"
                element={<MovieInfoPage movies={movies} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Routes>
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      )}
      <LoginModal
        handleModalClose={closeActivemodal}
        isOpen={modalActive === "login"}
        buttonText={isLoading ? "Saving..." : "Log In"}
        openSignUpModal={openSignUpModal}
      />
      <SignUpModal
        handleModalClose={closeActivemodal}
        isOpen={modalActive === "register"}
        buttonText={isLoading ? "Saving..." : "Sign Up"}
        openSignInModal={openSignInModal}
      />
      <Footer />
    </>
  );
}

export default App;
