import { useEffect, useRef } from 'react';
import { site } from '../data/site.js';
import './Hero.css';

export default function Hero() {
  const mediaRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (mediaRef.current) {
          mediaRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.06)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__media" ref={mediaRef}>
        <video className="hero__video" autoPlay muted loop playsInline poster="/videos/hero-poster.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__scrim" />

      <div className="hero__content">
        <h1 className="hero__wordmark">{site.brand}</h1>
        <p className="hero__sub">{site.sub}</p>
        <p className="hero__tagline">{site.tagline}</p>
      </div>

      <a className="hero__cue" href="#sanctuary" aria-label="Scroll to content">
        <span className="hero__cue-line" />
      </a>
    </section>
  );
}
