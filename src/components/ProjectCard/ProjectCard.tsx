import "./ProjectCard.scss";
import { Card } from "react-bootstrap";

interface Props {
  title: string;
  content: string;
  class: string;
  // tech: Array<string>;
}

export default function ProjectCard(props: Props) {
  return (
    <div className={props.class}>
      <div className="card-content">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        {/* <a href="#">Github</a>
        <a href="#">Website</a> */}
      </div>
    </div>
  );
}

{
  /* <div className={props.class}>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Text>{props.content}</Card.Text>
          <Card.Link href="#">Github</Card.Link>
          <Card.Link href="#">Website</Card.Link>
        </Card.Body>
      </Card>
    </div> */
}
