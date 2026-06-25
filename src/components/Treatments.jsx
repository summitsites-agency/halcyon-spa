import { treatments, additionalTreatments } from '../data/treatments.js';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import TreatmentBand from './TreatmentBand.jsx';
import './Treatments.css';

export default function Treatments() {
  return (
    <section className="treatments section" id="treatments">
      <div className="container">
        <Reveal className="treatments__head">
          <SectionLabel index="02">Treatments</SectionLabel>
          <h2 className="treatments__title">Signature rituals, unhurried.</h2>
        </Reveal>
      </div>

      <div className="container treatments__bands">
        {treatments.map((t, i) => (
          <TreatmentBand key={t.id} treatment={t} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="container">
        <Reveal className="treatments__more">
          <h3 className="treatments__more-title">Also on the menu</h3>
          <ul className="treatments__list">
            {additionalTreatments.map((a) => (
              <li className="treatments__list-item" key={a.name}>
                <span className="treatments__list-name">{a.name}</span>
                <span className="treatments__list-meta">{a.meta}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
