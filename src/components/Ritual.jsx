import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import CountUp from './CountUp.jsx';
import './Ritual.css';

export default function Ritual() {
  return (
    <section className="ritual section" id="ritual">
      <div className="container ritual__inner">
        <Reveal className="ritual__media">
          <img src="/images/ritual.jpg" alt="A therapist preparing warm oils by candlelight" loading="lazy" />
        </Reveal>
        <div className="ritual__body">
          <Reveal><SectionLabel index="03">The Ritual</SectionLabel></Reveal>
          <Reveal as="h2" delay={100} className="ritual__title">Care, measured in attention.</Reveal>
          <Reveal as="p" delay={180} className="ritual__text">
            Every treatment begins long before you do — rooms warmed, oils blended from organic
            botanicals, phones left at the door. Our therapists train for years, and it shows in
            the smallest details: the weight of a hand, the pace of a breath, the quiet.
          </Reveal>
          <Reveal delay={260} className="ritual__stats">
            <div className="ritual__stat">
              <span className="ritual__num"><CountUp to={20} suffix="k+" /></span>
              <span className="ritual__stat-label">Hours of therapist training</span>
            </div>
            <div className="ritual__stat">
              <span className="ritual__num"><CountUp to={98} suffix="%" /></span>
              <span className="ritual__stat-label">Guests who rebook</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
