import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section className="projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.to} {...project} />
        ))}
      </div>
    </section>
  );
}
