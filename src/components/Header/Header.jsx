import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/logo.svg"
import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <div className="header">
      <div className="header__name-container">
      <img className="header__logo" src={logo}/>
      <h2 className="header__title">Movie Maze</h2>
      </div>
      <div className="header__nav">
      <SearchForm />
      <Navigation />
      </div>
    </div>
  );
}

export default Header;
