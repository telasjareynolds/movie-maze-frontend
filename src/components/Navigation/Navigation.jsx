import "./Navigation.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation({ openSignInModal, openSignOutModal }) {
  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = currentUser && currentUser.username;

  console.log(currentUser._id);

  return (
    <nav className="navigation">
      <Link to="/">
        <button className="navigation__home" type="button">
          Home
        </button>
      </Link>
      {isLoggedIn ? (
        <div className="navigation__user">
          <Link to="/saved-movies" className="navigation__watchlist">
            {" "}
            Watchlist
          </Link>
          <button
            type="button"
            className="navigation__username"
            onClick={openSignOutModal}
          >
            {" "}
            Welcome Back, {currentUser.username}
          </button>
        </div>
      ) : (
        <button
          className="navigation__login"
          type="button"
          onClick={openSignInModal}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
