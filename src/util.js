// modulo that supports negative numbers (so that e.g. -5 % 4 = 3)
export const modulo = (a, n) => ((a % n) + n) % n

export const bounded = (idx, n) => Math.max(0, Math.min(idx, n - 1))
