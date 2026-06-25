import Reveal from './Reveal.jsx';
import PillButton from './PillButton.jsx';
import './CTABand.css';

export default function CTABand() {
  return (
    <section className="cta">
      <img className="cta__bg" src="/images/cta.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="cta__scrim" />
      <Reveal className="cta__content container">
        <h2 className="cta__title">Begin your retreat.</h2>
        <p className="cta__sub">An afternoon to yourself is never wasted.</p>
        <PillButton href="#book" variant="solid">Book a visit</PillButton>
      </Reveal>
    </section>
  );
}
