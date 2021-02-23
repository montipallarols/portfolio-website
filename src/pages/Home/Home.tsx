import "./Home.scss";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="profile">
          <img
            onMouseOver={(e) =>
              (e.currentTarget.src = "/images/mon-cartoon.png")
            }
            onMouseOut={(e) => (e.currentTarget.src = "/images/mon.png")}
            src="/images/mon.png"
            height="350px"
            alt="profile"
          />
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
        <img src="/images/down-arrow.svg" alt="arrow" height="30px" />
      </div>
      <Projects />
    </div>
  );
}
