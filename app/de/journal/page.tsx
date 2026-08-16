import type {Metadata} from 'next'; import Link from 'next/link'; import Header from '@/components/Header'; import Footer from '@/components/Footer';
export const metadata:Metadata={title:'Journal | Marghera Venice Apartments',description:'Reisetipps, Veranstaltungen, venezianische Traditionen und praktische Hinweise für einen entspannten Aufenthalt in Venedig und der Lagune.',alternates:{canonical:'/de/journal',languages:{'it-IT':'/journal','en-GB':'/en/journal','de-DE':'/de/journal','fr-FR':'/fr/journal','es-ES':'/es/journal','zh-CN':'/zh/journal','x-default':'/journal'}}}; const items:[string,string][]=[
['carnevale-di-venezia','Karneval in Venedig'],
['festa-del-redentore','Festa del Redentore'],
['natale-capodanno-venezia','Weihnachten & Silvester in Venedig'],
['mostra-del-cinema','Filmfestspiele von Venedig'],
['biennale-di-venezia','Biennale von Venedig'],
['venezia-con-bambini','Venedig mit Kindern'],
['venezia-con-il-cane','Venedig mit Hund'],
['acqua-alta-a-venezia','Acqua alta in Venedig'],
['dove-parcheggiare-venezia','Parken bei einem Besuch in Venedig'],
['spritz-veneziano','Der venezianische Spritz'],
['cicchetti-veneziani','Venezianische Cicchetti'],
['buone-maniere-a-venezia','Venedig respektvoll erleben'],
];
export default function Page(){return <><Header lang="de"/><main className="pt-28 pb-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><h1 className="font-serif text-6xl text-navy">Journal</h1><p className="mt-5 max-w-3xl text-xl text-slate-600">Tipps und Veranstaltungen</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(([slug,title])=><Link key={slug} href={`/de/journal/${slug}`} className="rounded-[2rem] bg-cream p-7"><h2 className="font-serif text-3xl text-navy">{title}</h2><span className="mt-5 inline-block font-bold text-gold">Weiterlesen →</span></Link>)}</div></div></main><Footer lang="de"/></>}