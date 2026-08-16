import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound(){
  return <><Header/><main className="bg-cream px-5 pb-24 pt-40 text-navy"><section className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.22em] text-gold">404</p><h1 className="mt-4 font-serif text-5xl font-bold md:text-6xl">Questa pagina non c’è.</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-navy/70">Il collegamento potrebbe essere cambiato o la pagina potrebbe non essere disponibile. Puoi tornare alla home e continuare da lì.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Torna alla home</Link></section></main><Footer/></>;
}
