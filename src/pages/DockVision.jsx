import { Link } from 'react-router-dom';

export default function DockVision() {
  return (
    <section>
      <Link to="/projects">Back to projects</Link>
      <h1>DockVision</h1>
      <p>Description</p>
      <h2>Technologies used</h2>
      <p>JavaScript, React, Vite, Node.js, Docker, Python</p>
      <section className="project-card" aria-labelledby="dockvision-live-heading">
        <h2 id="dockvision-live-heading">Live application</h2>
        <p>Coming soon.</p>
      </section>
    </section>
  );
}
