import type {EventArticle,EventLang} from './journal-events-2026';

type Faq={question:string;answer:string};
type FaqExtras=Partial<Record<EventLang,Faq[]>>;

const extras:Record<string,FaqExtras>={
 'su-e-zo-per-i-ponti-2027':{
  de:[
   {question:'Ist die Anmeldung für 2027 bereits geöffnet?',answer:'Anmeldeverfahren und Gebühren für 2027 sind noch nicht veröffentlicht. Prüfen Sie vor der Teilnahme die offizielle Website.'},
   {question:'Gibt es für Teilnehmende eine Befreiung vom Zugangsbeitrag?',answer:'Für 2027 ist derzeit keine spezielle Befreiung für Teilnehmende veröffentlicht. Prüfen Sie die offiziellen Regeln für das konkrete Datum.'}
  ],
  fr:[
   {question:'Les inscriptions 2027 sont-elles ouvertes ?',answer:'Les modalités et tarifs d’inscription 2027 ne sont pas encore publiés. Consultez la source officielle avant de prévoir votre participation.'},
   {question:'Les participants sont-ils exonérés de la Contribution d’accès ?',answer:'Aucune exonération spécifique pour les participants n’est actuellement publiée pour 2027. Vérifiez les règles officielles applicables à la date choisie.'}
  ],
  es:[
   {question:'¿Están abiertas las inscripciones de 2027?',answer:'Las modalidades y cuotas de inscripción de 2027 todavía no se han publicado. Consulta la fuente oficial antes de organizar la participación.'},
   {question:'¿Hay una exención de la Contribución de Acceso para participantes?',answer:'Por ahora no se ha publicado una exención específica para participantes en 2027. Comprueba las reglas oficiales válidas para esa fecha.'}
  ],
  zh:[
   {question:'2027 年报名已经开放了吗？',answer:'2027年的报名方式和费用尚未公布。计划参加前请查看官方来源。'},
   {question:'参加者可以免缴威尼斯入城费吗？',answer:'目前尚未公布2027年针对参加者的专项豁免。请按实际日期核对官方规则。'}
  ]
 },
 'salone-nautico-venezia-2027':{
  de:[
   {question:'Wo findet der Salone Nautico statt?',answer:'Im Arsenale von Venedig.'},
   {question:'Sind Programm und Aussteller 2027 bereits online?',answer:'Noch nicht vollständig. Dieser Guide wird aktualisiert, sobald Programm, Aussteller und Aktivitäten der Ausgabe 2027 offiziell veröffentlicht sind.'}
  ],
  fr:[
   {question:'Où se déroule le Salone Nautico ?',answer:'À l’Arsenale de Venise.'},
   {question:'Le programme et les exposants 2027 sont-ils déjà en ligne ?',answer:'Pas encore dans leur forme complète. Ce guide sera mis à jour dès la publication officielle du programme, des exposants et des activités.'}
  ],
  es:[
   {question:'¿Dónde se celebra el Salone Nautico?',answer:'En el Arsenale de Venecia.'},
   {question:'¿Ya están online el programa y los expositores de 2027?',answer:'Todavía no de forma completa. Esta guía se actualizará cuando se publiquen oficialmente el programa, los expositores y las actividades.'}
  ],
  zh:[
   {question:'Salone Nautico 在哪里举行？',answer:'威尼斯 Arsenale。'},
   {question:'2027 年节目和参展商名单已经公布了吗？',answer:'尚未完整公布。官方发布节目、参展商和活动后，本指南会继续更新。'}
  ]
 },
 'concerti-piazza-san-marco-2027':{
  de:[
   {question:'Wo finden die Konzerte statt?',answer:'Die in diesem Guide aufgeführten Termine finden auf dem Markusplatz in Venedig statt.'},
   {question:'Wie komme ich nach dem Konzert nach Marghera zurück?',answer:'Prüfen Sie für den jeweiligen Konzertabend den tatsächlich angebotenen Verkehr und mögliche Änderungen. Fahrpläne von 2026 werden hier nicht als 2027 gültig übernommen.'}
  ],
  fr:[
   {question:'Où ont lieu les concerts ?',answer:'Les rendez-vous de ce guide se tiennent sur la place Saint-Marc à Venise.'},
   {question:'Comment rentrer à Marghera après le concert ?',answer:'Vérifiez les transports réellement assurés et les éventuelles modifications pour le soir concerné. Les horaires 2026 ne sont pas considérés comme valables pour 2027.'}
  ],
  es:[
   {question:'¿Dónde se celebran los conciertos?',answer:'Los conciertos incluidos en esta guía se celebran en Piazza San Marco, Venecia.'},
   {question:'¿Cómo regreso a Marghera después del concierto?',answer:'Comprueba el servicio de transporte efectivo y posibles cambios para la noche del concierto. No se reutilizan horarios de 2026 como si fueran válidos en 2027.'}
  ],
  zh:[
   {question:'音乐会在哪里举行？',answer:'本指南列出的活动均在威尼斯 Piazza San Marco 举行。'},
   {question:'音乐会结束后怎样返回 Marghera？',answer:'请按演出当晚核对实际公共交通及临时调整。本指南不会把2026年的时刻表当作2027年的有效信息。'}
  ]
 },
 'biennale-architettura-2027':{
  en:[
   {question:'Where does the Architecture Biennale take place?',answer:'The main venues are the Giardini and Arsenale. Any additional 2027 venues and collateral events will be added after official confirmation.'}
  ],
  de:[
   {question:'Welche Öffnungszeiten gelten?',answer:'Aktuell veröffentlicht sind 10:00–18:00 Uhr und Montag als Schließtag, sofern keine offizielle Ausnahme angekündigt wird.'},
   {question:'Wo findet die Architekturbiennale statt?',answer:'Die Hauptorte sind Giardini und Arsenale. Weitere Veranstaltungsorte und Collateral Events 2027 werden nach offizieller Bestätigung ergänzt.'}
  ],
  fr:[
   {question:'Quels sont les horaires d’ouverture ?',answer:'Les horaires généraux actuellement publiés sont 10:00–18:00, avec fermeture le lundi sauf exception officielle.'},
   {question:'Où se déroule la Biennale d’Architecture ?',answer:'Les sites principaux sont les Giardini et l’Arsenale. Les éventuels autres sites et événements collatéraux 2027 seront ajoutés après confirmation.'}
  ],
  es:[
   {question:'¿Cuáles son los horarios?',answer:'El horario general publicado actualmente es 10:00–18:00, con cierre los lunes salvo excepciones oficiales.'},
   {question:'¿Dónde se celebra la Bienal de Arquitectura?',answer:'Las sedes principales son Giardini y Arsenale. Otras sedes y eventos colaterales de 2027 se añadirán cuando se confirmen oficialmente.'}
  ],
  zh:[
   {question:'开放时间是什么？',answer:'目前公布的一般开放时间为10:00–18:00，周一闭馆，除非官方另有例外安排。'},
   {question:'建筑双年展在哪里举行？',answer:'主要场地为 Giardini 和 Arsenale。其他2027年场地及平行活动将在官方确认后补充。'}
  ]
 },
 'regata-storica-2027':{
  en:[
   {question:'Where is the best place to watch?',answer:'There are several viewpoints along the Grand Canal, but for 2027 it is best to wait for official information on stands, access and regulated areas.'}
  ],
  de:[
   {question:'Wo findet die Regata Storica statt?',answer:'Der Canal Grande ist das Zentrum der Veranstaltung. Die operativen Details 2027 werden durch das offizielle Programm bestätigt.'},
   {question:'Wo kann man die Regata am besten sehen?',answer:'Entlang des Canal Grande gibt es verschiedene Aussichtspunkte. Für 2027 sollte man jedoch die offiziellen Angaben zu Tribünen, Zugängen und regulierten Bereichen abwarten.'}
  ],
  fr:[
   {question:'Où se déroule la Regata Storica ?',answer:'Le Grand Canal est le cœur de la manifestation. Les détails pratiques 2027 seront confirmés par le programme officiel.'},
   {question:'Où voir la Regata dans de bonnes conditions ?',answer:'Les rives du Grand Canal offrent plusieurs points de vue, mais pour 2027 il vaut mieux attendre les informations officielles sur tribunes, accès et zones réglementées.'}
  ],
  es:[
   {question:'¿Dónde se celebra la Regata Storica?',answer:'El Gran Canal es el centro de la manifestación. Los detalles operativos de 2027 se confirmarán con el programa oficial.'},
   {question:'¿Dónde conviene ver la Regata?',answer:'Las orillas del Gran Canal ofrecen varios puntos interesantes, pero para 2027 conviene esperar la información oficial sobre tribunas, accesos y zonas reguladas.'}
  ],
  zh:[
   {question:'Regata Storica 在哪里举行？',answer:'大运河是活动核心区域。2027年的具体安排将以官方节目为准。'},
   {question:'在哪里观看 Regata 比较合适？',answer:'大运河沿岸有多个观看点，但2027年的看台、通行和管控区域应等待官方信息后再决定。'}
  ]
 },
 'venicemarathon-2027':{
  en:[
   {question:'Where is a convenient place to stay for the race?',answer:'Marghera is practical for reaching Mestre and Venice by public transport, but 2027 starts, transfers and shuttles must be checked once published.'}
  ],
  de:[
   {question:'Sind Anmeldung und Rennservices 2027 bereits verfügbar?',answer:'Die vollständigen operativen Informationen sind noch nicht veröffentlicht. Prüfen Sie die offizielle Quelle, bevor Sie rennbezogene Leistungen buchen.'},
   {question:'Wo übernachtet man praktisch für das Rennen?',answer:'Marghera ist eine praktische Basis für Mestre und Venedig mit öffentlichen Verkehrsmitteln; Starts, Transfers und Shuttle-Angebote 2027 müssen nach Veröffentlichung geprüft werden.'}
  ],
  fr:[
   {question:'Les inscriptions et services de course 2027 sont-ils disponibles ?',answer:'Les informations pratiques complètes ne sont pas encore publiées. Consultez la source officielle avant de réserver des services liés à la course.'},
   {question:'Où est-il pratique de séjourner pour la course ?',answer:'Marghera est une base pratique pour rejoindre Mestre et Venise en transports publics, mais départs, transferts et navettes 2027 devront être vérifiés après publication.'}
  ],
  es:[
   {question:'¿Ya están disponibles las inscripciones y servicios de 2027?',answer:'La información operativa completa aún no se ha publicado. Consulta la fuente oficial antes de reservar servicios relacionados con la carrera.'},
   {question:'¿Dónde conviene alojarse para la carrera?',answer:'Marghera es una base práctica para llegar a Mestre y Venecia en transporte público, pero salidas, traslados y lanzaderas de 2027 deberán comprobarse cuando se publiquen.'}
  ],
  zh:[
   {question:'2027 年报名和赛事服务已经公布了吗？',answer:'完整的赛事运营信息尚未发布。预订与比赛有关的服务前，请查看官方来源。'},
   {question:'为了参赛住在哪里比较方便？',answer:'Marghera 乘公共交通前往 Mestre 和威尼斯都很方便，但2027年的起点、接驳和班车安排仍需在官方公布后核对。'}
  ]
 }
};

export function applyJournalFaqParity20261025(item:EventArticle,lang:EventLang,slug:string){
 for(const faq of extras[slug]?.[lang]||[]){
  if(!item.faq?.some(existing=>existing.question===faq.question)) item.faq=[...(item.faq||[]),faq];
 }
 if(extras[slug]?.[lang]&&(!item.dateModified||item.dateModified<'2026-10-25')) item.dateModified='2026-10-25';
 return item;
}
