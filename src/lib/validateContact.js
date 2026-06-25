const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact({ name, email, message } = {}) {
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Please enter your name.';
  if (!email || !email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (!message || !message.trim()) errors.message = 'Please tell us how we can help.';
  return { valid: Object.keys(errors).length === 0, errors };
}
