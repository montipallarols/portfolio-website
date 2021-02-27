import "./Home.scss";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <div className="home">
      <div className="profile">
        <img className="image top" src="/images/mon.png" alt="profile" />
        <div className="profile-text">
          <h2>hey.</h2>
          <div className="profile-intro">
            <p>
              I'm Montaga, a junior developer who decided to leave teaching
              behind to find out how computers use language instead. Soon after
              I started experimenting with HTML, CSS and JavaScript I realised
              I'd found the perfect cognitive outlet with the right balance of
              logic, utility and creativity. It’s been a nonstop sprint ever
              since and I'm excited to keep growing and work on exciting and
              challenging projects.
            </p>
          </div>
        </div>
        <img className="image bottom" src="/images/mon.png" alt="profile" />
      </div>

      <img className="arrow" src="/images/drawn-arrow.svg" alt="arrow" />

      <Projects />
    </div>
  );
}
