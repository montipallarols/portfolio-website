import "./Projects.scss";
import React, { useState, useEffect } from "react";
import { projects } from "../../components/ProjectsList/ProjectsList";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  let [projectsTitle, setProjectsTitle] = useState<string>("");

  let i = 0;
  let text = "projects.";

  function typeWriter() {
    if (i < text.length) {
      setProjectsTitle((projectsTitle += text.charAt(i)));
      i++;
      setTimeout(typeWriter, 200);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);
  return (
    <div className="projects-section">
      <div id="projects">
        <h2>{projectsTitle}</h2>
        <div className="project-cards-container">
          <div className="project-cards">
            {projects.map((p, index) => {
              return (
                <ProjectCard
                  class={p.class}
                  github={p.github}
                  title={p.title}
                  content={p.content}
                  image={p.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
