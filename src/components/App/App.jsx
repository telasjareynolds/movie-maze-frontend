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
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { signup, authorize, getUser, logout } from "../../utils/auth.js";
import SignUpSuccessfulModal from "../SignUpSuccessfulModal/SignUpSuccessfulModal.jsx";
import SignOutModal from "../SignOutModal/SignOutModal.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";

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
  const [savedMovies, setSavedMovies] = useState([]);

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

  // Sign up
  function handleSignUp(email, password, username) {
    if (!email || !password || !username) {
      console.log("Email, password, and username required");
      return;
    }
    setIsLoading(true);

    signup(email, password, username)
      .then((data) => {
        setCurrentUser(data);
        closeActivemodal();
        setModalActive("successful-registration");
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      })
      .finally(() => setIsLoading(false));
  }

  // Log in
  function handleLogin(email, password) {
    if (!email || !password) {
      console.log("Email and password required");
      return;
    }
    setIsLoading(true);

    authorize(email, password)
      .then((data) => {
        getUser(data.token).then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          closeActivemodal();
        });
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      })
      .finally(() => setIsLoading(false));
  }

  // Signout
  function signOut() {
    logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({ email: "", username: "", _id: "" });
        closeActivemodal();
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      })
      .finally(() => setIsLoading(false));

    //remove token once backend build
  }

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
  // handle Save movie functionality
  function handleSaveMovie(movie) {
    if (!movie.isSaved) {
      api
        .SaveMovie(movie)
        .then(() => {
          setMovies((movies) =>
            movies.map((item) =>
              item.imdbID === movie.imdbID ? { ...item, isSaved: true } : item
            )
          );

          setSavedMovies((saved) => {
            if (!saved.some((item) => item.imdbID === movie.imdbID)) {
              return [...saved, { ...movies, isSaved: true }];
            }
            return saved;
          });
        })
        .catch((err) => console.error(err));
    } else {
      console.log("Movie already saved");
    }
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

  const openSignOutModal = (e) => {
    e.preventDefault();
    setModalActive("logout");
  };

  // close any modal
  const closeActivemodal = () => {
    setModalActive("");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        {isLoading ? (
          <Preloader />
        ) : errorMessage ? (
          <p className="page__error-message">{errorMessage}</p>
        ) : (
          <div className="page">
              <Header
                onSearch={searchMovies}
                openSignInModal={openSignInModal}
                openSignOutModal={openSignOutModal}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      onSearch={searchMovies}
                      movies={query.length > 0 ? query : defaultMovies}
                      query={query}
                      handleSaveMovie={handleSaveMovie}
                    />
                  }
                />
                <Route
                  path="/movies/:imdbID"
                  element={<MovieInfoPage movies={movies} />}
                />

                <Route
                  path="/Saved-movies"
                  element={
                    <ProtectedRoute
                      isLoggedIn={isLoggedIn}
                      // isLoggedInLoading={isLoggedInLoading}
                    >
                      <SavedMovies movies={savedMovies} handleSaveMovie={handleSaveMovie} />
                    </ProtectedRoute>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
         
        )}
        <LoginModal
          handleModalClose={closeActivemodal}
          isOpen={modalActive === "login"}
          buttonText={isLoading ? "Saving..." : "Log In"}
          openSignUpModal={openSignUpModal}
          handleLogin={handleLogin}
        />
        <SignUpModal
          handleModalClose={closeActivemodal}
          isOpen={modalActive === "register"}
          buttonText={isLoading ? "Saving..." : "Sign Up"}
          openSignInModal={openSignInModal}
          handleSignUp={handleSignUp}
        />
        <SignUpSuccessfulModal
          title="Registration successfully completed!"
          handleModalClose={closeActivemodal}
          name="successful-register"
          isOpen={modalActive === "successful-registration"}
          openSignInModal={openSignInModal}
        />
        <SignOutModal
          title="Would you like to log out?"
          handleModalClose={closeActivemodal}
          name="logout"
          isOpen={modalActive === "logout"}
          signOut={signOut}
        />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
