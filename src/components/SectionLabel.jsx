export default function SectionLabel({ index, children }) {
  return (
    <span className="eyebrow">
      {index ? `${index} — ` : ''}{children}
    </span>
  );
}
