import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy section" id="sanctuary">
      <div className="container philosophy__inner">
        <Reveal><SectionLabel index="01">The Sanctuary</SectionLabel></Reveal>
        <Reveal as="p" delay={120} className="philosophy__lead">
          Halcyon is a quiet room in a loud world. We built it for the simple, almost
          forgotten act of slowing down — warm water, skilled hands, soft light, and time
          that belongs entirely to you. Step in, exhale, and <em>return to stillness.</em>
        </Reveal>
      </div>
    </section>
  );
}
