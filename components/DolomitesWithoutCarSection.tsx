import Link from 'next/link';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';

const copy:Record<Lang,{
  eyebrow:string;title:string;text:string;
  stats:[string,string][];guide:string;timetable:string;note:string;
}>={
  it:{
    eyebrow:'Dolomiti senza auto',
    title:'Da Venezia Mestre a Cortina in giornata',
    text:'Un giorno Venezia, il giorno dopo le Dolomiti. Dalla stazione di Venezia Mestre puoi raggiungere Cortina d’Ampezzo in autobus e aggiungere una vera giornata in montagna al soggiorno senza noleggiare un’auto.',
    stats:[['Partenza','Venezia Mestre'],['Viaggio','circa 2 h 30'],['Tariffe','da € 12,50'],['Idea di giornata','partenza presto, rientro la sera']],
    guide:'Scopri la guida Dolomiti',
    timetable:'Controlla gli orari ufficiali',
    note:'Tariffe, orari, operatore e fermate possono cambiare. I dati indicati riflettono le informazioni ufficiali pubblicate per il collegamento Mestre–Cortina: verifica sempre la corsa del giorno prima di partire.'
  },
  en:{
    eyebrow:'The Dolomites without a car',
    title:'Venezia Mestre to Cortina for the day',
    text:'Venice one day, the Dolomites the next. Bus connections from Venezia Mestre station make it possible to add a real mountain day to your stay without renting a car.',
    stats:[['Departure','Venezia Mestre'],['Journey','about 2 h 30'],['Fares','from €12.50'],['Day-trip idea','leave early, return in the evening']],
    guide:'Open the Dolomites guide',
    timetable:'Check official timetables',
    note:'Fares, timetables, operators and stops can change. The figures shown reflect the official information published for the Mestre–Cortina connection; always check your travel-day service before leaving.'
  },
  de:{
    eyebrow:'Dolomiten ohne Auto',
    title:'Von Venezia Mestre nach Cortina – als Tagesausflug',
    text:'Heute Venedig, morgen Dolomiten. Vom Bahnhof Venezia Mestre bestehen Busverbindungen nach Cortina d’Ampezzo – eine praktische Möglichkeit für einen Bergtag ohne Mietwagen.',
    stats:[['Abfahrt','Venezia Mestre'],['Fahrzeit','ca. 2 Std. 30 Min.'],['Tarife','ab 12,50 €'],['Tagesidee','früh los, abends zurück']],
    guide:'Dolomiten-Guide öffnen',
    timetable:'Aktuelle Fahrpläne prüfen',
    note:'Tarife, Fahrpläne, Betreiber und Haltestellen können sich ändern. Die Angaben entsprechen den aktuell veröffentlichten Informationen für Mestre–Cortina; prüfen Sie vor der Abfahrt immer den Tagesfahrplan.'
  },
  fr:{
    eyebrow:'Les Dolomites sans voiture',
    title:'De Venezia Mestre à Cortina pour la journée',
    text:'Venise un jour, les Dolomites le lendemain. Des liaisons en autocar depuis la gare de Venezia Mestre permettent d’ajouter une vraie journée en montagne au séjour sans louer de voiture.',
    stats:[['Départ','Venezia Mestre'],['Trajet','environ 2 h 30'],['Tarifs','à partir de 12,50 €'],['Idée de journée','partir tôt, rentrer le soir']],
    guide:'Ouvrir le guide des Dolomites',
    timetable:'Vérifier les horaires officiels',
    note:'Tarifs, horaires, opérateurs et arrêts peuvent changer. Les données indiquées reprennent les informations officielles publiées pour Mestre–Cortina ; vérifiez toujours le service du jour avant le départ.'
  },
  es:{
    eyebrow:'Dolomitas sin coche',
    title:'De Venezia Mestre a Cortina en el día',
    text:'Venecia un día, los Dolomitas al siguiente. Las conexiones en autobús desde la estación Venezia Mestre permiten añadir una auténtica jornada de montaña a la estancia sin alquilar coche.',
    stats:[['Salida','Venezia Mestre'],['Trayecto','aprox. 2 h 30'],['Tarifas','desde 12,50 €'],['Idea de día','salir pronto, volver por la tarde-noche']],
    guide:'Abrir la guía de los Dolomitas',
    timetable:'Consultar horarios oficiales',
    note:'Tarifas, horarios, operadores y paradas pueden cambiar. Los datos mostrados reflejan la información oficial publicada para Mestre–Cortina; comprueba siempre el servicio del día antes de salir.'
  },
  zh:{
    eyebrow:'无需自驾去多洛米蒂',
    title:'从 Venezia Mestre 当天往返 Cortina',
    text:'今天游威尼斯，明天去多洛米蒂。Venezia Mestre 火车站有前往 Cortina d’Ampezzo 的长途巴士，可在不租车的情况下，把真正的山地一日游加入行程。',
    stats:[['出发','Venezia Mestre'],['车程','约 2 小时 30 分'],['票价','€12.50 起'],['一日游建议','早出发，傍晚返回']],
    guide:'打开多洛米蒂指南',
    timetable:'查看官方时刻表',
    note:'票价、时刻、运营方和停靠点可能调整。以上数据来自目前公布的 Mestre–Cortina 官方信息；出发前请务必再次确认当天班次。'
  }
};

export default function DolomitesWithoutCarSection({lang='it'}:{lang?:Lang}){
  const t=copy[lang];
  const guideHref=lang==='it'?'/guide/dolomiti':`/${lang}/guide/dolomiti`;
  return <section className="bg-navy py-20 text-white sm:py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-serif text-5xl leading-tight">{t.title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{t.text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={guideHref} className="rounded-full bg-gold px-6 py-3.5 font-bold text-navy">{t.guide} →</Link>
            <a href="https://www.cortinaexpress.it/it/orari-autobus/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-6 py-3.5 font-bold text-white">{t.timetable} ↗</a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.stats.map(([label,value])=><div key={label} className="rounded-[1.5rem] bg-white/10 p-6">
            <p className="text-xs font-black uppercase tracking-[.16em] text-gold">{label}</p>
            <p className="mt-2 font-serif text-3xl">{value}</p>
          </div>)}
        </div>
      </div>
      <p className="mt-7 max-w-5xl border-l-2 border-gold/70 pl-4 text-sm leading-6 text-white/60">{t.note}</p>
    </div>
  </section>;
}
