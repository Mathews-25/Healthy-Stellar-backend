import { randomBytes } from 'crypto';

export function generateMRN(): string {
  const year = new Date().getFullYear();
  const random = randomBytes(4).toString('hex').toUpperCase();
  return `HS-${year}-${random}`;
}
