// easeOutCubic interpolation, clamped to [0,1]
export function countValue(start, end, t) {
  const c = Math.min(1, Math.max(0, t));
  const eased = 1 - Math.pow(1 - c, 3);
  return start + (end - start) * eased;
}
