import { Link } from 'react-router-dom';

export default function PlaneFinder() {
  return (
    <section>
      <Link to="/projects">Back to projects</Link>
      <h1>PlaneFinder</h1>
      <ul>
        <li>Developed a Python desktop application that retrieves real-time aircraft data based on user-defined coordinates and search radius.</li>
        <li>Implemented aircraft filtering and distance-based sorting to identify the three closest qualifying aircraft.</li>
        <li>Integrated the Geoapify API to convert aircraft coordinates into readable geographic locations.</li>
      </ul>
      <h2>Technologies used</h2>
      <section className="project-card" aria-labelledby="planefinder-live-heading">
        <h2 id="planefinder-live-heading">Live application</h2>
        <p>
          Coming soon.
        </p>
      </section>
    </section>
  );
}
