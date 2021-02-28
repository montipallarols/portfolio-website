import "./Home.scss";
import Projects from "../Projects/Projects";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Home() {
  return (
    <div className="home">
      <div className="profile">
        <img className="image top" src="/images/mon-square.jpg" alt="profile" />
        <div className="profile-text">
          <h2>hey.</h2>
          <div className="profile-intro">
            <p>I'm Montaga, a Junior Full Stack Developer.</p>
            <a
              href="https://github.com/montipallarols"
              className="github"
              target="_blank"
            >
              <GitHubIcon /> Github
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/montaga-pallarols/"
              className="github"
              target="_blank"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
        <img
          className="image bottom"
          src="/images/mon-square.jpg"
          alt="profile"
        />
      </div>

      {/* <img className="arrow" src="/images/drawn-arrow.svg" alt="arrow" /> */}

      <Projects />
    </div>
  );
}
