import { Link } from 'react-router-dom';

export default function ProjectCard({ title = 'Project placeholder', description = 'Description', to, technologies = [], headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;

  return (
    <Link className="project-card project-card--link" to={to}>
      <div className="project-card__content">
        <Heading>{title}</Heading>
        <p>{description}</p>
        <ul className="project-card__technologies" aria-label="Technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
