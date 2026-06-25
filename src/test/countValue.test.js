import { describe, it, expect } from 'vitest';
import { countValue } from '../lib/countValue.js';

describe('countValue', () => {
  it('returns start at t=0', () => {
    expect(countValue(0, 100, 0)).toBe(0);
  });
  it('returns end at t=1', () => {
    expect(countValue(0, 100, 1)).toBe(100);
  });
  it('eases (output past the linear midpoint at t=0.5)', () => {
    expect(countValue(0, 100, 0.5)).toBeGreaterThan(50);
  });
  it('clamps t below 0 and above 1', () => {
    expect(countValue(0, 100, -1)).toBe(0);
    expect(countValue(0, 100, 2)).toBe(100);
  });
});
