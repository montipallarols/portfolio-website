import "./Projects.scss";
import { projects } from "../../components/ProjectsList/ProjectsList";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <div id="projects-section">
        <h2>projects.</h2>
        <div className="project-cards-container">
          <div className="project-cards">
            {projects.map((p, index) => {
              return (
                <a
                  className="card-link"
                  href={p.github}
                  target="_blank"
                  key={index}
                >
                  <ProjectCard
                    class={p.class}
                    title={p.title}
                    content={p.content}
                    image={p.image}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
