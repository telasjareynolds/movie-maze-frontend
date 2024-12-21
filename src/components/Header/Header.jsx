import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

function Header({ onSearch, openSignInModal, openSignOutModal, resetSearch }) {
  return (
    <header className="header">
      <div className="header__name-container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="header logo" />
        </Link>
        <h2 className="header__title">Movie Maze</h2>
      </div>
      <div className="header__nav">
        <SearchForm onSearch={onSearch} resetSearch={resetSearch} />
        <Navigation
          openSignInModal={openSignInModal}
          openSignOutModal={openSignOutModal}
        />
      </div>
    </header>
  );
}

export default Header;
