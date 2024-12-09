import "./Footer.css";
import github from "../../assets/github.png";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        @ 2024 Telasja Reynolds, Powered by OMDb API
      </p>
      <a
        href="https://github.com/telasjareynolds/movie-maze-frontend"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github icon" className="footer__github" />
      </a>
    </div>
  );
}

export default Footer;
