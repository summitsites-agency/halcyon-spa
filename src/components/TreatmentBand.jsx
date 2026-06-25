import Reveal from './Reveal.jsx';

export default function TreatmentBand({ treatment, flip }) {
  return (
    <article className={`treatment ${flip ? 'treatment--flip' : ''}`}>
      <Reveal className="treatment__media">
        <img src={treatment.image} alt={treatment.name} loading="lazy" />
      </Reveal>

      <div className="treatment__body">
        <Reveal as="p" className="treatment__line">{treatment.line}</Reveal>
        <Reveal as="h3" delay={80} className="treatment__name">{treatment.name}</Reveal>
        <Reveal as="p" delay={160} className="treatment__desc">{treatment.descriptor}</Reveal>
        <Reveal delay={240} className="treatment__details">
          {treatment.details.map((d) => (
            <div className="detail" key={d.label}>
              <span className="detail__value">{d.value}<span className="detail__unit">{d.unit}</span></span>
              <span className="detail__label">{d.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </article>
  );
}
