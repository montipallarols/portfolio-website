import "./Projects.scss";
import { projects } from "../../components/ProjectCard/ProjectsList";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-section">
        <h2>projects.</h2>
        <div className="project-cards">
          {projects.map((p) => {
            return (
              <ProjectCard
                class={p.class}
                title={p.title}
                content={p.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
