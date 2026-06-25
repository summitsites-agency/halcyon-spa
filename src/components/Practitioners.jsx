import { practitioners } from '../data/treatments.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Practitioners.css';

export default function Practitioners() {
  return (
    <section className="practitioners section" id="practitioners">
      <div className="container">
        <Reveal className="practitioners__head">
          <SectionLabel index="04">Practitioners</SectionLabel>
          <h2 className="practitioners__title">In gentle, expert hands.</h2>
        </Reveal>

        <div className="practitioners__grid">
          {practitioners.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="practitioner">
              <div className="practitioner__media">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <h3 className="practitioner__name">{p.name}</h3>
              <p className="practitioner__role">{p.role}</p>
              <p className="practitioner__specialty">{p.specialty}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
