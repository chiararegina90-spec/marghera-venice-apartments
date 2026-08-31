import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
const homes:Record<Lang,string>={it:'Home',en:'Home',de:'Startseite',fr:'Accueil',es:'Inicio',zh:'首页'};
const homeHref=(lang:Lang)=>lang==='it'?'/':`/${lang}`;
export default function LegalPage({lang,title,eyebrow,subtitle,sections}:{lang:Lang;title:string;eyebrow:string;subtitle:string;sections:{title:string;text:string}[]}){
  return <><Header lang={lang}/><main className="bg-cream px-5 pb-24 pt-36 text-navy"><article className="mx-auto max-w-4xl"><nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-navy/60"><Link href={homeHref(lang)} className="hover:text-gold">{homes[lang]}</Link><span>›</span><span className="text-gold">{title}</span></nav><p className="text-sm font-black uppercase tracking-[.18em] text-gold">{eyebrow}</p><h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">{title}</h1><p className="mt-5 text-lg leading-8 text-navy/70">{subtitle}</p><div className="mt-10 space-y-9">{sections.map(section=><section key={section.title}><h2 className="font-serif text-2xl font-bold text-navy">{section.title}</h2><p className="mt-3 whitespace-pre-line leading-7 text-navy/75">{section.text}</p></section>)}</div></article></main><Footer lang={lang}/></>;
}
