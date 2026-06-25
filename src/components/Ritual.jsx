import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import CountUp from './CountUp.jsx';
import './Ritual.css';

export default function Ritual() {
  return (
    <section className="pane ritual" id="ritual">
      <div className="ritual__inner">
        <Reveal className="ritual__head">
          <SectionLabel index="03">The Ritual</SectionLabel>
          <h2 className="ritual__title">Care, measured in attention.</h2>
          <p className="ritual__text">
            Rooms warmed before you arrive. Oils blended from organic botanicals. Therapists who
            train for years — and it shows in the smallest details.
          </p>
        </Reveal>

        <div className="ritual__stats">
          <Reveal className="ritual__stat">
            <span className="ritual__num"><CountUp to={20} suffix="k+" /></span>
            <span className="ritual__label">Hours of therapist training</span>
          </Reveal>
          <Reveal className="ritual__stat" delay={120}>
            <span className="ritual__num"><CountUp to={98} suffix="%" /></span>
            <span className="ritual__label">Guests who rebook</span>
          </Reveal>
          <Reveal className="ritual__stat" delay={240}>
            <span className="ritual__num"><CountUp to={12} /></span>
            <span className="ritual__label">Signature treatments</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
