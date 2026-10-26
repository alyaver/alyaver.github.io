import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__content">
        <Link className="navbar__brand" to="/" aria-label="AL. home">
          {hasLogoError ? (
            <span className="navbar__logo-fallback">AL.</span>
          ) : (
            <img
              className="navbar__logo"
              src="/images/AL.Logo.png"
              alt="AL."
              onError={() => setHasLogoError(true)}
            />
          )}
        </Link>
        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink className="navbar__link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="navbar__link" to="/about">
            About
          </NavLink>
          <span
            className="navbar__link navbar__link--placeholder"
            aria-disabled="true"
            title="Resume coming soon"
          >
            Resume
          </span>
        </nav>
      </div>
    </header>
  );
}
