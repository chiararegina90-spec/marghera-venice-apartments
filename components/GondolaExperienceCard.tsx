import Image from 'next/image';
import Link from 'next/link';
import {gondolaTourContent} from '@/data/gondolaTourContent';
import {localePath,type SiteLang} from '@/lib/i18n';

const cta:Record<SiteLang,string>={
  it:'Scopri l’esperienza',
  en:'Discover the experience',
  de:'Erlebnis entdecken',
  fr:'Découvrir l’expérience',
  es:'Descubrir la experiencia',
  zh:'查看体验',
};

export default function GondolaExperienceCard({lang}:{lang:SiteLang}){
  const card=gondolaTourContent[lang].card;
  return <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
    <Link href={localePath('/guide/gondola-tour-venezia',lang)} className="block">
      <div className="relative h-64 overflow-hidden"><Image src="/images/gondola-tour-venezia-card.jpg" alt={card.alt} fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"/></div>
      <div className="p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{card.subtitle}</p><h2 className="mt-3 font-serif text-3xl text-navy">{card.title}</h2><p className="mt-3 text-slate-600">{card.text}</p><span className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 font-bold text-navy">{cta[lang]}</span></div>
    </Link>
  </article>;
}
