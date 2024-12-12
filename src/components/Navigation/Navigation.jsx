import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ openSignInModal}) {
  return (
    <div className="navigation">
       <Link to="/">
      <button className="navigation__home" type="button">Home</button>
        </Link>
      <button className="navigation__login" type="button" onClick={openSignInModal}>Sign in</button>
    </div>
  );
}

export default Navigation;