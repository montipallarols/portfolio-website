import "./ProjectCard.scss";
import GitHubIcon from "@material-ui/icons/GitHub";

interface Props {
  title: string;
  content: string;
  class: string;
  image: string;
  github: string;
}

export default function ProjectCard(props: Props) {
  return (
    <div className={props.class}>
      <a className="card-link" href={props.github} target="_blank">
        <div className="card-content">
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>
          <p className="card-description">{props.content}</p>
          <img src={props.image} alt="project" />
        </div>
      </a>
    </div>
  );
}

{
  /* <div className={props.class}>
<div className="card-content">
  <div className="card-title">
    <h3>{props.title}</h3>
  </div>
  <p className="card-description">{props.content}</p>
</div>
<div className="card__overlay">
  <div className="overlay__text">
    <img src={props.image} alt="project" />
  </div>
</div>
</div> */
}
