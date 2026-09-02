import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Biennale Arte Venezia 2026: date, sedi e consigli per la visita',
  description:'Biennale Arte 2026, dal 9 maggio al 22 novembre: Giardini, Arsenale, Forte Marghera e mostre diffuse. Come organizzare la visita.',
  alternates:{canonical:'/journal/biennale-di-venezia',languages:{'it-IT':'/journal/biennale-di-venezia','en-GB':'/en/journal/biennale-di-venezia','de-DE':'/de/journal/biennale-di-venezia','fr-FR':'/fr/journal/biennale-di-venezia','es-ES':'/es/journal/biennale-di-venezia','zh-CN':'/zh/journal/biennale-di-venezia','x-default':'/journal/biennale-di-venezia'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:'Biennale Arte 2026: In Minor Keys',text:'La 61. Esposizione Internazionale d’Arte si svolge dal 9 maggio al 22 novembre 2026. Il progetto In Minor Keys, ideato da Koyo Kouoh, si sviluppa nelle sedi della Biennale e in diversi luoghi della città.'},
{title:'Giardini, Arsenale e Forte Marghera',text:'Le sedi principali comprendono Giardini e Arsenale, a cui si aggiunge Forte Marghera e una rete di partecipazioni nazionali ed eventi collaterali distribuiti in città.'},
{title:'Organizza la visita per zone',text:'Se hai un solo giorno, scegli con attenzione cosa vedere. Se hai più tempo, dedica una giornata alle sedi principali e un’altra alle esposizioni diffuse che ti interessano davvero.'}
];

const related = [
['Mostra del Cinema di Venezia','/journal/mostra-del-cinema'],
['The Venice Glass Week 2026','/journal/venice-glass-week-2026']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-biennale.webp" alt="Biennale di Venezia" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Biennale di Venezia</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Arte & Cultura • 9 maggio – 22 novembre 2026</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Biennale Arte 2026</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Dal 9 maggio al 22 novembre, la 61. Esposizione Internazionale d’Arte porta In Minor Keys tra Giardini, Arsenale, Forte Marghera e tutta Venezia.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">La Biennale porta a Venezia arte, architettura, cinema, danza, musica e teatro. Le grandi esposizioni ai Giardini e all’Arsenale richiedono tempo: è meglio scegliere cosa vedere invece di attraversarle di corsa.</p>
          <div className="mt-14 space-y-12">
            {sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]">
              <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
              <div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div>
            </section>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-[2rem] bg-gold p-8 text-navy">
            <p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p>
            <p className="mt-4 font-serif text-3xl">Non pianificare Biennale + San Marco + Rialto + isole nello stesso giorno. La Biennale merita tempo e Venezia non premia le corse.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni aggiornate</p>
            <p className="mt-3 text-slate-600">Date, programmi, tariffe e condizioni possono cambiare. Per gli elementi variabili consulta sempre la fonte ufficiale prima della visita.</p>
            <a href="https://www.labiennale.org/it/arte/2026" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Biennale Arte 2026 – sito ufficiale ↗</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Continua a esplorare</p>
          <h2 className="mt-3 font-serif text-4xl text-navy">Potrebbe interessarti anche</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}
          </div>
          <div className="mt-10 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div>
        </div>
      </section>
    </article>
  </main><Footer/></>
}
