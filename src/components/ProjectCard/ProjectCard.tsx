import "./ProjectCard.scss";

interface Props {
  title: string;
  content: string;
  class: string;
  image: string;
}

export default function ProjectCard(props: Props) {
  return (
    <div className={props.class}>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <p className="card-description">{props.content}</p>
        <img src={props.image} alt="project" />
      </div>
    </div>
  );
}
