import { ArrowIcon } from "./Icons";

function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h3 className="section-label">Projects</h3>
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="period">Project</div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View Project <ArrowIcon />
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Projects;
