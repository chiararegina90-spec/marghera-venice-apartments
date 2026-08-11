import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Footer(){
  return <footer id="contatti" className="bg-navy py-16 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Marghera Venice Apartments" width={58} height={58} className="h-[58px] w-[58px] rounded-full bg-cream object-contain"/>
          <div className="font-serif tracking-widest">MARGHERA<br/><span className="text-xs">VENICE APARTMENTS</span></div>
        </div>
        <p className="mt-5 max-w-sm text-white/70">La tua casa per scoprire Venezia e il Veneto, con parcheggio privato, collegamenti H24 e accoglienza Pet & Family.</p>
      </div>
      <div>
        <h4 className="font-bold text-gold">Pianifica</h4>
        <div className="mt-4 grid gap-2 text-white/70">
          <Link href="/#case">Le nostre case</Link>
          <Link href="/#mappa">Scopri il Veneto</Link>
          <Link href="/#journal">Journal</Link>
          <Link href="/faq">Domande frequenti</Link>
          <Link href="/come-raggiungere-venezia">Come arrivare</Link>
          <Link href="/link-utili">Link utili</Link>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gold">Contatti</h4>
        <div className="mt-4 grid gap-2 text-white/70">
          <a href="tel:+393514462261">+39 351 446 2261</a>
          <a className="break-all" href="mailto:rossiapartmentvenice@gmail.com">rossiapartmentvenice@gmail.com</a>
          <a className="break-all" href="mailto:dimoracastelli22@gmail.com">dimoracastelli22@gmail.com</a>
        </div>
        <p className="mt-6 text-xs font-black uppercase tracking-[.18em] text-gold">Seguici</p>
        <SocialLinks className="mt-3 text-white/80" showWhatsApp compact/>
      </div>
      <div>
        <h4 className="font-bold text-gold">Codici CIN</h4>
        <p className="mt-4 break-all text-sm text-white/70">Rossi Apartment<br/>IT027042C2EDHHAM7Z<br/><br/>Dimora Castelli<br/>IT027042C2YOUCUFM2</p>
      </div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm text-white/50 md:flex-row md:justify-between lg:px-8">
      <span>© 2026 Marghera Venice Apartments</span>
      <span>Privacy Policy · Cookie Policy</span>
    </div>
  </footer>
}