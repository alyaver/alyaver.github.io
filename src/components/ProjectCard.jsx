import { Link } from 'react-router-dom';

export default function ProjectCard({ title = 'Project placeholder', to, technologies = [] }) {
  return (
    <Link className="project-card project-card--link" to={to}>
      <div className="project-card__image">Image</div>
      <div className="project-card__content">
        <h2>{title}</h2>
        <p>Description</p>
        <ul className="project-card__technologies" aria-label="Technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
