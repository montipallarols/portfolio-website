import "./Footer.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <div className="copyright">
          <h6>Copyright © {new Date().getFullYear()}</h6>
          <p>Montaga Pallarols</p>
        </div>
        <div className="social">
          <h6>Social</h6>
          <p>
            <a
              href="https://github.com/montipallarols"
              className="github"
              target="_blank"
            >
              <GitHubIcon /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/montaga-pallarols/"
              className="github"
              target="_blank"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </p>
        </div>
        <div className="email">
          <h6>Contact</h6>
          <a href="mailto:webmaster@example.com">montaga.pallarols@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
