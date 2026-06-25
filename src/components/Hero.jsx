import { site } from '../data/site.js';
import './Hero.css';

export default function Hero() {
  return (
    <section className="pane hero" id="top">
      <div className="hero__media">
        <video className="hero__video" autoPlay muted loop playsInline poster="/videos/hero-poster.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__scrim" />

      <div className="hero__content">
        <p className="hero__eyebrow">Portland · {site.sub}</p>
        <h1 className="hero__wordmark">{site.brand}</h1>
        <p className="hero__tagline">{site.tagline}</p>
      </div>

      <div className="hero__cue" aria-hidden="true">
        <span className="hero__cue-text">Scroll to explore</span>
        <span className="hero__cue-arrow">→</span>
      </div>
    </section>
  );
}
