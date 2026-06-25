import { describe, it, expect } from 'vitest';
import { validateContact } from '../lib/validateContact.js';

describe('validateContact', () => {
  const ok = { name: 'Ada', email: 'ada@example.com', treatment: 'Bloom Facial', message: 'Looking forward to it.' };

  it('passes a fully valid submission', () => {
    expect(validateContact(ok)).toEqual({ valid: true, errors: {} });
  });

  it('requires name, email, message', () => {
    const r = validateContact({ name: '', email: '', treatment: '', message: '' });
    expect(r.valid).toBe(false);
    expect(r.errors.name).toBeTruthy();
    expect(r.errors.email).toBeTruthy();
    expect(r.errors.message).toBeTruthy();
  });

  it('rejects a malformed email', () => {
    const r = validateContact({ ...ok, email: 'not-an-email' });
    expect(r.valid).toBe(false);
    expect(r.errors.email).toBeTruthy();
  });

  it('treats treatment as optional', () => {
    const r = validateContact({ ...ok, treatment: '' });
    expect(r.valid).toBe(true);
  });
});
