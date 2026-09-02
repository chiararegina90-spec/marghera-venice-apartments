import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:"Lo Spritz veneziano | Journal | Marghera Venice Apartments",
  description:"Per il resto del mondo è un cocktail. Per noi veneziani è semplicemente l’aperitivo.",
  alternates:{canonical:'/journal/spritz-veneziano',languages:{'it-IT':'/journal/spritz-veneziano','en-GB':'/en/journal/spritz-veneziano','de-DE':'/de/journal/spritz-veneziano','fr-FR':'/fr/journal/spritz-veneziano','es-ES':'/es/journal/spritz-veneziano','zh-CN':'/zh/journal/spritz-veneziano','x-default':'/journal/spritz-veneziano'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:"Spritz e aperitivo non sono sinonimi",text:"Lo Spritz è il bicchiere. L’aperitivo è il momento: una pausa prima di cena, una chiacchiera, qualche cicchetto e magari un secondo locale. È questa dimensione sociale, più del cocktail in sé, a renderlo parte della quotidianità veneziana."},
{title:"Da dove arriva",text:"Il nome viene generalmente collegato al verbo tedesco spritzen, “spruzzare”, e al periodo della presenza austriaca nel Veneto, quando il vino locale veniva alleggerito con acqua. Nel tempo l’abitudine si è evoluta fino allo Spritz moderno."},
{title:"Aperol, Select, Campari o Cynar?",text:"Non esiste una sola versione veneziana: Aperol è più morbido e agrumato, Select è fortemente legato alla tradizione locale, Campari è più deciso e Cynar più erbaceo. A Venezia sentirsi chiedere “con cosa lo vuoi?” fa parte del rito."},
{title:"Spritz e cicchetti",text:"Lo Spritz si accompagna naturalmente ai cicchetti: piccoli assaggi da banco scelti in base a ciò che il bàcaro ha preparato. Un bicchiere, uno o due cicchetti e poi si continua la passeggiata."},
{title:"Dove provarlo",text:"Puoi scegliere un bàcaro di quartiere oppure un locale più noto come Terrazza Aperol in Campo Santo Stefano. Nella pagina Dove mangiare trovi una selezione di indirizzi tra Marghera e Venezia."}
];

const related = [
["Dove mangiare","/dove-mangiare"],
["Cicchetti veneziani","/journal/cicchetti-veneziani"],
["Scopri Venezia","/scopri-venezia"]
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-spritz.webp" alt="Lo Spritz veneziano" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Lo Spritz veneziano</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Sapori & tradizioni</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Lo Spritz veneziano</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Per il resto del mondo è un cocktail. Per noi veneziani è semplicemente l’aperitivo.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">A Venezia lo Spritz non è qualcosa da ordinare soltanto nelle occasioni speciali. È il bicchiere dell’aperitivo: quello che accompagna una chiacchiera, una sosta al bàcaro e, quasi inevitabilmente, qualche cicchetto.</p>
          <div className="mt-12 space-y-10">
            {sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]">
              <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
              <div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div>
            </section>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-[2rem] bg-gold p-8 text-navy">
            <p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p>
            <p className="mt-4 font-serif text-3xl">Se fuori Venezia vi chiedono una cifra da cena per uno Spritz fatto male, sappiate che un veneziano da qualche parte sta soffrendo insieme a voi. 😄</p>
          </div>
          <div className="mt-7 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Approfondisci</p>
            <p className="mt-3 text-slate-600">Per informazioni soggette a variazioni consulta sempre la fonte ufficiale.</p>
            <a href="https://terrazza.aperol.com/it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Terrazza Aperol Venezia ↗</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Continua a esplorare</p>
          <h2 className="mt-3 font-serif text-4xl text-navy">Potrebbe interessarti anche</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {related.map(([label,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{label} <span className="text-gold">→</span></Link>)}
          </div>
          <div className="mt-10 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div>
        </div>
      </section>
    </article>
  </main><Footer/></>
}
