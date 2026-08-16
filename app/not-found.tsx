import Link from 'next/link';

export default function NotFound(){
  return <main className="min-h-screen bg-cream px-5 py-24 text-navy">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[.22em] text-gold">Errore 404</p>
      <h1 className="mt-4 font-serif text-5xl font-bold md:text-6xl">Questa pagina non esiste</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-navy/70">Il link potrebbe essere cambiato o non essere più disponibile. Torna alla homepage per continuare a scoprire Marghera Venice Apartments e Venezia.</p>
      <Link href="/" className="mt-9 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Torna alla homepage</Link>
    </div>
  </main>
}
