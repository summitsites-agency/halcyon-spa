export const site = {
  brand: 'HALCYON',
  brandFull: 'Halcyon Day Spa & Retreat',
  tagline: 'Return to stillness.',
  sub: 'Day Spa & Retreat',
  navLinks: [
    { label: 'The Sanctuary', href: '#sanctuary' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Practitioners', href: '#practitioners' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book', href: '#book' },
  ],
  contact: {
    email: 'hello@halcyonspa.example',
    phone: '+1 (503) 555-0179',
    address: '24 Linden Walk, Pearl District, Portland, OR',
    hours: 'Open daily · 9am – 8pm',
  },
  // Optional Formspree endpoint via env; falls back to mailto when absent.
  formEndpoint: import.meta.env?.VITE_FORM_ENDPOINT || '',
};
