import "./Navigation.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation({ openSignInModal}) {
  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = currentUser && currentUser.username;

  return (
    <div className="navigation">
       <Link to="/">
      <button className="navigation__home" type="button">Home</button>
        </Link>
        { isLoggedIn ? (
          <div>
          <p className="navigation__username">{currentUser.username}</p>
          <Link to="/saved-movies">Watchlist</Link>
          </div>
        ) : (
          <button className="navigation__login" type="button" onClick={openSignInModal}>Sign in</button>
        )
        }
    </div>
  );
}

export default Navigation;