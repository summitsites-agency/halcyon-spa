import { useEffect, useState } from 'react';
import { testimonials } from '../data/treatments.js';
import SectionLabel from './SectionLabel.jsx';
import './Testimonials.css';

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="pane testimonials" id="testimonials">
      <div className="testimonials__inner">
        <SectionLabel>Kind Words</SectionLabel>
        <blockquote key={t.id} className="testimonials__quote">“{t.quote}”</blockquote>
        <figcaption className="testimonials__by">
          <span className="testimonials__name">{t.name}</span>
          <span className="testimonials__detail">{t.detail}</span>
        </figcaption>
        <div className="testimonials__dots">
          {testimonials.map((q, n) => (
            <button
              key={q.id}
              className={n === i ? 'is-active' : ''}
              onClick={() => setI(n)}
              aria-label={`Quote ${n + 1}`}
              aria-current={n === i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
