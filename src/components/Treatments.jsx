import { treatments } from '../data/treatments.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Treatments.css';

export default function Treatments() {
  return (
    <section className="pane treatments" id="treatments">
      <div className="treatments__inner">
        <Reveal className="treatments__head">
          <SectionLabel index="02">Treatments</SectionLabel>
          <h2 className="treatments__title">Signature rituals</h2>
          <p className="treatments__sub">Three ways to come back to yourself. Full menu at the front desk.</p>
        </Reveal>

        <div className="treatments__cards">
          {treatments.map((t, i) => (
            <Reveal as="article" key={t.id} delay={i * 100} className="tcard">
              <div className="tcard__media"><img src={t.image} alt={t.name} loading="lazy" /></div>
              <p className="tcard__line">{t.line}</p>
              <h3 className="tcard__name">{t.name}</h3>
              <p className="tcard__desc">{t.descriptor}</p>
              <div className="tcard__meta">
                {t.details.map((d) => (
                  <span className="tcard__meta-item" key={d.label}>
                    <b>{d.value}{d.unit && <em>{d.unit}</em>}</b>
                    <i>{d.label}</i>
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
