import { testimonials } from '../data/treatments.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <Reveal className="testimonials__head">
          <SectionLabel>Kind Words</SectionLabel>
          <h2 className="testimonials__title">What guests carry home.</h2>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.id} delay={i * 100} className="quote">
              <blockquote className="quote__text">“{t.quote}”</blockquote>
              <figcaption className="quote__by">
                <span className="quote__name">{t.name}</span>
                <span className="quote__detail">{t.detail}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
