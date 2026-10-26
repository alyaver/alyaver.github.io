import { useState } from 'react';

import './Navbar.css';

export default function Navbar() {
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__brand" aria-label="AL.">
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
        </div>
        <div className="navbar__links" aria-label="Main navigation" />
      </div>
    </header>
  );
}
