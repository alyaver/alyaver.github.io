import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section className="projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        <ProjectCard
          title="DockVision"
          to="/projects/dockvision"
          technologies={['JavaScript', 'React', 'Vite', 'Node.js', 'Docker', 'Python']}
        />
        <ProjectCard
          title="Flight Tracker"
          to="/projects/planefinder"
          technologies={['Python', 'Tkinter', 'REST APIs', 'Geoapify API', 'adsb.fi API']}
        />
        <ProjectCard
          title="Process Scheduler"
          to="/projects/process-scheduler"
          technologies={['C', 'POSIX Threads (Pthreads)']}
        />
      </div>
    </section>
  );
}
