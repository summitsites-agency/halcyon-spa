// Signature treatments — rendered as alternating full-width bands.
export const treatments = [
  {
    id: 'stillness-massage',
    name: 'Stillness Massage',
    line: 'Bodywork',
    descriptor:
      'A slow, full-body massage that melts held tension — warm oils, unhurried hands, and complete quiet.',
    image: '/images/treatment-massage.jpg',
    details: [
      { label: 'Duration', value: '60 / 90', unit: 'min' },
      { label: 'From', value: '$140', unit: '' },
    ],
  },
  {
    id: 'bloom-facial',
    name: 'Bloom Facial',
    line: 'Skin Ritual',
    descriptor:
      'A radiance facial with botanical actives, gentle resurfacing, and a restorative facial massage to leave skin luminous.',
    image: '/images/treatment-facial.jpg',
    details: [
      { label: 'Duration', value: '75', unit: 'min' },
      { label: 'From', value: '$165', unit: '' },
    ],
  },
  {
    id: 'hydrotherapy-ritual',
    name: 'Hydrotherapy Ritual',
    line: 'Water & Heat',
    descriptor:
      'A guided circuit through mineral soak, steam, and sauna — designed to reset the nervous system and deepen rest.',
    image: '/images/treatment-hydro.jpg',
    details: [
      { label: 'Duration', value: '120', unit: 'min' },
      { label: 'From', value: '$190', unit: '' },
    ],
  },
];

// Compact list of additional treatments shown beneath the signature bands.
export const additionalTreatments = [
  { name: 'Warm Stone Therapy', meta: '90 min · from $175' },
  { name: 'Aromatherapy Scalp & Neck', meta: '45 min · from $95' },
  { name: 'Sound Bath & Breathwork', meta: '60 min · from $85' },
  { name: 'Couples Retreat Suite', meta: '120 min · from $360' },
  { name: 'Mother-to-Be Massage', meta: '60 min · from $150' },
  { name: 'Express Renewal Facial', meta: '30 min · from $80' },
];

// Practitioner card grid.
export const practitioners = [
  {
    id: 'maren',
    name: 'Maren Vasquez',
    role: 'Lead Massage Therapist',
    specialty: 'Deep tissue · Myofascial release',
    image: '/images/practitioner-maren.jpg',
  },
  {
    id: 'sofia',
    name: 'Sofia Lindqvist',
    role: 'Master Esthetician',
    specialty: 'Botanical facials · Skin health',
    image: '/images/practitioner-sofia.jpg',
  },
  {
    id: 'idris',
    name: 'Idris Calloway',
    role: 'Hydrotherapy & Breath Guide',
    specialty: 'Thermal circuits · Breathwork',
    image: '/images/practitioner-idris.jpg',
  },
];

// Guest testimonials.
export const testimonials = [
  {
    id: 't1',
    quote:
      'I arrived wound tight from a brutal week and left feeling like I had been gently put back together. The quiet alone is worth it.',
    name: 'Elena R.',
    detail: 'Stillness Massage',
  },
  {
    id: 't2',
    quote:
      'The hydrotherapy ritual is the most relaxed I have felt in years. Every detail is considered — the warmth, the scent, the silence.',
    name: 'Marcus T.',
    detail: 'Hydrotherapy Ritual',
  },
  {
    id: 't3',
    quote:
      'My skin has never looked better, but honestly I keep coming back for how calm I feel walking out the door.',
    name: 'Priya N.',
    detail: 'Bloom Facial',
  },
];

// Gallery — type: 'image'. span: grid emphasis (1 | 2).
export const gallery = [
  { type: 'image', src: '/images/gallery-1.jpg', alt: 'Sunlit treatment room with linen draping', span: 2 },
  { type: 'image', src: '/images/gallery-2.jpg', alt: 'Botanical oils and folded towels', span: 1 },
  { type: 'image', src: '/images/gallery-3.jpg', alt: 'Mineral soaking pool', span: 1 },
  { type: 'image', src: '/images/gallery-4.jpg', alt: 'Eucalyptus and soft candlelight', span: 1 },
  { type: 'image', src: '/images/gallery-5.jpg', alt: 'Quiet relaxation lounge', span: 1 },
];
