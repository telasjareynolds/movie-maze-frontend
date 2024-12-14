import "./Navigation.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation({ openSignInModal, openSignOutModal }) {
  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = currentUser && currentUser.username;

  return (
    <div className="navigation">
      <Link to="/">
        <button className="navigation__home" type="button">
          Home
        </button>
      </Link>
      {isLoggedIn ? (
        <div className="navigation__user">
          <Link to="/Saved-movies" className="navigation__watchlist">
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
    </div>
  );
}

export default Navigation;
