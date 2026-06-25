import { Children, useEffect, useRef, useState } from 'react';
import { site } from '../data/site.js';
import { useLenis } from '../smooth/lenisContext.js';
import './HScroll.css';

const DESKTOP_Q = '(min-width: 861px)';
const REDUCE_Q = '(prefers-reduced-motion: reduce)';

const initEnabled = () =>
  typeof window !== 'undefined' &&
  window.matchMedia(DESKTOP_Q).matches &&
  !window.matchMedia(REDUCE_Q).matches;

// Horizontal "panel" scroller. Vertical page scroll is translated into sideways
// movement of a sticky rail (so native scrolling, scrollbar and accessibility
// are preserved). On mobile / reduced-motion it falls back to a vertical stack.
export default function HScroll({ labels, children }) {
  const panels = Children.toArray(children);
  const count = panels.length;

  const outerRef = useRef(null);
  const railRef = useRef(null);
  const barRef = useRef(null);

  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  const [enabled, setEnabled] = useState(initEnabled);
  const enabledRef = useRef(enabled);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const [open, setOpen] = useState(false);

  const update = () => {
    if (!enabledRef.current) return;
    const outer = outerRef.current, rail = railRef.current, bar = barRef.current;
    if (!outer || !rail) return;
    const len = outer.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-outer.getBoundingClientRect().top, 0), Math.max(len, 0));
    const p = len > 0 ? scrolled / len : 0;
    const maxX = rail.scrollWidth - window.innerWidth;
    rail.style.transform = `translate3d(${-(p * maxX)}px,0,0)`;
    if (bar) bar.style.transform = `scaleX(${p})`;
    const idx = Math.min(count - 1, Math.max(0, Math.round(p * (count - 1))));
    if (idx !== activeRef.current) { activeRef.current = idx; setActive(idx); }
  };

  // Keep refs in sync + react to enable/disable.
  useEffect(() => {
    enabledRef.current = enabled;
    document.body.classList.toggle('hscroll-stacked', !enabled);
    if (!enabled && railRef.current) railRef.current.style.transform = '';
    if (enabled) requestAnimationFrame(update);
    return () => document.body.classList.remove('hscroll-stacked');
  }, [enabled]);

  // Watch viewport + motion preference.
  useEffect(() => {
    const dq = window.matchMedia(DESKTOP_Q);
    const rq = window.matchMedia(REDUCE_Q);
    const on = () => setEnabled(dq.matches && !rq.matches);
    dq.addEventListener('change', on);
    rq.addEventListener('change', on);
    return () => { dq.removeEventListener('change', on); rq.removeEventListener('change', on); };
  }, []);

  // Drive the rail from scroll + resize.
  useEffect(() => {
    let raf;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  const scrollToPanel = (i) => {
    setOpen(false);
    const outer = outerRef.current, rail = railRef.current;
    if (!outer) return;
    if (enabledRef.current) {
      const len = outer.offsetHeight - window.innerHeight;
      const targetY = outer.offsetTop + (count > 1 ? i / (count - 1) : 0) * len;
      if (lenisRef.current) lenisRef.current.scrollTo(targetY);
      else window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else if (rail && rail.children[i]) {
      rail.children[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Arrow-key navigation (horizontal mode).
  useEffect(() => {
    const onKey = (e) => {
      if (!enabledRef.current) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollToPanel(Math.min(count - 1, activeRef.current + 1)); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); scrollToPanel(Math.max(0, activeRef.current - 1)); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  return (
    <>
      <header className="chrome">
        <button className="chrome__brand" onClick={() => scrollToPanel(0)}>{site.brand}</button>
        <div className="chrome__right">
          <button className="chrome__book" onClick={() => scrollToPanel(count - 1)}>Book</button>
          <button
            className="chrome__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`hmenu ${open ? 'is-open' : ''}`} aria-label="Sections" onClick={() => setOpen(false)}>
        <ul>
          {labels.map((l, i) => (
            <li key={l}>
              <button onClick={() => scrollToPanel(i)}>
                <em>{String(i + 1).padStart(2, '0')}</em> {l}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className={`hscroll ${enabled ? 'is-horizontal' : 'is-stacked'}`} ref={outerRef} style={{ '--panels': count }}>
        <div className="hscroll__viewport">
          <div className="hscroll__rail" ref={railRef}>
            {panels.map((p, i) => (
              <div className="panel" key={i}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="hprogress" aria-hidden="true"><span ref={barRef} /></div>

      <nav className="dots" aria-label="Section navigation">
        {labels.map((l, i) => (
          <button
            key={l}
            className={`dots__dot ${active === i ? 'is-active' : ''}`}
            onClick={() => scrollToPanel(i)}
            aria-label={l}
            aria-current={active === i}
          >
            <span className="dots__label">{l}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
