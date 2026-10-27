import { Link } from 'react-router-dom';

export default function PlaneFinder() {
  return (
    <section>
      <Link to="/projects">Back to projects</Link>
      <h1>PlaneFinder</h1>
      <p>
        PlaneFinder is a standalone application being brought into this portfolio.
        This page will host its project overview and future live experience.
      </p>
      <h2>Technologies used</h2>
      <p>PlaneFinder application stack: details coming soon.</p>
      <p>This portfolio uses React, React Router, Vite, and GitHub Pages.</p>
      <section className="project-card" aria-labelledby="planefinder-live-heading">
        <h2 id="planefinder-live-heading">Live application</h2>
        <p>
          Coming soon. The PlaneFinder application is currently maintained
          separately and will be integrated in a future phase.
        </p>
      </section>
    </section>
  );
}
