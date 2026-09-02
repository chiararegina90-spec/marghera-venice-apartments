export type GuestApartment = 'rossi' | 'dimora-castelli';

export const guestCookieName = (apartment: GuestApartment) =>
  apartment === 'rossi' ? 'mva_guest_rossi' : 'mva_guest_castelli';

export const guestCode = (apartment: GuestApartment) =>
  apartment === 'rossi'
    ? process.env.ROSSI_GUEST_CODE
    : process.env.CASTELLI_GUEST_CODE;

export const normalizeGuestCode = (code: string) => code.trim().toUpperCase();

export async function guestToken(apartment: GuestApartment, code: string) {
  const normalized = normalizeGuestCode(code);
  const bytes = new TextEncoder().encode(`mva-guest:${apartment}:${normalized}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
}

export async function hasValidGuestCookie(
  apartment: GuestApartment,
  cookieValue?: string | null,
) {
  const code = guestCode(apartment);
  if (!code || !cookieValue) return false;
  return cookieValue === (await guestToken(apartment, code));
}
