import { gallery } from '../data/treatments.js';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="pane gallery" id="gallery">
      <div className="gallery__strip">
        {gallery.map((g, i) => (
          <figure className={`gphoto ${g.span === 2 ? 'gphoto--wide' : 'gphoto--std'}`} key={i}>
            <img src={g.src} alt={g.alt} loading="lazy" />
          </figure>
        ))}
      </div>
      <div className="gallery__tag">
        <span>05 — Gallery</span>
        <h2>Inside the sanctuary</h2>
      </div>
    </section>
  );
}
