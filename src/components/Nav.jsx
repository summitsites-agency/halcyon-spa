import { useState } from 'react';
import { site } from '../data/site.js';
import { useScrolledPast } from '../hooks/useScrolledPast.js';
import PillButton from './PillButton.jsx';
import './Nav.css';

export default function Nav() {
  const scrolled = useScrolledPast(80);
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top">{site.brand}</a>

        <nav className="nav__links" aria-label="Primary">
          {site.navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </nav>

        <div className="nav__cta">
          <PillButton href="#book" variant="outline">Book</PillButton>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__overlay ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
        <nav className="nav__overlay-links" aria-label="Mobile">
          {site.navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <PillButton href="#book" variant="solid">Book</PillButton>
        </nav>
      </div>
    </header>
  );
}
