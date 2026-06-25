export default function PillButton({ href, onClick, variant = 'outline', type = 'button', children }) {
  const className = `pill pill--${variant}`;
  if (href) {
    return <a className={className} href={href}>{children}</a>;
  }
  return <button className={className} type={type} onClick={onClick}>{children}</button>;
}
