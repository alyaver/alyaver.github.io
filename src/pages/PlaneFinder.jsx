import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlaneFinder.css';

const fields = [
  { name: 'latitude', label: 'Latitude', min: -90, max: 90 },
  { name: 'longitude', label: 'Longitude', min: -180, max: 180 },
  { name: 'radius', label: 'Search radius (nautical miles)', min: 0, max: 250 },
];

export default function PlaneFinder() {
  const [latitude, setLatitude] = useState('38.72793');
  const [longitude, setLongitude] = useState('-121.14517');
  const [radius, setRadius] = useState('50');
  const [aircraftResults, setAircraftResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchRequested, setSearchRequested] = useState(false);
  const values = { latitude, longitude, radius };
  const setters = { latitude: setLatitude, longitude: setLongitude, radius: setRadius };

  function handleSearch(event) {
    event.preventDefault();
    setError(null);
    setSearchRequested(false);
    setAircraftResults([]);
    setLoading(false);

    for (const field of fields) {
      const value = Number(values[field.name]);
      if (values[field.name].trim() === '' || !Number.isFinite(value) ||
          value < field.min || value > field.max || (field.name === 'radius' && value === 0)) {
        setError({
          field: field.name,
          message: field.name === 'radius'
            ? 'Search radius must be greater than 0 and no more than 250 nautical miles.'
            : `${field.label} must be between ${field.min} and ${field.max}.`,
        });
        event.currentTarget.elements.namedItem(field.name).focus();
        return;
      }
    }

    // Future API integration belongs here: use the validated numeric inputs,
    // manage loading/error, and store the three closest qualifying aircraft.
    setSearchRequested(true);
  }

  return (
    <section className="plane-finder">
      <Link to="/projects">Back to projects</Link>
      <header className="plane-finder__header">
        <h1>Plane Finder</h1>
        <a className="project-card__github" href="https://github.com/alyaver/planeFinder"
          target="_blank" rel="noopener noreferrer"
          aria-label="Plane Finder GitHub repository (opens in a new tab)">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M12 .297C5.37.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </header>
      <p className="plane-finder__description">Explore nearby aircraft in real time using a location and search radius of your choice.</p>
      <section className="project-card plane-finder__panel" aria-labelledby="aircraft-search-heading">
        <h2 id="aircraft-search-heading">Find nearby aircraft</h2>
        <form onSubmit={handleSearch} noValidate aria-busy={loading}>
          <div className="plane-finder__fields">
            {fields.map((field) => (
              <div className={`plane-finder__field plane-finder__field--${field.name}`} key={field.name}>
                <label htmlFor={`aircraft-${field.name}`}>{field.label}</label>
                <input id={`aircraft-${field.name}`} name={field.name} type="number" step="any"
                  min={field.min} max={field.max} required value={values[field.name]}
                  aria-invalid={error?.field === field.name}
                  aria-describedby={error?.field === field.name ? 'aircraft-search-error' : undefined}
                  onChange={(event) => {
                    setters[field.name](event.target.value);
                    setError(null);
                    setSearchRequested(false);
                  }} />
              </div>
            ))}
          </div>
          {error && <p id="aircraft-search-error" className="plane-finder__error" role="alert">{error.message}</p>}
          <button type="submit" disabled={loading}>{loading ? 'Finding aircraft…' : 'Find aircraft'}</button>
        </form>
        <section className="plane-finder__results" aria-label="Aircraft results" aria-live="polite" aria-busy={loading}>
          {loading ? <p>Searching for nearby aircraft…</p> : aircraftResults.length > 0 ? (
            <ul>
              {aircraftResults.slice(0, 3).map((aircraft) => (
                <li key={aircraft.id}>
                  <h3>{aircraft.flightIdentifier || 'Unknown flight'}</h3>
                  {aircraft.description && <p>{aircraft.description}</p>}
                  <dl>
                    <div><dt>Altitude</dt><dd>{aircraft.altitudeFeet == null ? 'Unavailable' : `${aircraft.altitudeFeet} ft`}</dd></div>
                    <div><dt>Distance</dt><dd>{aircraft.distanceNauticalMiles == null ? 'Unavailable' : `${aircraft.distanceNauticalMiles} nautical miles`}</dd></div>
                    {aircraft.location && <div><dt>Location</dt><dd>{aircraft.location}</dd></div>}
                  </dl>
                </li>
              ))}
            </ul>
          ) : <p>{searchRequested
            ? 'Live aircraft search is not connected yet. No search has been performed.'
            : 'Enter a location and search radius to find nearby aircraft.'}</p>}
        </section>
      </section>
    </section>
  );
}
