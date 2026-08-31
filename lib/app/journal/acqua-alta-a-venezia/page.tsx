import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:"Acqua alta a Venezia: cosa sapere | Journal | Marghera Venice Apartments",
  description:"Un fenomeno naturale della laguna da conoscere senza allarmismi: cosa significa, quanto dura e come il MOSE protegge la città.",
  alternates:{canonical:'/journal/acqua-alta-a-venezia',languages:{'it-IT':'/journal/acqua-alta-a-venezia','en-GB':'/en/journal/acqua-alta-a-venezia','de-DE':'/de/journal/acqua-alta-a-venezia','fr-FR':'/fr/journal/acqua-alta-a-venezia','es-ES':'/es/journal/acqua-alta-a-venezia','zh-CN':'/zh/journal/acqua-alta-a-venezia','x-default':'/journal/acqua-alta-a-venezia'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:"Cos’è davvero l’acqua alta",text:"L’innalzamento temporaneo della marea dipende dalla combinazione di livello del mare, vento, pressione atmosferica e condizioni dell’Adriatico. Gli eventi sono normalmente limitati nel tempo e uno stesso livello di marea può produrre effetti molto diversi nei vari punti della città."},
{title:"Perché Piazza San Marco si bagna per prima",text:"Piazza San Marco è una delle zone più basse di Venezia e può iniziare a mostrare gli effetti della marea già a livelli inferiori rispetto ad altre aree. Per questo le fotografie della piazza con l’acqua non significano automaticamente che l’intera città sia allagata."},
{title:"Il sistema MOSE",text:"Dal 2020 Venezia dispone del MOSE, il sistema di barriere mobili installato alle tre bocche di porto della laguna. Quando sono previste maree particolarmente elevate, le paratoie vengono sollevate per separare temporaneamente la laguna dal mare Adriatico. Il sistema viene gestito sulla base delle previsioni e dei criteri operativi, con l’obiettivo di proteggere Venezia dalle maree più importanti e contenere in laguna livelli intorno alla soglia dei 110 centimetri."},
{title:"Come comportarsi durante la visita",text:"Una previsione di acqua alta non significa necessariamente dover rinunciare alla giornata. Controlla livello e orario del picco sul Centro Maree, considera che alcune tratte dei vaporetti possono essere modificate e segui le indicazioni locali. Nei casi necessari usa calzature adeguate e scegli percorsi compatibili con il livello previsto."},
{title:"Le sirene non devono spaventare",text:"Quando è prevista una marea sostenuta, Venezia utilizza un sistema di allertamento sonoro. I segnali comunicano in anticipo i livelli attesi e fanno parte della normale gestione della città."}
];

const related = [
["Come arrivare e muoversi","/come-raggiungere-venezia"],
["Venezia senza far arrabbiare i veneziani","/journal/buone-maniere-a-venezia"]
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-acqua-alta.webp" alt="Acqua alta a Venezia: cosa sapere" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Acqua alta a Venezia: cosa sapere</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Venezia pratica</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Acqua alta a Venezia: cosa sapere</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Un fenomeno naturale della laguna da conoscere senza allarmismi: cosa significa, quanto dura e come il MOSE protegge la città.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">L’acqua alta è un fenomeno naturale, temporaneo e profondamente legato alla vita della laguna. Non significa che tutta Venezia venga sommersa: la città ha quote diverse e le aree più basse, come Piazza San Marco, sono le prime a essere interessate.</p>
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
            <p className="mt-4 font-serif text-3xl">Prima di cambiare i programmi, guarda sempre livello previsto, orario del picco e zone interessate: l’acqua alta è molto più localizzata e temporanea di quanto spesso sembri dalle immagini.</p>
          </div>
          <div className="mt-7 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Approfondisci</p>
            <p className="mt-3 text-slate-600">Per informazioni soggette a variazioni consulta sempre la fonte ufficiale.</p>
            <a href="https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Centro Previsioni e Segnalazioni Maree ↗</a>
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
