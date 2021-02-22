import "./Projects.scss";
import { projects } from "../../components/ProjectCard/ProjectsList";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-section">
        <h2>projects.</h2>
        {projects.map((p) => {
          return p.title;
        })}
      </div>
    </div>
  );
}
