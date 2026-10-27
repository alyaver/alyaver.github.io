import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects-grid">
        <ProjectCard title="PlaneFinder" to="/projects/planefinder" />
      </div>
    </section>
  );
}
