import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-section">
        <img
          className="profile-image"
          src="/images/mon-square.jpg"
          alt="profile"
        />
        <div className="about-text">
          <h2>a bit about me.</h2>
          <div className="text-container">
            <p>
              I'm a junior developer who decided to leave teaching behind to
              find out how computers use language instead. Soon after I started
              experimenting with HTML, CSS and JavaScript I realised I'd found
              the perfect cognitive outlet with the right balance of logic,
              utility and creativity. It’s been a nonstop sprint ever since and
              I'm excited to keep growing and work on exciting and challenging
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
