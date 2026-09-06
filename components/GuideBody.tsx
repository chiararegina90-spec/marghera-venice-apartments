import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import GuideEditorialEnhancement from '@/components/GuideEditorialEnhancement';
import GuideItineraryIntro from '@/components/GuideItineraryIntro';
import type {GuideData} from '@/data/guideTypes';
import type {CultureLang} from '@/data/culturePlaces';

const prefix:Record<CultureLang,string>={it:'',en:'/en',de:'/de',fr:'/fr',es:'/es',zh:'/zh'};
const ui:Record<CultureLang,{
 overview:string;overviewFallback:(x:string)=>string;overviewFallbackText:string;before:string;beforeTitle:string;beforeText:string;
 see:string;seeTitle:(x:string)=>string;seeText:string;itin:string;itinTitle:(x:string)=>string;itinText:string;tip:string;detail:string;
 detailFallback:string;history:string;faq:string;faqTitle:(x:string)=>string;faqText:string;related:string;relatedTitle:string;unexpected:string;unexpectedText:string;
 apartments:[string,string];
}>={
 it:{overview:'In breve',overviewFallback:x=>`Prima di visitare ${x}`,overviewFallbackText:'Dopo aver capito il luogo, usa queste indicazioni per trasformare l’idea in una visita semplice e realistica.',before:'Prima di partire',beforeTitle:'Controlla sempre le informazioni aggiornate',beforeText:'Orari, tariffe, accessi e condizioni dei servizi possono cambiare. Questa guida aiuta a progettare la giornata; prima di partire verifica i canali ufficiali.',see:'Cosa vedere',seeTitle:x=>`Luoghi e dettagli da osservare a ${x}`,seeText:'Una selezione essenziale, spiegata senza trasformare la visita in una lista da spuntare.',itin:'Itinerario consigliato',itinTitle:x=>`Come organizzare il tempo a ${x}`,itinText:'Ora che conosci meglio il luogo, questo percorso serve solo a dare un ordine alla giornata.',tip:'Come ci andiamo noi',detail:'Un dettaglio da ricordare',detailFallback:'Lascia spazio all’imprevisto.',history:'Una storia del territorio',faq:'Domande frequenti',faqTitle:x=>`Prima di visitare ${x}`,faqText:'Risposte rapide ai dubbi più comuni.',related:'Guide correlate',relatedTitle:'Continua a esplorare',unexpected:'Lascia spazio all’imprevisto.',unexpectedText:'Le guide servono a orientarsi, non a trasformare la giornata in una corsa. Una pausa o una deviazione possono diventare la parte migliore della visita.',apartments:['Rossi Apartment','Dimora Castelli']},
 en:{overview:'At a glance',overviewFallback:x=>`Before visiting ${x}`,overviewFallbackText:'Once you understand the destination, use these practical notes to turn the idea into a simple, realistic visit.',before:'Before you go',beforeTitle:'Always check the latest information',beforeText:'Timetables, fares, access rules and service conditions can change. Use this guide to plan your day, then check official sources shortly before travelling.',see:'What to see',seeTitle:x=>`Places and details worth noticing in ${x}`,seeText:'A focused selection, explained without turning the visit into a checklist.',itin:'Suggested itinerary',itinTitle:x=>`How to organise your time in ${x}`,itinText:'Now that you know the place better, use this route only to give the day a simple order.',tip:'Our practical tip',detail:'A detail worth remembering',detailFallback:'Leave room for the unexpected.',history:'A story from the area',faq:'Frequently asked questions',faqTitle:x=>`Before visiting ${x}`,faqText:'Quick answers to common questions.',related:'Related guides',relatedTitle:'Keep exploring',unexpected:'Leave room for the unexpected.',unexpectedText:'A guide should help you make choices, not turn the day into a race. A pause or detour may become the best part of the visit.',apartments:['Rossi Apartment','Dimora Castelli']},
 de:{overview:'Kurz & praktisch',overviewFallback:x=>`Vor dem Besuch in ${x}`,overviewFallbackText:'Nachdem Sie das Reiseziel kennengelernt haben, helfen diese Hinweise dabei, daraus einen realistischen Tagesplan zu machen.',before:'Vor der Abfahrt',beforeTitle:'Aktuelle Informationen immer prüfen',beforeText:'Fahrpläne, Preise, Zugangsregeln und Servicebedingungen können sich ändern. Nutzen Sie diese Seite für die Planung und prüfen Sie offizielle Quellen kurz vor dem Ausflug.',see:'Sehenswert',seeTitle:x=>`Orte und Details, die in ${x} wirklich zählen`,seeText:'Eine gezielte Auswahl – erklärt, ohne den Besuch in eine Checkliste zu verwandeln.',itin:'Vorgeschlagene Route',itinTitle:x=>`So lässt sich die Zeit in ${x} gut einteilen`,itinText:'Nachdem Sie das Reiseziel verstanden haben, gibt diese Route dem Tag nur noch eine sinnvolle Reihenfolge.',tip:'Unser praktischer Tipp',detail:'Ein Detail, das in Erinnerung bleibt',detailFallback:'Raum für spontane Entdeckungen lassen.',history:'Eine Geschichte aus der Region',faq:'Häufig gestellte Fragen',faqTitle:x=>`Vor Ihrem Besuch in ${x}`,faqText:'Kurze Antworten auf häufige Fragen.',related:'Verwandte Reiseführer',relatedTitle:'Weiter entdecken',unexpected:'Raum für spontane Entdeckungen lassen.',unexpectedText:'Ein Reiseführer soll Orientierung geben, nicht den Tag in ein Rennen verwandeln. Gerade Pausen und kleine Umwege bleiben oft besonders in Erinnerung.',apartments:['Rossi Apartment','Dimora Castelli']},
 fr:{overview:'En pratique',overviewFallback:x=>`Avant de visiter ${x}`,overviewFallbackText:'Après avoir compris la destination, utilisez ces repères pour transformer l’idée en une visite simple et réaliste.',before:'Avant de partir',beforeTitle:'Vérifiez toujours les informations à jour',beforeText:'Horaires, tarifs, accès et conditions de service peuvent évoluer. Utilisez ce guide pour préparer votre journée, puis vérifiez les sources officielles peu avant le départ.',see:'À voir',seeTitle:x=>`Les lieux et détails qui comptent vraiment à ${x}`,seeText:'Une sélection ciblée, expliquée sans transformer la visite en liste à cocher.',itin:'Itinéraire conseillé',itinTitle:x=>`Comment organiser son temps à ${x}`,itinText:'Une fois le lieu compris, cet itinéraire sert simplement à donner un ordre logique à la journée.',tip:'Notre conseil pratique',detail:'Un détail à retenir',detailFallback:'Gardez une place pour l’imprévu.',history:'Une histoire du territoire',faq:'Questions fréquentes',faqTitle:x=>`Avant de visiter ${x}`,faqText:'Des réponses rapides aux questions les plus courantes.',related:'Guides associés',relatedTitle:'Continuer à explorer',unexpected:'Gardez une place pour l’imprévu.',unexpectedText:'Un guide doit aider à choisir, pas transformer la journée en course. Une pause ou un détour peuvent devenir le meilleur souvenir.',apartments:['Rossi Apartment','Dimora Castelli']},
 es:{overview:'En pocas palabras',overviewFallback:x=>`Antes de visitar ${x}`,overviewFallbackText:'Después de entender el destino, usa estas notas para convertir la idea en una visita sencilla y realista.',before:'Antes de salir',beforeTitle:'Comprueba siempre la información actualizada',beforeText:'Horarios, precios, accesos y condiciones de servicio pueden cambiar. Usa esta guía para planificar y revisa las fuentes oficiales poco antes de salir.',see:'Qué ver',seeTitle:x=>`Lugares y detalles que realmente importan en ${x}`,seeText:'Una selección concreta, explicada sin convertir la visita en una lista de tareas.',itin:'Itinerario recomendado',itinTitle:x=>`Cómo organizar el tiempo en ${x}`,itinText:'Después de conocer mejor el lugar, esta ruta solo sirve para dar un orden lógico al día.',tip:'Nuestro consejo práctico',detail:'Un detalle para recordar',detailFallback:'Deja espacio para lo inesperado.',history:'Una historia del territorio',faq:'Preguntas frecuentes',faqTitle:x=>`Antes de visitar ${x}`,faqText:'Respuestas rápidas a las dudas más comunes.',related:'Guías relacionadas',relatedTitle:'Seguir explorando',unexpected:'Deja espacio para lo inesperado.',unexpectedText:'Una guía debe ayudarte a elegir, no convertir el día en una carrera. Una pausa o un desvío pueden acabar siendo lo mejor de la visita.',apartments:['Rossi Apartment','Dimora Castelli']},
 zh:{overview:'实用提示',overviewFallback:x=>`参观${x}之前`,overviewFallbackText:'先了解目的地，再用这些实用信息把想法整理成轻松、现实的行程。',before:'出发前',beforeTitle:'请始终确认最新信息',beforeText:'交通时刻、票价、开放方式和服务条件都可能变化。请先用本指南规划，再在出发前查看官方信息。',see:'真正值得看',seeTitle:x=>`${x}真正值得留意的地点与细节`,seeText:'只保留有意义的重点，并解释为什么值得看，而不是做成打卡清单。',itin:'推荐行程',itinTitle:x=>`如何安排在${x}的时间`,itinText:'了解目的地之后，这条路线只负责给一天一个自然的顺序。',tip:'我们的实用建议',detail:'值得记住的细节',detailFallback:'给意外发现留一点时间。',history:'当地故事',faq:'常见问题',faqTitle:x=>`参观${x}之前`,faqText:'快速回答最常见的问题。',related:'相关指南',relatedTitle:'继续探索',unexpected:'给意外发现留一点时间。',unexpectedText:'旅行指南应该帮助你做选择，而不是把一天变成比赛。停下来休息或临时绕路，往往反而最值得记住。',apartments:['Rossi Apartment','Dimora Castelli']}
};

const genericMarkers:Record<CultureLang,string[]>={
 it:[],en:[],
 de:['Ein Reiseziel, das Zeit verdient','Atmosphäre','Spaziergänge','Fotomotive'],
 fr:['Bien préparer votre visite de','Ambiance locale','Pause gourmande','Informations pratiques'],
 es:['Cómo preparar tu visita a','Ambiente local','Pausa gastronómica','Información práctica'],
 zh:['为什么值得去','慢慢探索','当地文化','灵活安排']
};
function isGeneric(data:GuideData,lang:CultureLang){
 const hay=[data.introTitle,...data.highlights.map(x=>x[0]),...data.intro].join(' | ');
 return genericMarkers[lang].some(x=>hay.includes(x));
}
function localizedRelatedHref(href:string,lang:CultureLang){
 if(/^https?:/.test(href)) return href;
 if(lang==='it') return href;
 if(href.startsWith(`/${lang}/`)) return href;
 return `/${lang}${href.startsWith('/')?href:`/${href}`}`;
}

export default function GuideBody({data,lang}:{data:GuideData;lang:CultureLang}){
 const t=ui[lang]; const generic=isGeneric(data,lang); const base=prefix[lang];
 const apartmentPaths=lang==='it'?['/case/rossi-apartment','/case/dimora-castelli']:[`${base}/apartments/rossi-apartment`,`${base}/apartments/dimora-castelli`];
 return <>
   <GuideEditorialEnhancement slug={data.slug} lang={lang}/>

   <section className="guide-practical-intro py-14 sm:py-16">
    <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
     <div className="border-b border-slate-200 pb-7 sm:pb-9 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
      <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.overview}</p>
      <h2 className="mt-3 max-w-3xl font-serif text-4xl text-navy">{generic?t.overviewFallback(data.title):data.introTitle}</h2>
      <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
       {generic?<p>{t.overviewFallbackText}</p>:data.intro.map(p=><p key={p}>{p}</p>)}
      </div>
     </div>
     <aside className="self-start rounded-[1.5rem] bg-navy p-6 text-white sm:p-7">
      <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.before}</p>
      <h2 className="mt-3 font-serif text-3xl">{t.beforeTitle}</h2>
      <p className="mt-4 leading-7 text-white/76">{t.beforeText}</p>
      {(data.officialLinks||[]).length>0&&<div className="mt-6 flex flex-wrap gap-2.5">{(data.officialLinks||[]).map(([label,url])=><a key={url} href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/35 px-4 py-2.5 text-sm font-bold first:bg-white first:text-navy">{label} ↗</a>)}</div>}
     </aside>
    </div>
   </section>

   {!generic&&data.highlights.length>0&&<section className="bg-cream py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
     <SectionTitle eyebrow={t.see} title={t.seeTitle(data.title)} text={t.seeText}/>
     <div className="divide-y divide-navy/10 border-y border-navy/10 md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
      {data.highlights.map(([title,text],i)=><article key={title} className="grid grid-cols-[36px_1fr] gap-3 py-5 md:px-6 md:first:pl-0 md:last:pr-0">
       <div className="pt-1 text-xs font-black tracking-[.15em] text-gold">{String(i+1).padStart(2,'0')}</div>
       <div><h2 className="font-serif text-2xl text-navy">{title}</h2><p className="mt-2 leading-7 text-slate-600">{text}</p></div>
      </article>)}
     </div>
    </div>
   </section>}

   <section id={lang==='it'?'itinerario':'itinerary'} className="bg-navy py-14 text-white sm:py-16">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
     <SectionTitle eyebrow={t.itin} title={t.itinTitle(data.title)} text={t.itinText}/>
     <GuideItineraryIntro slug={data.slug} lang={lang}/>
     <div className="mt-8 border-y border-white/15">
      {data.itinerary.map(([time,title,text])=><article key={`${time}-${title}`} className="grid gap-2 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[110px_1fr] sm:gap-5 sm:py-6">
       <div className="text-xs font-black uppercase tracking-[.14em] text-gold sm:pt-1">{time}</div>
       <div><h2 className="font-serif text-2xl">{title}</h2><p className="mt-1.5 max-w-4xl leading-7 text-white/72">{text}</p></div>
      </article>)}
     </div>
    </div>
   </section>

   <section className="py-14 sm:py-16"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="grid gap-5 lg:grid-cols-2">
    <div className="rounded-[1.65rem] bg-navy p-7 text-white sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.tip}</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">{data.adviceTitle}</h2><p className="mt-4 text-base leading-7 text-white/76 sm:text-lg sm:leading-8">{data.advice}</p></div>
    {data.heartText?<div className="rounded-[1.65rem] border-l-4 border-aqua bg-cream p-7 sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.detail}</p><h2 className="mt-3 font-serif text-3xl text-navy">❤️ {data.heartTitle||t.detailFallback}</h2><p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">{data.heartText}</p></div>:<div className="rounded-[1.65rem] bg-cream p-7 sm:p-8"><h2 className="font-serif text-3xl text-navy">{t.unexpected}</h2><p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">{t.unexpectedText}</p></div>}
   </div></div></section>

   {data.historyText&&<section className="bg-gold py-14 text-navy sm:py-16"><div className="mx-auto max-w-5xl px-5 text-center lg:px-8"><p className="text-xs font-black uppercase tracking-[.22em]">{t.history}</p><h2 className="mt-3 font-serif text-4xl">{data.historyTitle}</h2><p className="mx-auto mt-4 max-w-3xl leading-7 text-navy/75 sm:text-lg sm:leading-8">{data.historyText}</p></div></section>}

   <section className="py-14 sm:py-16"><div className="mx-auto max-w-5xl px-5 lg:px-8"><SectionTitle eyebrow={t.faq} title={t.faqTitle(data.title)} text={t.faqText}/><div className="divide-y divide-slate-200 border-y border-slate-200">{data.faq.map(([question,answer])=><details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-xl text-navy sm:text-2xl"><span className="min-w-0">{question}</span><span className="shrink-0 text-gold transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-4xl leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>

   <section className="bg-cream py-14 sm:py-16"><div className="mx-auto max-w-6xl px-5 text-center lg:px-8"><p className="text-xs font-black uppercase tracking-[.22em] text-gold">{t.related}</p><h2 className="mt-3 font-serif text-4xl text-navy">{t.relatedTitle}</h2>{data.related.length>0&&<div className="mt-6 flex flex-wrap justify-center gap-2.5">{data.related.map(([label,href])=><Link key={href} href={localizedRelatedHref(href,lang)} className="rounded-full border border-navy/25 px-5 py-2.5 text-sm font-bold text-navy transition hover:border-navy hover:bg-navy hover:text-white">{label}</Link>)}</div>}<div className="mt-8 flex flex-wrap justify-center gap-3"><Link href={apartmentPaths[0]} className="rounded-full bg-gold px-7 py-3.5 font-bold text-navy">{t.apartments[0]}</Link><Link href={apartmentPaths[1]} className="rounded-full border border-navy px-7 py-3.5 font-bold text-navy">{t.apartments[1]}</Link></div></div></section>
 </>;
}
