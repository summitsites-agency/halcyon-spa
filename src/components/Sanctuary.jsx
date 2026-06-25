import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Sanctuary.css';

export default function Sanctuary() {
  return (
    <section className="pane sanctuary" id="sanctuary">
      <div className="sanctuary__grid">
        <Reveal className="sanctuary__copy">
          <SectionLabel index="01">The Sanctuary</SectionLabel>
          <p className="sanctuary__lead">
            A quiet room in a loud world — built for the almost-forgotten art of slowing down.
          </p>
          <p className="sanctuary__text">
            Warm water, skilled hands, soft light, and time that belongs entirely to you. Leave
            your phone at the door, exhale, and let the noise fall away.
          </p>
        </Reveal>
        <Reveal className="sanctuary__media" delay={150}>
          <img src="/images/ritual.jpg" alt="A calm treatment space at Halcyon" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
