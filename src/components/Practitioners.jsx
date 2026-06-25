import { practitioners } from '../data/treatments.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Practitioners.css';

export default function Practitioners() {
  return (
    <section className="pane practitioners" id="practitioners">
      <div className="practitioners__inner">
        <Reveal className="practitioners__head">
          <SectionLabel index="04">The Team</SectionLabel>
          <h2 className="practitioners__title">In gentle, expert hands.</h2>
        </Reveal>

        <div className="practitioners__row">
          {practitioners.map((p, i) => (
            <Reveal as="article" key={p.id} delay={i * 120} className={`pcard pcard--${i % 3}`}>
              <div className="pcard__media"><img src={p.image} alt={p.name} loading="lazy" /></div>
              <h3 className="pcard__name">{p.name}</h3>
              <p className="pcard__role">{p.role}</p>
              <p className="pcard__spec">{p.specialty}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
