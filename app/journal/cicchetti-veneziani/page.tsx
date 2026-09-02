import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:"Cicchetti veneziani | Journal | Marghera Venice Apartments",
  description:"Non sono tapas, non sono un antipasto e non sono un pasto in miniatura. Sono… cicchetti.",
  alternates:{canonical:'/journal/cicchetti-veneziani',languages:{'it-IT':'/journal/cicchetti-veneziani','en-GB':'/en/journal/cicchetti-veneziani','de-DE':'/de/journal/cicchetti-veneziani','fr-FR':'/fr/journal/cicchetti-veneziani','es-ES':'/es/journal/cicchetti-veneziani','zh-CN':'/zh/journal/cicchetti-veneziani','x-default':'/journal/cicchetti-veneziani'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:"Una tradizione da osteria",text:"I cicchetti appartengono alla cultura dei bàcari e delle osterie veneziane. Sono piccoli bocconi pensati per accompagnare un bicchiere e una pausa, non un antipasto in miniatura con regole precise."},
{title:"Bàcaro e ristorante non sono la stessa cosa",text:"Il bàcaro è un locale informale dove si beve un’ombra di vino o uno Spritz e si scelgono cicchetti dal banco. Il ristorante è un pasto seduti, con tempi e struttura diversi. Entrambe le esperienze valgono la pena, ma non vanno confuse."},
{title:"Cosa puoi trovare sul banco",text:"Baccalà mantecato, sarde in saor, polpette, crostini, folpetti, mozzarella in carrozza, uova, verdure e pesce: l’offerta cambia da locale a locale e spesso anche durante la giornata."},
{title:"Come e quando si mangiano",text:"Uno o due cicchetti possono accompagnare l’aperitivo, una pausa a metà mattina o un piccolo giro tra più bàcari. Con un’ombra di vino o uno Spritz funzionano perfettamente; dopo cinque locali, tecnicamente, potrebbe essere diventata cena. 😄"},
{title:"Allontanati di qualche calle",text:"Cannaregio, San Polo, Santa Croce e Dorsoduro offrono tantissime possibilità. Non serve inseguire soltanto gli indirizzi più famosi intorno a Rialto e San Marco: spesso bastano poche calli per trovare un’atmosfera più piacevole."}
];

const related = [
["Dove mangiare","/dove-mangiare"],
["Lo Spritz veneziano","/journal/spritz-veneziano"],
["Venezia senza far arrabbiare i veneziani","/journal/buone-maniere-a-venezia"]
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-cicchetti.webp" alt="Cicchetti veneziani" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Cicchetti veneziani</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Sapori & tradizioni</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Cicchetti veneziani</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Non sono tapas, non sono un antipasto e non sono un pasto in miniatura. Sono… cicchetti.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Se entrando in un bàcaro sentite ordinare “un’ombra e due cicchetti”, state entrando in una delle abitudini più normali della vita veneziana. Sono piccoli assaggi da banco, nati per accompagnare un bicchiere e una pausa, non per seguire le regole di un pranzo completo.</p>
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
            <p className="mt-4 font-serif text-3xl">Non cercare di tradurre i cicchetti in tapas, finger food o antipasti. Dopo il primo bàcaro capirai perché a Venezia ci basta chiamarli cicchetti.</p>
          </div>
          <div className="mt-7 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Approfondisci</p>
            <p className="mt-3 text-slate-600">Per informazioni soggette a variazioni consulta sempre la fonte ufficiale.</p>
            <Link href="/journal/spritz-veneziano" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Scopri la storia dello Spritz</Link>
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
