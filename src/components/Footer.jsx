import { site } from '../data/site.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__word">{site.brand}</span>
          <p className="footer__tag">{site.tagline}</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          {site.navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="footer__meta">
          <p>{site.contact.address}</p>
          <p>{site.contact.hours}</p>
          <p>{site.contact.phone}</p>
        </div>
      </div>
      <div className="container footer__legal">
        <span>© {new Date().getFullYear()} {site.brandFull}. A fictional brand for demonstration.</span>
      </div>
    </footer>
  );
}
