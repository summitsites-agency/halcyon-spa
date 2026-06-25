import { useState } from 'react';
import { site } from '../data/site.js';
import { treatments } from '../data/treatments.js';
import { validateContact } from '../lib/validateContact.js';
import SectionLabel from './SectionLabel.jsx';
import './Booking.css';

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', treatment: '', date: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function sendForm(data) {
    if (!site.formEndpoint) return false;
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = validateContact(form);
    setErrors(result.errors);
    if (!result.valid) return;

    setStatus('sending');
    const ok = await sendForm(form);
    if (ok) {
      setStatus('sent');
      setForm({ name: '', email: '', treatment: '', date: '', message: '' });
    } else {
      const body =
        `Name: ${form.name}%0D` +
        `Email: ${form.email}%0D` +
        `Treatment: ${form.treatment || 'No preference'}%0D` +
        `Preferred date: ${form.date || 'Flexible'}%0D%0D` +
        `${form.message}`;
      window.location.href = `mailto:${site.contact.email}?subject=Halcyon booking request&body=${body}`;
      setStatus('idle');
    }
  };

  return (
    <section className="pane booking" id="book">
      <div className="booking__inner">
        <div className="booking__intro">
          <SectionLabel index="06">Book</SectionLabel>
          <h2 className="booking__title">Reserve your stillness.</h2>
          <p className="booking__note">Send a request — our front desk confirms within one business day.</p>
          <div className="booking__details">
            <p>{site.contact.address}</p>
            <p>{site.contact.hours}</p>
            <p><a href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>{site.contact.phone}</a></p>
            <p><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
          </div>
        </div>

        <form className="booking__form" onSubmit={onSubmit} noValidate>
          <div className="booking__row">
            <label className="field">
              <span>Name</span>
              <input value={form.name} onChange={update('name')} aria-invalid={!!errors.name} />
              {errors.name && <em className="field__err">{errors.name}</em>}
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" value={form.email} onChange={update('email')} aria-invalid={!!errors.email} />
              {errors.email && <em className="field__err">{errors.email}</em>}
            </label>
          </div>
          <div className="booking__row">
            <label className="field">
              <span>Treatment</span>
              <select value={form.treatment} onChange={update('treatment')}>
                <option value="">No preference</option>
                {treatments.map((t) => <option key={t.id} value={t.name}>{t.name}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Preferred date</span>
              <input type="text" placeholder="e.g. Sat morning" value={form.date} onChange={update('date')} />
            </label>
          </div>
          <label className="field">
            <span>Anything we should know?</span>
            <textarea rows={3} value={form.message} onChange={update('message')} aria-invalid={!!errors.message} />
            {errors.message && <em className="field__err">{errors.message}</em>}
          </label>
          <button className="pill pill--solid" type="submit" disabled={status === 'sending'}>
            {status === 'sent' ? 'Thank you' : status === 'sending' ? 'Sending…' : 'Request booking'}
          </button>
        </form>
      </div>

      <div className="booking__footer">
        © {new Date().getFullYear()} {site.brandFull}. A fictional brand for demonstration.
      </div>
    </section>
  );
}
