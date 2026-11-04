import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-intro" aria-labelledby="home-intro-heading">
        <p className="home-intro__greeting">Hello, I'm</p>
        <h1 id="home-intro-heading">Anton Lyaver</h1>
        <p className="home-intro__role">Computer Science Student</p>
        <p className="home-intro__bio">
          I'm a Computer Science student at California State University, Sacramento, graduating Fall 2026. I enjoy building practical software, with a focus on software development, automation, and solving real-world problems.
        </p>
        <ul className="home-intro__links" aria-label="Profiles">
          <li><a href="https://github.com/alyaver">GitHub</a></li>
        </ul>
      </section>
      <section className="home-projects" aria-labelledby="current-projects-heading">
        <h2 id="current-projects-heading">What I'm Currently Working On</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.to} {...project} headingLevel={3} />
          ))}
        </div>
      </section>
    </div>
  );
}
