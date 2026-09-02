import Image from 'next/image';
import type {GuestApartment} from '@/lib/guest-auth';

const copy = {
  rossi: {
    name: 'Rossi Apartment',
    subtitle: 'Private Welcome Book · Guida privata per gli ospiti',
  },
  'dimora-castelli': {
    name: 'Dimora Castelli',
    subtitle: 'Private Welcome Book · Guida privata per gli ospiti',
  },
} as const;

export default function GuestAccessGate({
  apartment,
  error,
  configured,
}: {
  apartment: GuestApartment;
  error?: string;
  configured: boolean;
}) {
  const x = copy[apartment];
  return (
    <main className="min-h-screen bg-cream px-5 py-12 text-navy">
      <div className="mx-auto max-w-lg text-center">
        <Image
          src="/images/logo.png"
          alt="Marghera Venice Apartments"
          width={100}
          height={100}
          className="mx-auto rounded-full bg-white shadow-soft"
          priority
        />
        <p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">
          Marghera Venice Apartments
        </p>
        <h1 className="mt-3 font-serif text-5xl">{x.name}</h1>
        <p className="mt-3 text-slate-600">{x.subtitle}</p>

        <section className="mt-8 rounded-[2rem] bg-white p-7 text-left shadow-soft sm:p-9">
          <h2 className="font-serif text-3xl text-navy">Guest access</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Enter the access code provided by your host to open the Welcome Book.
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Inserisci il codice ricevuto dall’host per accedere al Welcome Book.
          </p>

          {!configured ? (
            <p className="mt-6 rounded-2xl bg-cream p-4 text-sm font-semibold text-navy">
              Accesso temporaneamente non configurato. Contatta l’host.
            </p>
          ) : (
            <form action="/api/guest-access" method="post" className="mt-7">
              <input type="hidden" name="apartment" value={apartment} />
              <label htmlFor="guest-code" className="text-sm font-bold text-navy">
                Access code · Codice di accesso
              </label>
              <input
                id="guest-code"
                name="code"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-5 py-4 text-lg font-semibold uppercase tracking-[.08em] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="••••••••••"
              />
              {error === 'invalid' && (
                <p className="mt-3 text-sm font-semibold text-red-700">
                  Codice non corretto · Incorrect access code
                </p>
              )}
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-4 font-bold text-white transition hover:-translate-y-0.5"
              >
                Open Welcome Book
              </button>
            </form>
          )}
        </section>
        <p className="mt-6 text-xs leading-5 text-slate-500">
          This private area is reserved for current guests of Marghera Venice Apartments.
        </p>
      </div>
    </main>
  );
}
