import { describe, it, expect } from 'vitest';
import {
  treatments,
  additionalTreatments,
  practitioners,
  testimonials,
  gallery,
} from '../data/treatments.js';

describe('treatments data', () => {
  it('has three signature treatments with unique ids', () => {
    expect(treatments).toHaveLength(3);
    expect(new Set(treatments.map((t) => t.id)).size).toBe(3);
  });

  it('every signature treatment has a name, image and detail rows', () => {
    for (const t of treatments) {
      expect(t.name).toBeTruthy();
      expect(t.image).toMatch(/^\/images\//);
      expect(t.details.length).toBeGreaterThan(0);
      for (const d of t.details) {
        expect(d.label).toBeTruthy();
        expect(d.value).toBeTruthy();
      }
    }
  });

  it('lists additional treatments with name and meta', () => {
    expect(additionalTreatments.length).toBeGreaterThan(0);
    for (const a of additionalTreatments) {
      expect(a.name).toBeTruthy();
      expect(a.meta).toBeTruthy();
    }
  });
});

describe('practitioners data', () => {
  it('has unique-id practitioners each with name, role and image', () => {
    expect(practitioners.length).toBeGreaterThan(0);
    expect(new Set(practitioners.map((p) => p.id)).size).toBe(practitioners.length);
    for (const p of practitioners) {
      expect(p.name).toBeTruthy();
      expect(p.role).toBeTruthy();
      expect(p.image).toMatch(/^\/images\//);
    }
  });
});

describe('testimonials data', () => {
  it('has testimonials each with a quote and name', () => {
    expect(testimonials.length).toBeGreaterThan(0);
    for (const t of testimonials) {
      expect(t.quote).toBeTruthy();
      expect(t.name).toBeTruthy();
    }
  });
});

describe('gallery data', () => {
  it('has gallery items pointing at /images with a span', () => {
    expect(gallery.length).toBeGreaterThan(0);
    for (const g of gallery) {
      expect(g.src).toMatch(/^\/images\//);
      expect(g.alt).toBeTruthy();
      expect([1, 2]).toContain(g.span);
    }
  });
});
