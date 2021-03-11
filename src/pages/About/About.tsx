import React, { useState, useEffect } from "react";
import "./About.scss";
import { Badge } from "react-bootstrap";

export default function About() {
  let [intro, setIntro] = useState<string>("");

  let i = 0;
  let text = "a bit about me.";

  function typeWriter() {
    if (i < text.length) {
      setIntro((intro += text.charAt(i)));
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className="about">
      <div className="about-section">
        <div className="image-box">
          <img
            className="profile-image"
            src="/images/vietnam.jpg"
            alt="profile"
          />
        </div>
        <div className="content">
          <h2>{intro}</h2>
          <div className="text-container">
            <p>
              I'm a junior developer who decided to swap teaching language for
              learning computer languages instead. Soon after I started
              experimenting with HTML, CSS and JavaScript I was hooked on what
              I'd found to be the perfect cognitive outlet with the right
              balance of logic, utility and creativity. It’s been a nonstop
              sprint ever since and I'm excited to keep growing and give 110%
              every day to work on challenging and meaningful projects.
            </p>

            <div className="tech-skills">
              <Badge pill variant="secondary">
                HTML
              </Badge>{" "}
              <Badge pill variant="secondary">
                CSS
              </Badge>{" "}
              <Badge pill variant="secondary">
                JavaScript
              </Badge>{" "}
              <Badge pill variant="secondary">
                React
              </Badge>{" "}
              <Badge pill variant="secondary">
                Redux
              </Badge>{" "}
              <Badge pill variant="secondary">
                TypeScript
              </Badge>{" "}
              <Badge pill variant="secondary">
                Node.js
              </Badge>{" "}
              <Badge pill variant="secondary">
                Sequelize
              </Badge>{" "}
              <Badge pill variant="secondary">
                PostgreSQL
              </Badge>
            </div>
          </div>
        </div>
        <div className="image-box-2">
          <img
            className="profile-image-2"
            src="/images/vietnam.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}
