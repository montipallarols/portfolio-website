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
              I'm Montaga, lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <img className="image bottom" src="/images/mon.png" alt="profile" />
        {/* <img className="arrow" src="/images/down-arrow.svg" alt="arrow" /> */}
      </div>
      <Projects />
    </div>
  );
}
