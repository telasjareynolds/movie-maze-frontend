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
import * as Ombdapi from "../../utils/Ombdapi.js";
import * as api from "../../utils/api.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import About from "../About/About.jsx";
import MovieInfoPage from "../MovieInfoPage/MovieInfoPage.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { signup, authorize, getUser } from "../../utils/auth.js";
import SignUpSuccessfulModal from "../SignUpSuccessfulModal/SignUpSuccessfulModal.jsx";
import SignOutModal from "../SignOutModal/SignOutModal.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { getToken, setToken, removeToken } from "../../utils/token.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [modalActive, setModalActive] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    username: "",
    _id: "",
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);

  // get default movies on page load
  useEffect(() => {
    setIsLoading(true);
    Ombdapi.getInitialMovies(defaultMovies)
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.error(`Error fetching initial movies:`, err))
      .finally(setIsLoading(false));
  }, []);

  // get current user on page load
  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      console.log("No token found in localStorage");
      return;
    }

    getUser(jwt)
      .then((data) => {
        setIsLoggedInLoading(false);
        setCurrentUser(data.user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Invalid token:", error);
        removeToken();
        setIsLoggedInLoading(false);
      });
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
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.error("Error registering user:", err);
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
        if (data.user) {
          setToken(data.token);
          setIsLoggedInLoading(false);
          setIsLoggedIn(true);
          setCurrentUser(data.user);
        } else {
          console.error("No JWT token found in the response.");
        }
        closeActivemodal();
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsLoggedInLoading(false);
      });
  }

  // Signout
  function signOut() {
    setIsLoggedIn(false);
    setCurrentUser({});
    removeToken();
    closeActivemodal();
    //remove token once backend build
  }

  //handle search queries
  function searchMovies(query) {
    setIsLoading(true);
    Ombdapi.searchMovies(query)
      .then((data) => {
        if (data.length === 0) {
          setMovies([]);
        } else {
          setMovies(data);
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

  // resetSearch - clear current movies => setMovies([])
  function resetSearch() {
    setMovies([]);
  }

  // handle Save movie functionality
  function handleSaveMovie(imdbID) {
    const token = getToken();

    if (isMovieSaved && token) {
      api
        .saveMovie({ imdbID }, token)
        .then((data) => {
          setSavedMovies((movies) => [data, ...movies]);
          setIsMovieSaved(true);
        })
        .catch((error) => {
          console.error("Error saving movie:", error);
        });
    } else if (!isMovieSaved && token) {
      api
        .unsaveMovie(imdbID, token)
        .then(() => {
          setIsMovieSaved(false);
          setSavedMovies((movies) =>
            movies.filter((item) => item.imdbID !== imdbID)
          );
        })
        .catch((error) => {
          console.error("Error unsaving movie:", error);
        });
    } else {
      console.error("User is not authenticated");
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
              resetSearch={resetSearch}
              openSignInModal={openSignInModal}
              openSignOutModal={openSignOutModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    onSearch={searchMovies}
                    movies={movies.length > 0 ? movies : defaultMovies}
                    handleSaveMovie={handleSaveMovie}
                    isLoggedIn={isLoggedIn}
                
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
                    isLoggedInLoading={isLoggedInLoading}
                  >
                    <SavedMovies
                      handleSaveMovie={handleSaveMovie}
                      savedMovies={savedMovies}
                    />
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
