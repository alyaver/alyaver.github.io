import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  );
}
