import React, { useEffect, useState } from "react";
import "./Home.scss";
import Projects from "../Projects/Projects";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Home() {
  let [intro, setIntro] = useState<string>("");

  let i = 0;
  let text = "hey.";
  let speed = 400;

  function typeWriter() {
    if (i < text.length) {
      setIntro((intro += text.charAt(i)));
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className="home">
      <div className="profile">
        <img className="image top" src="/images/mon-square.jpg" alt="profile" />
        <div className="profile-text">
          <h2>{intro}</h2>
          <div className="profile-intro">
            <p>I'm Montaga, a Junior Full Stack Developer.</p>
            <a
              href="https://github.com/montipallarols"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> Github
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/montaga-pallarols/"
              className="github"
              target="_blank"
              rel="noreferrer"
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
