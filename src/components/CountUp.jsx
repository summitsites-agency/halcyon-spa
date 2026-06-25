import { useEffect, useRef, useState } from 'react';
import { countValue } from '../lib/countValue.js';

export default function CountUp({ to, decimals = 0, duration = 1600, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') { setVal(to); return; }

    let raf, start;
    const run = () => {
      const tick = (now) => {
        if (!start) start = now;
        const t = (now - start) / duration;
        setVal(countValue(0, to, t));
        if (t < 1) raf = requestAnimationFrame(tick);
        else setVal(to);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);

  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}
