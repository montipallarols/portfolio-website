import "./Home.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="profile">
          <img src="/images/mon.png" height="350px" alt="profile" />
          <div className="profile-text">
            <h2>hey.</h2>
            <div className="profile-intro">
              <p>
                I'm Montaga, lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <ExpandMoreIcon />
      </div>
      <Projects />
    </div>
  );
}
