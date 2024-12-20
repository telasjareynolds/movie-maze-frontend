import "./Footer.css";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        @ 2024 Telasja Reynolds, Powered by OMDb API
      </p>
      <nav className="footer__links">
        <Link to="/about" className="footer__about-link">
          About
        </Link>
        <a
          href="https://github.com/telasjareynolds/movie-maze-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github icon" className="footer__github" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
