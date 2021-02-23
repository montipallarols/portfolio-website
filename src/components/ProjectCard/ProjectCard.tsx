import "./ProjectCard.scss";
import { Card } from "react-bootstrap";

interface Props {
  title: string;
  content: string;
  class: string;
  image: string;
  height: string;
  // tech: Array<string>;
}

export default function ProjectCard(props: Props) {
  return (
    <div className={props.class}>
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <img src={props.image} alt="project" height={props.height} />
        {/* <a href="#">Github</a>
        <a href="#">Website</a> */}
      </div>
    </div>
  );
}

{
  /* <Card className={props.class}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Text>{props.content}</Card.Text>
          <Card.Link href="#">Github</Card.Link>
          <Card.Link href="#">Website</Card.Link>
        </Card.Body>
      </Card> */
}
