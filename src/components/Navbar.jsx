import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    </header>
  );
}
