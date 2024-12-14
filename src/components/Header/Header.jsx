import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

function Header({ onSearch, openSignInModal, openSignOutModal }) {
  return (
    <div className="header">
      <div className="header__name-container">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>
        <h2 className="header__title">Movie Maze</h2>
      </div>
      <div className="header__nav">
        <SearchForm onSearch={onSearch} />
        <Navigation openSignInModal={openSignInModal} openSignOutModal={openSignOutModal}/>
      </div>
    </div>
  );
}

export default Header;
