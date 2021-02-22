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
    <div>
      <Card style={{ width: "18rem" }} className={props.class}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Text>{props.content}</Card.Text>
          <Card.Link href="#">Github</Card.Link>
          <Card.Link href="#">Website</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
