import Link from 'next/link';
import type {CultureLang} from '@/data/culturePlaces';
import {localePath} from '@/lib/i18n';

const content={
  "it": {
    "eyebrow": "FOCUS · FORTE MARGHERA",
    "heading": "Quattro modi per scoprire il Forte",
    "cards": [
      [
        "🏰",
        "La fortezza",
        "Bastioni, casermette e ponti raccontano il ruolo strategico dell'accesso alla laguna e la trasformazione dell'antico borgo di Marghera."
      ],
      [
        "🌿",
        "Il parco e i canali",
        "Una passeggiata tra verde, corsi d'acqua e architetture militari: una tappa diversa dalle calli, adatta anche a un itinerario con bambini."
      ],
      [
        "🎨",
        "Arte contemporanea",
        "Casermetta 9 ospita mostre e progetti MUVE, mentre altre attività culturali si alternano negli spazi del complesso."
      ],
      [
        "🚊",
        "Arrivare senza stress",
        "Tram T1 per San Marco–Forte Marghera; dalla stazione di Mestre sono indicate le linee 15 e 43. Ci sono anche percorsi ciclabili e parcheggi vicini."
      ]
    ],
    "detailTitle": "Da cosa nasce cosa: la mostra in Casermetta 9",
    "detailText": "Dal dicembre 2026 al 9 maggio 2027, la mostra degli Atelier 2025–26 riunisce le ricerche di 28 giovani artisti. Le comunicazioni ufficiali MUVE riportano come data iniziale sia il 3 sia il 4 dicembre: verifica l'inaugurazione e gli orari sul sito organizzatore.",
    "detailLink": "Scopri la mostra nel Journal",
    "practical": "Casermetta 9: ingresso gratuito; da ottobre a marzo, giovedì–domenica 12:00–16:00, secondo gli orari MUVE. Il caffè osserva regole proprie. Il Forte è un parco pubblico: non applicare gli orari della Casermetta all'intera area.",
    "official": "Orari e accesso Casermetta 9",
    "route": "Indicazioni e trasporti",
    "credit": "Foto: Wikimedia Commons · Álvaro de la Paz Franco · CC0 1.0."
  },
  "en": {
    "eyebrow": "DISCOVER · FORTE MARGHERA",
    "heading": "Four ways to experience the fort",
    "cards": [
      [
        "🏰",
        "The fortress",
        "Defensive walls, barracks and bridges tell the story of a strategic approach to the lagoon and the transformation of old Marghera."
      ],
      [
        "🌿",
        "Park and waterways",
        "Walk among trees, canals and historic military buildings, away from the crowded streets of central Venice."
      ],
      [
        "🎨",
        "Contemporary art",
        "Casermetta 9 hosts MUVE exhibitions and projects, while other cultural activities use spaces around the fort."
      ],
      [
        "🚊",
        "Getting here",
        "Tram T1 to San Marco–Forte Marghera; buses 15 and 43 from Mestre station. Cycling routes and nearby parking are also available."
      ]
    ],
    "detailTitle": "Da cosa nasce cosa at Casermetta 9",
    "detailText": "From December 2026 to 9 May 2027, the Atelier 2025–26 exhibition brings together 28 young artists. Official MUVE pages differ between 3 and 4 December for the start date: check the opening day and hours with the organiser.",
    "detailLink": "Explore the exhibition in our Journal",
    "practical": "Casermetta 9 has free admission; MUVE lists Thu–Sun, 12:00–16:00 from October to March. The café follows a separate schedule. The fort is a public park; these indoor hours do not apply to the entire site.",
    "official": "Casermetta 9 opening hours",
    "route": "Directions and transport",
    "credit": "Photo: Wikimedia Commons · Álvaro de la Paz Franco · CC0 1.0."
  },
  "de": {
    "eyebrow": "ENTDECKEN · FORTE MARGHERA",
    "heading": "Vier Seiten von Forte Marghera",
    "cards": [
      [
        "🏰",
        "Die Festung",
        "Befestigungen, Kasernen und Brücken erzählen von der strategischen Lage am Zugang zur Lagune und dem früheren Ort Marghera."
      ],
      [
        "🌿",
        "Park und Wasserläufe",
        "Spazieren Sie zwischen Bäumen, Kanälen und historischen Militärgebäuden – ein ruhiger Kontrast zur Altstadt."
      ],
      [
        "🎨",
        "Zeitgenössische Kunst",
        "In der Casermetta 9 zeigt MUVE Ausstellungen und Projekte; weitere kulturelle Angebote nutzen die Anlage."
      ],
      [
        "🚊",
        "Anreise",
        "Straßenbahn T1 bis San Marco–Forte Marghera; vom Bahnhof Mestre fahren die Buslinien 15 und 43. Radwege und Parkplätze liegen in der Nähe."
      ]
    ],
    "detailTitle": "Da cosa nasce cosa in der Casermetta 9",
    "detailText": "Von Dezember 2026 bis 9. Mai 2027 zeigt die Atelier-Ausstellung 2025–26 Werke von 28 jungen Kunstschaffenden. MUVE nennt in unterschiedlichen offiziellen Seiten den 3. bzw. 4. Dezember als Beginn; Eröffnung und Öffnungszeiten bitte vorab prüfen.",
    "detailLink": "Mehr zur Ausstellung im Journal",
    "practical": "Die Casermetta 9 ist kostenlos zugänglich; MUVE nennt von Oktober bis März Do–So, 12:00–16:00. Für das Café gelten eigene Zeiten. Die Kasernetten-Zeiten gelten nicht für den gesamten öffentlichen Park.",
    "official": "Öffnungszeiten Casermetta 9",
    "route": "Anreise und Verkehr",
    "credit": "Foto: Wikimedia Commons · Álvaro de la Paz Franco · CC0 1.0."
  },
  "fr": {
    "eyebrow": "DÉCOUVRIR · FORTE MARGHERA",
    "heading": "Quatre façons de découvrir le fort",
    "cards": [
      [
        "🏰",
        "La forteresse",
        "Remparts, casernes et ponts racontent le rôle stratégique de l'accès à la lagune et la transformation de l'ancien village de Marghera."
      ],
      [
        "🌿",
        "Parc et canaux",
        "Promenez-vous entre arbres, canaux et bâtiments militaires historiques, loin de l'agitation du centre de Venise."
      ],
      [
        "🎨",
        "Art contemporain",
        "La Casermetta 9 accueille des expositions et projets MUVE ; d'autres espaces proposent des activités culturelles."
      ],
      [
        "🚊",
        "Venir facilement",
        "Tram T1 jusqu'à San Marco–Forte Marghera ; bus 15 et 43 depuis la gare de Mestre. Pistes cyclables et parkings à proximité."
      ]
    ],
    "detailTitle": "Da cosa nasce cosa à la Casermetta 9",
    "detailText": "De décembre 2026 au 9 mai 2027, l'exposition Atelier 2025–26 réunit 28 jeunes artistes. Les pages officielles MUVE indiquent des dates de début différentes (3 et 4 décembre) : vérifiez l'ouverture exacte auprès de l'organisateur.",
    "detailLink": "Découvrir l'exposition dans le Journal",
    "practical": "Entrée gratuite à la Casermetta 9 ; selon MUVE, d'octobre à mars : jeudi–dimanche, 12 h–16 h. Le café suit ses propres horaires. Ces horaires intérieurs ne s'appliquent pas à tout le parc public.",
    "official": "Horaires de Casermetta 9",
    "route": "Accès et transports",
    "credit": "Photo : Wikimedia Commons · Álvaro de la Paz Franco · CC0 1.0."
  },
  "es": {
    "eyebrow": "DESCUBRIR · FORTE MARGHERA",
    "heading": "Cuatro formas de conocer la fortaleza",
    "cards": [
      [
        "🏰",
        "La fortaleza",
        "Murallas, cuarteles y puentes cuentan la historia del acceso estratégico a la laguna y la transformación del antiguo poblado de Marghera."
      ],
      [
        "🌿",
        "Parque y canales",
        "Pasea entre árboles, canales y arquitectura militar histórica, lejos del bullicio del centro de Venecia."
      ],
      [
        "🎨",
        "Arte contemporáneo",
        "Casermetta 9 alberga exposiciones y proyectos de MUVE; otros espacios acogen actividades culturales."
      ],
      [
        "🚊",
        "Cómo llegar",
        "Tranvía T1 hasta San Marco–Forte Marghera; autobuses 15 y 43 desde la estación de Mestre. También hay carriles bici y aparcamientos cercanos."
      ]
    ],
    "detailTitle": "Da cosa nasce cosa en Casermetta 9",
    "detailText": "De diciembre de 2026 al 9 de mayo de 2027, la exposición Atelier 2025–26 reúne a 28 jóvenes artistas. Las páginas oficiales MUVE señalan fechas de inicio diferentes, 3 y 4 de diciembre: comprueba la apertura y los horarios exactos.",
    "detailLink": "Conoce la exposición en el Journal",
    "practical": "La entrada a Casermetta 9 es gratuita; MUVE indica de octubre a marzo, jueves–domingo, 12:00–16:00. La cafetería tiene horarios propios. El horario interior no corresponde al de todo el parque público.",
    "official": "Horarios de Casermetta 9",
    "route": "Cómo llegar y transporte",
    "credit": "Foto: Wikimedia Commons · Álvaro de la Paz Franco · CC0 1.0."
  },
  "zh": {
    "eyebrow": "探索 · FORTE MARGHERA",
    "heading": "从四个角度认识 Forte Marghera",
    "cards": [
      [
        "🏰",
        "历史要塞",
        "防御工事、营房和小桥讲述这处潟湖入口的重要军事位置，以及古老 Marghera 村落的历史。"
      ],
      [
        "🌿",
        "公园与水道",
        "在绿树、护城水道和历史建筑之间漫步，体验不同于威尼斯岛城热门街区的宁静。"
      ],
      [
        "🎨",
        "当代艺术",
        "Casermetta 9 举办 MUVE 展览与项目，堡垒其他场所也会安排不同的文化活动。"
      ],
      [
        "🚊",
        "便捷到达",
        "T1 有轨电车至 San Marco–Forte Marghera；从 Mestre 火车站可乘15或43路公交。附近亦有骑行路线和停车区。"
      ]
    ],
    "detailTitle": "Casermetta 9 的《Da cosa nasce cosa》展览",
    "detailText": "这场 Atelier 2025–26 展览汇集28位年轻艺术家的创作，展期从2026年12月至2027年5月9日。MUVE 的不同官方网页分别标注12月3日或4日开幕，出行前请向主办方确认确切日期及时间。",
    "detailLink": "在旅行日志中了解展览",
    "practical": "Casermetta 9 免费入场；MUVE 公布10月至3月每周四至周日12:00–16:00开放。咖啡厅时间另行规定。上述室内时间不代表整个公共公园的开放时间。",
    "official": "Casermetta 9 官方开放信息",
    "route": "交通与到达方式",
    "credit": "图片：Wikimedia Commons · Álvaro de la Paz Franco · CC0 1.0。"
  }
} satisfies Record<CultureLang,{eyebrow:string;heading:string;cards:[string,string,string][];detailTitle:string;detailText:string;detailLink:string;practical:string;official:string;route:string;credit:string}>;

export default function ForteMargheraHighlights({lang}:{lang:CultureLang}){
 const t=content[lang];
 return <section className="mt-8" aria-label={t.heading}>
  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
   <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{t.eyebrow}</p>
   <h2 className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">{t.heading}</h2>
   <div className="mt-6 grid gap-4 sm:grid-cols-2">
    {t.cards.map(([emoji,title,description])=><div key={title} className="rounded-2xl border border-[#e9e3d8] bg-cream p-5 sm:p-6">
     <span aria-hidden="true" className="text-3xl">{emoji}</span>
     <h3 className="mt-3 font-serif text-2xl text-navy">{title}</h3>
     <p className="mt-3 leading-7 text-slate-700">{description}</p>
    </div>)}
   </div>
  </div>
  <div className="mt-5 rounded-[1.75rem] border border-gold/35 bg-[#fff9eb] p-6 sm:p-8">
   <p className="text-xs font-black uppercase tracking-[.2em] text-gold">ART / EXHIBITION</p>
   <h2 className="mt-2 font-serif text-3xl text-navy">{t.detailTitle}</h2>
   <p className="mt-3 leading-7 text-slate-700">{t.detailText}</p>
   <div className="mt-5 flex flex-wrap gap-3">
    <Link href={localePath('/journal/da-cosa-nasce-cosa-forte-marghera-2026',lang)} className="inline-flex rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">{t.detailLink} →</Link>
    <a href="https://muvemestre.visitmuve.it/casermette/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-5 py-3 text-sm font-bold text-navy">{t.official} ↗</a>
   </div>
  </div>
  <div className="mt-5 rounded-2xl border-l-4 border-gold bg-white p-6">
   <p className="text-sm leading-7 text-slate-700">{t.practical}</p>
   <a href="https://fondazionefortemarghera.it/come-arrivare/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-bold text-navy underline decoration-gold underline-offset-4">{t.route} ↗</a>
   <p className="mt-3 text-xs text-slate-500">{t.credit}</p>
  </div>
 </section>;
}
