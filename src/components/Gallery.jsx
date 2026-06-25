import { gallery } from '../data/treatments.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <Reveal className="gallery__head">
          <SectionLabel index="05">Gallery</SectionLabel>
          <h2 className="gallery__title">Inside the sanctuary.</h2>
        </Reveal>
        <div className="gallery__grid">
          {gallery.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className={`gallery__item span-${item.span}`}>
              {item.type === 'video' ? (
                <video autoPlay muted loop playsInline poster={item.poster} aria-label={item.alt}>
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
