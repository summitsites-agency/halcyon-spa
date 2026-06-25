import { createContext, useContext } from 'react';

// Holds the active Lenis instance (or null when smooth scroll is disabled,
// e.g. prefers-reduced-motion). Consumers use it for programmatic scrollTo.
export const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);
