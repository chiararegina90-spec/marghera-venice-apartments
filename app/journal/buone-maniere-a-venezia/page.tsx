import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:"Venezia senza far arrabbiare i veneziani | Journal | Marghera Venice Apartments",
  description:"Piccole buone maniere per godersi la città come un ospite, senza dimenticare che qualcuno qui ci vive davvero.",
  alternates:{canonical:'/journal/buone-maniere-a-venezia',languages:{'it-IT':'/journal/buone-maniere-a-venezia','en-GB':'/en/journal/buone-maniere-a-venezia','de-DE':'/de/journal/buone-maniere-a-venezia','fr-FR':'/fr/journal/buone-maniere-a-venezia','es-ES':'/es/journal/buone-maniere-a-venezia','zh-CN':'/zh/journal/buone-maniere-a-venezia','x-default':'/journal/buone-maniere-a-venezia'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:"Le calli sono le nostre strade",text:"Cammina tenendo la destra e, nei passaggi più stretti, procedi in fila indiana. Se devi guardare Maps, fotografare un colombo o decidere dove andare, spostati di lato: fermarsi improvvisamente al centro della calle è il modo più rapido per creare un piccolo ingorgo veneziano."},
{title:"I ponti non sono panchine",text:"Sedersi sui gradini di un ponte per mangiare può sembrare romantico, ma quel ponte è una strada. Non bloccarlo per mangiare, fare foto o aspettare il gruppo: deve poter passare chi porta la spesa, un passeggino, una consegna o semplicemente vuole tornare a casa."},
{title:"Il vaporetto è il nostro autobus",text:"Lascia scendere prima di salire, libera l’uscita dell’imbarcadero, avanza quando il personale lo chiede e togli lo zaino dalle spalle quando il mezzo è affollato. È più comodo per te e molto meno pericoloso per il naso di chi ti sta dietro. 😄"},
{title:"Fotografa tutto, ma fai un passo di lato",text:"Venezia è straordinaria e fotografarla è normale. Prima di fermarti di colpo controlla che dietro non ci siano altre persone: vale soprattutto su ponti, calli strette, uscite dei vaporetti e davanti alla stazione."},
{title:"Occhio anche a borse e telefoni",text:"Nelle zone molto frequentate, sui mezzi affollati e nei grandi nodi di trasporto presta attenzione a portafoglio, telefono e zaino. Venezia è una città sicura da visitare, ma la folla è il terreno ideale per i borseggiatori."},
{title:"Per il bagno, chiedi",text:"Venezia dispone di servizi igienici pubblici e ci sono bar e locali. Se un bambino ha bisogno urgente del bagno, chiedi con gentilezza; quando opportuno, una piccola consumazione è il modo corretto di ricambiare. Calli, sottoporteghi e angoli nascosti non sono toilette."},
{title:"Rifiuti, cani e canali",text:"Se non vedi subito un cestino, tieni la spazzatura con te finché ne trovi uno. Le deiezioni dei cani vanno sempre raccolte. E no: i canali non sono piscine, ma vere vie di comunicazione percorse da vaporetti, taxi, barche da lavoro e mezzi di emergenza."},
{title:"La regola più semplice",text:"Ricordati che qualcuno ci vive. Quella calle da fotografare è la strada di casa di qualcuno e quel vaporetto è l’autobus di qualcuno. Goditi Venezia, perdendoti e fotografandola quanto vuoi: lascia soltanto un po’ di spazio a chi non è in vacanza."}
];

const related = [
["Venezia con il cane","/journal/venezia-con-il-cane"],
["Come arrivare e muoversi","/come-raggiungere-venezia"]
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-buone-maniere.webp" alt="Venezia senza far arrabbiare i veneziani" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Venezia senza far arrabbiare i veneziani</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Vivere Venezia</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venezia senza far arrabbiare i veneziani</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Piccole buone maniere per godersi la città come un ospite, senza dimenticare che qualcuno qui ci vive davvero.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Venezia ha uno strano effetto sui visitatori: si guarda in alto, ci si ferma all’improvviso per una fotografia e per qualche minuto si dimentica che quelle calli sono vere strade. È comprensibile. Bastano però poche attenzioni per vivere la città meglio e lasciare spazio anche a chi non è in vacanza.</p>
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
            <p className="mt-4 font-serif text-3xl">Se senti una colorita espressione veneziana alle tue spalle, controlla prima di tutto di non esserti fermato esattamente in mezzo alla calle. 😄</p>
          </div>
          <div className="mt-7 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Approfondisci</p>
            <p className="mt-3 text-slate-600">Per informazioni soggette a variazioni consulta sempre la fonte ufficiale.</p>
            <a href="https://www.comune.venezia.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Comune di Venezia – regole per una città rispettata ↗</a>
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
