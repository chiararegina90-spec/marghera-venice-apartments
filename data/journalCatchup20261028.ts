import type {EventArticle,EventLang} from './journal-events-2026';

const m=(lang:EventLang,v:Record<EventLang,string>)=>v[lang];

function addLink(item:EventArticle,section:number,href:string,text:string,label:string){
 if(!item.sectionLinks?.some(x=>x.section===section&&x.href===href)){
  item.sectionLinks=[...(item.sectionLinks||[]),{section,href,text,label,tail:'.'}];
 }
}

export function applyJournalCatchup20261028(item:EventArticle,lang:EventLang,slug:string){
 if(!item||slug!=='venezia-a-novembre')return;

 const peggyTitle=m(lang,{
  it:'Dal 14 novembre: Fucina degli Angeli alla Peggy Guggenheim',
  en:'From 14 November: Fucina degli Angeli at the Peggy Guggenheim Collection',
  de:'Ab 14. November: Fucina degli Angeli in der Peggy Guggenheim Collection',
  fr:'À partir du 14 novembre : Fucina degli Angeli à la Collection Peggy Guggenheim',
  es:'Desde el 14 de noviembre: Fucina degli Angeli en la Colección Peggy Guggenheim',
  zh:'11月14日起：Peggy Guggenheim Collection 的 Fucina degli Angeli'
 });
 const extra=m(lang,{
  it:' Dal 18 al 22 novembre, in occasione della Festa della Madonna della Salute, la Collezione organizza anche la Settimana gratuita dei veneziani. L’ingresso gratuito è riservato alle categorie ammesse — residenti nel Comune di Venezia e nei 44 comuni della Città Metropolitana, persone nate a Venezia e studenti degli atenei veneziani indicati dal museo — e richiede prenotazione obbligatoria, disponibilità limitata e documento o tessera universitaria validi. Il programma comprende anche brevi presentazioni delle opere e, il 21 e 22 novembre alle 15:00, laboratori creativi gratuiti per bambini di 4–10 anni, con prenotazione dedicata disponibile dall’8 novembre alle 10:00.',
  en:' From 18 to 22 November, for the Festa della Madonna della Salute, the Collection also runs its Free Week for Venetians. Free admission is limited to eligible categories — residents of the City of Venice and the 44 municipalities of the Metropolitan City, people born in Venice, and students at the Venetian universities listed by the museum — and requires advance booking, subject to availability, plus valid ID or a student card. The programme also includes short presentations of artworks and, at 3 pm on 21 and 22 November, free creative workshops for children aged 4–10, with dedicated booking opening on 8 November at 10 am.',
  de:' Vom 18. bis 22. November veranstaltet die Collection anlässlich der Festa della Madonna della Salute außerdem ihre kostenfreie Woche für Venezianer. Der freie Eintritt gilt nur für berechtigte Gruppen — Einwohner der Stadt Venedig und der 44 Gemeinden der Metropolitanstadt, in Venedig Geborene sowie Studierende der vom Museum genannten venezianischen Hochschulen — und ist nur mit verpflichtender Reservierung nach Verfügbarkeit sowie gültigem Ausweis oder Studierendenausweis möglich. Zum Programm gehören auch kurze Werkpräsentationen und am 21. und 22. November um 15:00 Uhr kostenlose Kreativworkshops für Kinder von 4–10 Jahren; die separate Reservierung öffnet am 8. November um 10:00 Uhr.',
  fr:' Du 18 au 22 novembre, à l’occasion de la Festa della Madonna della Salute, la Collection organise également sa semaine gratuite pour les Vénitiens. L’entrée gratuite est réservée aux catégories éligibles — résidents de la commune de Venise et des 44 communes de la Ville métropolitaine, personnes nées à Venise et étudiants des établissements vénitiens indiqués par le musée — et nécessite une réservation obligatoire, sous réserve de disponibilité, ainsi qu’une pièce d’identité ou une carte d’étudiant valide. Le programme comprend aussi de courtes présentations d’œuvres et, les 21 et 22 novembre à 15 h, des ateliers créatifs gratuits pour les enfants de 4 à 10 ans, avec réservation dédiée à partir du 8 novembre à 10 h.',
  es:' Del 18 al 22 de noviembre, con motivo de la Festa della Madonna della Salute, la Colección organiza también su semana gratuita para venecianos. La entrada gratuita está reservada a las categorías admitidas — residentes del municipio de Venecia y de los 44 municipios de la Ciudad Metropolitana, personas nacidas en Venecia y estudiantes de los centros universitarios venecianos indicados por el museo — y requiere reserva obligatoria, sujeta a disponibilidad, además de documento válido o carné universitario. El programa incluye también breves presentaciones de obras y, los días 21 y 22 de noviembre a las 15:00, talleres creativos gratuitos para niños de 4 a 10 años, con reserva específica desde el 8 de noviembre a las 10:00.',
  zh:' 11月18日至22日，值 Festa della Madonna della Salute 期间，博物馆还举办威尼斯居民免费周。免费入场仅限符合条件者：威尼斯市及威尼斯都会城44个市镇居民、出生于威尼斯者，以及博物馆指定的威尼斯高校学生；必须提前预约、名额有限，并出示有效身份证件或学生证。活动期间还安排简短作品讲解，以及11月21日和22日15:00面向4–10岁儿童的免费创意工作坊，专门预约自11月8日10:00开放。'
 });

 const p=(item.sections||[]).findIndex(([t])=>t===peggyTitle);
 if(p>=0){
  const sections=[...(item.sections||[])];
  const [t,body]=sections[p];
  if(!body.includes(m(lang,{it:'Settimana gratuita dei veneziani',en:'Free Week for Venetians',de:'kostenfreie Woche für Venezianer',fr:'semaine gratuite pour les Vénitiens',es:'semana gratuita para venecianos',zh:'威尼斯居民免费周'}))){
   sections[p]=[t,body+extra] as const;
   item.sections=sections;
  }
  addLink(item,p,'https://www.guggenheim-venice.it/en/whats-on/events/free-week-for-venetians-2026/',
   m(lang,{it:'Condizioni ufficiali: ',en:'Official conditions: ',de:'Offizielle Bedingungen: ',fr:'Conditions officielles : ',es:'Condiciones oficiales: ',zh:'官方条件：'}),
   'Free Week for Venetians 2026');
 }

 const title=m(lang,{
  it:'Fino al 22 novembre: Da cosa nasce cosa',
  en:'Until 22 November: Da cosa nasce cosa',
  de:'Bis 22. November: Da cosa nasce cosa',
  fr:'Jusqu’au 22 novembre : Da cosa nasce cosa',
  es:'Hasta el 22 de noviembre: Da cosa nasce cosa',
  zh:'截至11月22日：Da cosa nasce cosa'
 });
 const body=m(lang,{
  it:'Tra le proposte di arte contemporanea da scoprire a novembre c’è anche Da cosa nasce cosa, mostra collettiva conclusiva degli Atelier 2025–2026 di Fondazione Musei Civici di Venezia e Fondazione Bevilacqua La Masa, curata da Camilla Mozzato. Riunisce le ricerche di 28 artisti tra pittura, fotografia, installazioni, video, performance e pratiche di ricerca. Fino al 22 novembre la prima fase è ospitata alla Galleria di Piazza San Marco e a Palazzetto Tito, Venezia. Dal 4 dicembre 2026 al 9 maggio 2027 il progetto proseguirà invece alla Casermetta 9 di Forte Marghera: questa seconda sede non è quindi ancora aperta per la mostra nel mese di novembre.',
  en:'Among November’s contemporary-art proposals is Da cosa nasce cosa, the concluding group exhibition of the 2025–2026 Ateliers of Fondazione Musei Civici di Venezia and Fondazione Bevilacqua La Masa, curated by Camilla Mozzato. It brings together the research of 28 artists across painting, photography, installation, video, performance and research practices. Until 22 November, the first phase is hosted at Galleria di Piazza San Marco and Palazzetto Tito in Venice. From 4 December 2026 to 9 May 2027, the project continues at Casermetta 9 in Forte Marghera, so that second venue is not yet open for the exhibition in November.',
  de:'Zu den zeitgenössischen Kunstangeboten im November gehört auch Da cosa nasce cosa, die abschließende Gruppenausstellung der Ateliers 2025–2026 von Fondazione Musei Civici di Venezia und Fondazione Bevilacqua La Masa, kuratiert von Camilla Mozzato. Sie vereint die Arbeiten von 28 Künstlerinnen und Künstlern aus Malerei, Fotografie, Installation, Video, Performance und forschungsbasierten Praktiken. Bis 22. November ist die erste Phase in der Galleria di Piazza San Marco und im Palazzetto Tito in Venedig zu sehen. Vom 4. Dezember 2026 bis 9. Mai 2027 wird das Projekt in der Casermetta 9 in Forte Marghera fortgesetzt; diese zweite Station ist im November also noch nicht geöffnet.',
  fr:'Parmi les propositions d’art contemporain à découvrir en novembre figure aussi Da cosa nasce cosa, exposition collective de clôture des Ateliers 2025–2026 de la Fondazione Musei Civici di Venezia et de la Fondazione Bevilacqua La Masa, sous le commissariat de Camilla Mozzato. Elle réunit les recherches de 28 artistes entre peinture, photographie, installation, vidéo, performance et pratiques de recherche. Jusqu’au 22 novembre, la première phase se tient à la Galleria di Piazza San Marco et au Palazzetto Tito à Venise. Du 4 décembre 2026 au 9 mai 2027, le projet se poursuivra à la Casermetta 9 de Forte Marghera : ce second lieu n’est donc pas encore ouvert pour l’exposition en novembre.',
  es:'Entre las propuestas de arte contemporáneo de noviembre se encuentra Da cosa nasce cosa, exposición colectiva final de los Atelier 2025–2026 de Fondazione Musei Civici di Venezia y Fondazione Bevilacqua La Masa, comisariada por Camilla Mozzato. Reúne las investigaciones de 28 artistas entre pintura, fotografía, instalación, vídeo, performance y prácticas de investigación. Hasta el 22 de noviembre, la primera fase se presenta en Galleria di Piazza San Marco y Palazzetto Tito, en Venecia. Del 4 de diciembre de 2026 al 9 de mayo de 2027, el proyecto continuará en Casermetta 9, Forte Marghera; por tanto, esta segunda sede aún no está abierta para la muestra en noviembre.',
  zh:'11月值得关注的当代艺术项目还包括 Da cosa nasce cosa。这是 Fondazione Musei Civici di Venezia 与 Fondazione Bevilacqua La Masa 2025–2026 Atelier 驻留项目的结业群展，由 Camilla Mozzato 策展，汇集28位艺术家的绘画、摄影、装置、影像、表演及研究型实践。第一阶段截至11月22日在威尼斯的 Galleria di Piazza San Marco 与 Palazzetto Tito 举行。第二阶段则从2026年12月4日至2027年5月9日转至 Forte Marghera 的 Casermetta 9，因此11月期间该第二展区尚未开放此展。'
 });

 if(!(item.sections||[]).some(([t])=>t===title)){
  item.sections=[...(item.sections||[]),[title,body] as const];
 }
 const idx=(item.sections||[]).findIndex(([t])=>t===title);
 addLink(item,idx,'https://muvemestre.visitmuve.it/mostra/da-cosa-nasce-cosa/',
  m(lang,{it:'Fonte ufficiale: ',en:'Official source: ',de:'Offizielle Quelle: ',fr:'Source officielle : ',es:'Fuente oficial: ',zh:'官方来源：'}),
  'DA COSA NASCE COSA');

 item.description=m(lang,{
  it:'Guida a Venezia a novembre: clima, acqua alta, Biennale Arte, Fucina degli Angeli, Settimana gratuita Peggy Guggenheim, Da cosa nasce cosa, Musei in Festa ed escursioni in Veneto.',
  en:'Venice in November: weather, acqua alta, the Art Biennale, Fucina degli Angeli, Peggy Guggenheim Free Week, Da cosa nasce cosa, Musei in Festa and Veneto day trips.',
  de:'Venedig im November: Wetter, Acqua alta, Kunstbiennale, Fucina degli Angeli, Peggy Guggenheim Free Week, Da cosa nasce cosa, Musei in Festa und Ausflüge in Venetien.',
  fr:'Venise en novembre : météo, acqua alta, Biennale Arte, Fucina degli Angeli, semaine gratuite Peggy Guggenheim, Da cosa nasce cosa, Musei in Festa et excursions en Vénétie.',
  es:'Venecia en noviembre: clima, acqua alta, Biennale Arte, Fucina degli Angeli, semana gratuita Peggy Guggenheim, Da cosa nasce cosa, Musei in Festa y excursiones por el Véneto.',
  zh:'11月威尼斯指南：天气、acqua alta、Biennale Arte、Fucina degli Angeli、Peggy Guggenheim 免费周、Da cosa nasce cosa、Musei in Festa 及威尼托周边行程。'
 });
 item.dateModified='2026-10-28';
}
