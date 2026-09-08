export type HomoFaberLang='it'|'en'|'de'|'fr'|'es'|'zh';

type Section={title:string;text:string;items?:string[]};

export type HomoFaberContent={
  lang:HomoFaberLang;
  seoTitle:string;
  metaDescription:string;
  primaryKeyword:string;
  h1:string;
  category:string;
  eventDate:string;
  imageAlt:string;
  heroSubtitle:string;
  lead:string;
  stats:string[];
  sections:Section[];
  discoverCta:string;
  discoverHref:string;
  tipLabel:string;
  tip:string;
  officialLabel:string;
  officialNote:string;
  officialButton:string;
  officialHref:string;
  relatedEyebrow:string;
  relatedTitle:string;
  filmLabel:string;
  filmHref:string;
  glassLabel:string;
  glassHref:string;
  backLabel:string;
  journalHref:string;
  homeLabel:string;
  homeHref:string;
  journalLabel:string;
};

export const homoFaber2026:Record<HomoFaberLang,HomoFaberContent>={
  it:{
    lang:'it',
    seoTitle:'Homo Faber 2026 Venezia: orari, biglietti e cosa vedere',
    metaDescription:'Guida a Homo Faber 2026 a Venezia, 1–30 settembre: 500+ artigiani, 15 installazioni, biglietti, orari e navetta gratuita per San Giorgio.',
    primaryKeyword:'Homo Faber Venezia 2026',
    h1:'Homo Faber 2026: An Island of Light',
    category:'Arte & Cultura',
    eventDate:'1–30 SETTEMBRE 2026',
    imageAlt:'Homo Faber 2026 An Island of Light, immagine ufficiale dell’evento',
    heroSubtitle:'Alla Fondazione Giorgio Cini, oltre 500 artigiani da più di 70 Paesi raccontano l’artigianato contemporaneo attraverso oggetti, tecniche e 15 installazioni immersive.',
    lead:'Homo Faber 2026 è in corso a Venezia per tutto settembre. La quarta edizione della biennale internazionale dedicata ai mestieri d’arte porta sull’Isola di San Giorgio Maggiore oltre 500 artigiani da più di 70 Paesi, più di 700 oggetti e 15 installazioni immersive firmate nella regia espositiva di Es Devlin.',
    stats:['500+ artigiani','70+ Paesi','700+ oggetti','15 installazioni'],
    sections:[
      {title:'Cos’è Homo Faber?',text:'Homo Faber è una biennale internazionale dedicata all’eccellenza dell’artigianato contemporaneo e ai mestieri d’arte. L’edizione 2026 riunisce alla Fondazione Giorgio Cini centinaia di maestri e creatori internazionali, mostrando non solo gli oggetti finiti ma anche il sapere, i materiali e le competenze che li rendono possibili.'},
      {title:'An Island of Light',text:'Il nome ufficiale dell’edizione è An Island of Light. Sotto la direzione artistica di Es Devlin, il percorso esplora il rapporto tra luce, materiali e mano umana attraverso 15 installazioni immersive negli spazi storici e nei giardini della Fondazione Giorgio Cini.'},
      {title:'Molto più di una mostra',text:'Il valore di Homo Faber sta anche nel vedere il lavoro mentre accade. Il programma comprende dimostrazioni dal vivo, workshop partecipativi, esperienze culinarie e visite speciali: occasioni per osservare tecniche, gesti, processi, strumenti e materiali, e incontrare gli artigiani al lavoro.'},
      {title:'Homo Faber in Città: l’artigianato oltre San Giorgio',text:'L’esperienza continua nel centro di Venezia con Homo Faber in Città, che coinvolge circa 140 botteghe e laboratori artigiani. È un modo utile per scoprire atelier, materiali e tecniche fuori dai percorsi più turistici e vedere un lato più autentico della città, legato al lavoro quotidiano dei suoi artigiani.'},
      {title:'Informazioni pratiche 2026',text:'Homo Faber 2026 si svolge ogni giorno dal 1 al 30 settembre alla Fondazione Giorgio Cini, sull’Isola di San Giorgio Maggiore. Per una visita completa l’organizzazione consiglia di prevedere almeno circa due ore.',items:['Orario: 10:00–19:00 tutti i giorni','Ultimo ingresso: 17:00','Biglietto intero: €16','Biglietto ridotto: €10 secondo le condizioni ufficiali']},
      {title:'Come arrivare a San Giorgio',text:'Con un biglietto acquistato online è disponibile una navetta gratuita tra San Marco–San Zaccaria, pontile B1, e San Giorgio Maggiore. Le partenze sono indicate circa ogni 30 minuti: da San Zaccaria a partire dalle 09:30 e da San Giorgio dalle 10:15, con ultimo ritorno indicativamente alle 19:15. Frequenze e orari vanno comunque ricontrollati sul sito ufficiale il giorno della visita. In alternativa, il vaporetto ACTV linea 2 ferma a San Giorgio.'}
    ],
    discoverCta:'Vuoi esplorare Venezia oltre gli eventi? Apri la nostra guida per scoprire quartieri, isole e luoghi da inserire nel viaggio. →',
    discoverHref:'/scopri-venezia',
    tipLabel:'Il consiglio di Marghera Venice Apartments',
    tip:'Per la sola mostra considera almeno due ore; se vuoi abbinare la Basilica di San Giorgio Maggiore, una pausa sull’isola o una dimostrazione, dedica tranquillamente mezza giornata e controlla il programma giornaliero prima di partire.',
    officialLabel:'Informazioni ufficiali',
    officialNote:'Orari, disponibilità, attività, navetta e condizioni dei biglietti possono cambiare. Prima della visita verifica sempre le informazioni aggiornate sul sito ufficiale.',
    officialButton:'Homo Faber 2026 – sito ufficiale',
    officialHref:'https://www.homofaber.com/it/biennial/homofaber-2026',
    relatedEyebrow:'Settembre a Venezia',relatedTitle:'Potrebbe interessarti anche',
    filmLabel:'Mostra del Cinema 2026',filmHref:'/journal/mostra-del-cinema',
    glassLabel:'The Venice Glass Week 2026',glassHref:'/journal/venice-glass-week-2026',
    backLabel:'Torna al Journal',journalHref:'/journal',homeLabel:'Home',homeHref:'/',journalLabel:'Journal'
  },
  en:{
    lang:'en',
    seoTitle:'Homo Faber 2026 Venice | Tickets, Highlights & Visitor Guide',
    metaDescription:'Plan Homo Faber 2026 in Venice, 1–30 September: 500+ artisans, 15 installations, tickets, opening hours and the free shuttle to San Giorgio.',
    primaryKeyword:'Homo Faber 2026 Venice',
    h1:'Homo Faber 2026: An Island of Light',
    category:'Art & Culture',eventDate:'1–30 SEPTEMBER 2026',
    imageAlt:'Official artwork for Homo Faber 2026 An Island of Light',
    heroSubtitle:'At Fondazione Giorgio Cini, 500+ artisans from more than 70 countries bring contemporary craftsmanship to life through 700+ objects and 15 immersive installations.',
    lead:'Homo Faber 2026 is now taking place in Venice throughout September. The fourth edition of this international biennial for contemporary craftsmanship brings more than 500 artisans from 70+ countries, over 700 objects and 15 immersive installations to Fondazione Giorgio Cini on San Giorgio Maggiore.',
    stats:['500+ artisans','70+ countries','700+ objects','15 installations'],
    sections:[
      {title:'What is Homo Faber?',text:'Homo Faber is an international biennial dedicated to excellence in contemporary craftsmanship and the skilled trades behind it. The 2026 edition brings makers from around the world to Fondazione Giorgio Cini, focusing not only on finished pieces but on the knowledge, materials and specialist skills that shape them.'},
      {title:'An Island of Light',text:'The official title of the 2026 edition is An Island of Light. Under the artistic direction of Es Devlin, 15 immersive installations explore the relationship between light, materials and the human hand across the historic buildings and gardens of Fondazione Giorgio Cini.'},
      {title:'More than an exhibition',text:'A large part of the experience is seeing craft in action. Live demonstrations, participatory workshops, culinary experiences and special tours reveal techniques, gestures, processes, tools and materials, bringing visitors closer to the artisans behind the work.'},
      {title:'Homo Faber in Città: craftsmanship across Venice',text:'Homo Faber also extends beyond San Giorgio through Homo Faber in Città, involving around 140 artisan workshops across Venice. It is a useful route into local studios, materials and techniques, and a way to discover authentic Venice beyond the busiest visitor itineraries.'},
      {title:'Practical information for 2026',text:'Homo Faber 2026 is open daily from 1 to 30 September at Fondazione Giorgio Cini on San Giorgio Maggiore. The organisers recommend allowing at least around two hours for the exhibition.',items:['Opening hours: 10:00–19:00 daily','Last admission: 17:00','Full-price ticket: €16','Reduced ticket: €10 under the official eligibility rules']},
      {title:'How to get there',text:'Visitors with an online-booked ticket can use the free shuttle between San Marco–San Zaccaria, Pier B1, and San Giorgio Maggiore. Current information indicates departures roughly every 30 minutes, starting around 09:30 from San Zaccaria and 10:15 from San Giorgio, with the final return at about 19:15. Check the official site before travelling, as times may change. ACTV vaporetto line 2 is the regular public-transport alternative.'}
    ],
    discoverCta:'Want to explore Venice beyond the event? Use our Discover Venice guide for neighbourhoods, islands and ideas for the rest of your stay. →',
    discoverHref:'/en/discover-venice',
    tipLabel:'Marghera Venice Apartments tip',
    tip:'Allow at least two hours for the exhibition itself. If you also want to visit the Basilica of San Giorgio Maggiore, stop for a break on the island or catch a live demonstration, half a day is a much more comfortable plan.',
    officialLabel:'Official information',officialNote:'Opening times, availability, activities, shuttle schedules and ticket conditions can change. Check the official website again before your visit.',officialButton:'Homo Faber 2026 – official website',officialHref:'https://www.homofaber.com/en/biennial/homofaber-2026',
    relatedEyebrow:'September in Venice',relatedTitle:'You may also like',filmLabel:'Venice Film Festival 2026',filmHref:'/en/journal/mostra-del-cinema',glassLabel:'The Venice Glass Week 2026',glassHref:'/en/journal/venice-glass-week-2026',backLabel:'Back to Journal',journalHref:'/en/journal',homeLabel:'Home',homeHref:'/en',journalLabel:'Journal'
  },
  de:{
    lang:'de',seoTitle:'Homo Faber 2026 Venedig | Kunsthandwerk & Besucherinfos',metaDescription:'Homo Faber 2026 in Venedig: 1.–30. September, 500+ Kunsthandwerker, 15 Installationen, Tickets, Öffnungszeiten und Gratis-Shuttle nach San Giorgio.',primaryKeyword:'Homo Faber 2026 Venedig',h1:'Homo Faber 2026: An Island of Light',category:'Kunst & Kultur',eventDate:'1.–30. SEPTEMBER 2026',imageAlt:'Offizielles Motiv von Homo Faber 2026 An Island of Light',heroSubtitle:'In der Fondazione Giorgio Cini zeigen mehr als 500 Kunsthandwerker aus über 70 Ländern zeitgenössische Handwerkskunst in 700+ Objekten und 15 immersiven Installationen.',lead:'Homo Faber 2026 findet den ganzen September über in Venedig statt. Die vierte Ausgabe der internationalen Biennale für zeitgenössisches Kunsthandwerk vereint auf San Giorgio Maggiore mehr als 500 Kunsthandwerker aus über 70 Ländern, über 700 Objekte und 15 immersive Installationen.',stats:['500+ Kunsthandwerker','70+ Länder','700+ Objekte','15 Installationen'],sections:[
      {title:'Was ist Homo Faber?',text:'Homo Faber ist eine internationale Biennale für herausragendes zeitgenössisches Kunsthandwerk und die dahinterstehenden handwerklichen Berufe. 2026 kommen Meister und Gestalter aus aller Welt in die Fondazione Giorgio Cini; im Mittelpunkt stehen nicht nur fertige Werke, sondern auch Wissen, Materialien und spezialisierte Techniken.'},
      {title:'An Island of Light',text:'Der offizielle Titel der Ausgabe lautet An Island of Light. Unter der künstlerischen Leitung von Es Devlin untersuchen 15 immersive Installationen das Zusammenspiel von Licht, Materialien und menschlicher Hand in den historischen Räumen und Gärten der Fondazione Giorgio Cini.'},
      {title:'Mehr als eine Ausstellung',text:'Besonders spannend ist, dass Handwerk hier in Bewegung sichtbar wird. Live-Demonstrationen, Mitmach-Workshops, kulinarische Erlebnisse und besondere Führungen zeigen Techniken, Gesten, Abläufe, Werkzeuge und Materialien und bringen Besucher näher an die arbeitenden Kunsthandwerker.'},
      {title:'Homo Faber in Città: Handwerkskunst in Venedig entdecken',text:'Mit Homo Faber in Città reicht das Programm weit über San Giorgio hinaus und bindet rund 140 Werkstätten und Ateliers in Venedig ein. So lassen sich lokale Handwerker, Materialien und Techniken kennenlernen – und Orte entdecken, die abseits der klassischen Sehenswürdigkeiten liegen.'},
      {title:'Praktische Informationen 2026',text:'Homo Faber 2026 ist vom 1. bis 30. September täglich in der Fondazione Giorgio Cini auf San Giorgio Maggiore geöffnet. Für die Ausstellung werden mindestens etwa zwei Stunden empfohlen.',items:['Öffnungszeiten: täglich 10:00–19:00 Uhr','Letzter Einlass: 17:00 Uhr','Reguläres Ticket: 16 €','Ermäßigtes Ticket: 10 € gemäß den offiziellen Bedingungen']},
      {title:'Anreise nach San Giorgio',text:'Mit einem online gebuchten Ticket steht ein kostenloses Shuttle zwischen San Marco–San Zaccaria, Anleger B1, und San Giorgio Maggiore zur Verfügung. Der derzeitige Fahrplan sieht ungefähr alle 30 Minuten Abfahrten vor: ab San Zaccaria ab etwa 09:30 Uhr, zurück ab San Giorgio ab etwa 10:15 Uhr, letzter Rückweg ungefähr 19:15 Uhr. Bitte vor dem Besuch auf der offiziellen Website prüfen. Alternativ fährt die ACTV-Vaporetto-Linie 2 nach San Giorgio.'}
    ],discoverCta:'Noch mehr Venedig entdecken? In unserem Venedig-Guide finden Sie Viertel, Inseln und Ideen für den restlichen Aufenthalt. →',discoverHref:'/de/discover-venice',tipLabel:'Tipp von Marghera Venice Apartments',tip:'Für die Ausstellung allein sollten Sie mindestens zwei Stunden einplanen. Mit Basilika San Giorgio Maggiore, einer Pause auf der Insel oder einer Live-Demonstration ist ein halber Tag deutlich entspannter.',officialLabel:'Offizielle Informationen',officialNote:'Öffnungszeiten, Verfügbarkeit, Aktivitäten, Shuttle-Fahrplan und Ticketbedingungen können sich ändern. Bitte prüfen Sie die offizielle Website kurz vor dem Besuch.',officialButton:'Homo Faber 2026 – offizielle Website',officialHref:'https://www.homofaber.com/en/biennial/homofaber-2026',relatedEyebrow:'Venedig im September',relatedTitle:'Das könnte Sie auch interessieren',filmLabel:'Filmfestspiele von Venedig 2026',filmHref:'/de/journal/mostra-del-cinema',glassLabel:'The Venice Glass Week 2026',glassHref:'/de/journal/venice-glass-week-2026',backLabel:'Zurück zum Journal',journalHref:'/de/journal',homeLabel:'Startseite',homeHref:'/de',journalLabel:'Journal'
  },
  fr:{
    lang:'fr',seoTitle:'Homo Faber 2026 à Venise | Billets, artisanat et visite',metaDescription:'Homo Faber 2026 à Venise, du 1er au 30 septembre : 500+ artisans, 15 installations, billets, horaires et navette gratuite pour San Giorgio.',primaryKeyword:'Homo Faber 2026 Venise',h1:'Homo Faber 2026: An Island of Light',category:'Art & culture',eventDate:'1er–30 SEPTEMBRE 2026',imageAlt:'Visuel officiel de Homo Faber 2026 An Island of Light',heroSubtitle:'À la Fondazione Giorgio Cini, plus de 500 artisans de 70+ pays présentent l’artisanat contemporain à travers 700+ objets et 15 installations immersives.',lead:'Homo Faber 2026 se déroule à Venise pendant tout le mois de septembre. La quatrième édition de cette biennale internationale des métiers d’art réunit à San Giorgio Maggiore plus de 500 artisans issus de plus de 70 pays, plus de 700 objets et 15 installations immersives.',stats:['500+ artisans','70+ pays','700+ objets','15 installations'],sections:[
      {title:'Qu’est-ce que Homo Faber ?',text:'Homo Faber est une biennale internationale consacrée à l’excellence de l’artisanat contemporain et aux métiers d’art. En 2026, des créateurs du monde entier se retrouvent à la Fondazione Giorgio Cini : l’exposition montre les œuvres, mais aussi les savoirs, les matériaux et les techniques qui leur donnent forme.'},
      {title:'An Island of Light',text:'Le titre officiel de l’édition est An Island of Light. Sous la direction artistique d’Es Devlin, 15 installations immersives explorent le lien entre lumière, matériaux et main humaine dans les bâtiments historiques et les jardins de la Fondazione Giorgio Cini.'},
      {title:'Bien plus qu’une exposition',text:'L’un des intérêts de Homo Faber est de voir les métiers d’art en action. Démonstrations en direct, ateliers participatifs, expériences culinaires et visites spéciales permettent d’observer techniques, gestes, processus, outils et matériaux, au plus près des artisans.'},
      {title:'Homo Faber in Città : l’artisanat dans Venise',text:'Homo Faber in Città prolonge l’expérience dans Venise avec environ 140 ateliers et boutiques artisanales. Le parcours permet de découvrir artisans, matériaux et techniques dans des lieux souvent moins touristiques, et d’aborder une Venise plus quotidienne et plus authentique.'},
      {title:'Informations pratiques 2026',text:'Homo Faber 2026 est ouvert tous les jours du 1er au 30 septembre à la Fondazione Giorgio Cini, sur l’île de San Giorgio Maggiore. Les organisateurs recommandent de prévoir au moins environ deux heures.',items:['Horaires : 10 h 00–19 h 00 tous les jours','Dernière entrée : 17 h 00','Billet plein tarif : 16 €','Billet réduit : 10 € selon les conditions officielles']},
      {title:'Comment s’y rendre',text:'Une navette gratuite est proposée aux visiteurs munis d’un billet réservé en ligne entre San Marco–San Zaccaria, ponton B1, et San Giorgio Maggiore. Les informations actuelles indiquent des départs environ toutes les 30 minutes, à partir de 09 h 30 depuis San Zaccaria et de 10 h 15 depuis San Giorgio, avec un dernier retour vers 19 h 15. Vérifiez ces horaires sur le site officiel avant la visite. Le vaporetto ACTV ligne 2 reste l’alternative régulière.'}
    ],discoverCta:'Envie de découvrir Venise au-delà de l’événement ? Consultez notre guide pour explorer quartiers, îles et autres idées de visite. →',discoverHref:'/fr/discover-venice',tipLabel:'Le conseil de Marghera Venice Apartments',tip:'Prévoyez au moins deux heures pour l’exposition seule. Si vous ajoutez la basilique de San Giorgio Maggiore, une pause sur l’île ou une démonstration, une demi-journée sera beaucoup plus confortable.',officialLabel:'Informations officielles',officialNote:'Horaires, disponibilités, activités, navette et conditions tarifaires peuvent évoluer. Vérifiez le site officiel avant votre visite.',officialButton:'Homo Faber 2026 – site officiel',officialHref:'https://www.homofaber.com/en/biennial/homofaber-2026',relatedEyebrow:'Venise en septembre',relatedTitle:'À découvrir aussi',filmLabel:'Mostra de Venise 2026',filmHref:'/fr/journal/mostra-del-cinema',glassLabel:'The Venice Glass Week 2026',glassHref:'/fr/journal/venice-glass-week-2026',backLabel:'Retour au Journal',journalHref:'/fr/journal',homeLabel:'Accueil',homeHref:'/fr',journalLabel:'Journal'
  },
  es:{
    lang:'es',seoTitle:'Homo Faber 2026 Venecia | Entradas, artesanía y visita',metaDescription:'Homo Faber 2026 en Venecia, 1–30 de septiembre: 500+ artesanos, 15 instalaciones, entradas, horarios y lanzadera gratuita a San Giorgio.',primaryKeyword:'Homo Faber 2026 Venecia',h1:'Homo Faber 2026: An Island of Light',category:'Arte y cultura',eventDate:'1–30 DE SEPTIEMBRE DE 2026',imageAlt:'Imagen oficial de Homo Faber 2026 An Island of Light',heroSubtitle:'En la Fondazione Giorgio Cini, más de 500 artesanos de 70+ países presentan la artesanía contemporánea a través de 700+ objetos y 15 instalaciones inmersivas.',lead:'Homo Faber 2026 se celebra en Venecia durante todo septiembre. La cuarta edición de esta bienal internacional de artesanía contemporánea reúne en San Giorgio Maggiore a más de 500 artesanos de más de 70 países, más de 700 objetos y 15 instalaciones inmersivas.',stats:['500+ artesanos','70+ países','700+ objetos','15 instalaciones'],sections:[
      {title:'¿Qué es Homo Faber?',text:'Homo Faber es una bienal internacional dedicada a la excelencia de la artesanía contemporánea y a los oficios que la hacen posible. En 2026, la Fondazione Giorgio Cini reúne a creadores de todo el mundo y pone el foco tanto en las obras terminadas como en los conocimientos, materiales y técnicas que hay detrás.'},
      {title:'An Island of Light',text:'El nombre oficial de la edición es An Island of Light. Bajo la dirección artística de Es Devlin, 15 instalaciones inmersivas exploran la relación entre la luz, los materiales y la mano humana en los espacios históricos y jardines de la Fondazione Giorgio Cini.'},
      {title:'Mucho más que una exposición',text:'Una parte esencial de la experiencia es ver la artesanía en acción. Demostraciones en vivo, talleres participativos, experiencias gastronómicas y visitas especiales permiten observar técnicas, gestos, procesos, herramientas y materiales, y acercarse al trabajo real de los artesanos.'},
      {title:'Homo Faber in Città: artesanía por Venecia',text:'Homo Faber in Città extiende la experiencia por Venecia e incluye alrededor de 140 talleres y espacios artesanos. Es una buena forma de conocer materiales, técnicas y artesanos locales, además de descubrir lugares menos turísticos y una cara más auténtica de la ciudad.'},
      {title:'Información práctica 2026',text:'Homo Faber 2026 abre todos los días del 1 al 30 de septiembre en la Fondazione Giorgio Cini, en la isla de San Giorgio Maggiore. La organización recomienda reservar al menos unas dos horas para la exposición.',items:['Horario: 10:00–19:00 todos los días','Última entrada: 17:00','Entrada general: 16 €','Entrada reducida: 10 € según las condiciones oficiales']},
      {title:'Cómo llegar',text:'Los visitantes con entrada comprada online pueden utilizar una lanzadera gratuita entre San Marco–San Zaccaria, embarcadero B1, y San Giorgio Maggiore. La información actual indica salidas aproximadamente cada 30 minutos, desde las 09:30 en San Zaccaria y desde las 10:15 en San Giorgio, con último regreso alrededor de las 19:15. Comprueba los horarios en la web oficial antes de ir. Como alternativa, el vaporetto ACTV línea 2 para en San Giorgio.'}
    ],discoverCta:'¿Quieres descubrir Venecia más allá del evento? Consulta nuestra guía con barrios, islas e ideas para completar el viaje. →',discoverHref:'/es/discover-venice',tipLabel:'Consejo de Marghera Venice Apartments',tip:'Reserva al menos dos horas para la exposición. Si también quieres visitar la basílica de San Giorgio Maggiore, hacer una pausa en la isla o ver una demostración, media jornada es una opción mucho más cómoda.',officialLabel:'Información oficial',officialNote:'Horarios, disponibilidad, actividades, lanzadera y condiciones de las entradas pueden cambiar. Revisa la web oficial antes de la visita.',officialButton:'Homo Faber 2026 – web oficial',officialHref:'https://www.homofaber.com/en/biennial/homofaber-2026',relatedEyebrow:'Venecia en septiembre',relatedTitle:'También te puede interesar',filmLabel:'Festival de Cine de Venecia 2026',filmHref:'/es/journal/mostra-del-cinema',glassLabel:'The Venice Glass Week 2026',glassHref:'/es/journal/venice-glass-week-2026',backLabel:'Volver al Journal',journalHref:'/es/journal',homeLabel:'Inicio',homeHref:'/es',journalLabel:'Journal'
  },
  zh:{
    lang:'zh',seoTitle:'Homo Faber 2026 威尼斯工艺展｜门票、交通与参观指南',metaDescription:'Homo Faber 2026 于9月1日至30日在威尼斯举行：500多位工艺师、15个沉浸式装置，并附门票、开放时间与前往圣乔治马焦雷岛的免费接驳船信息。',primaryKeyword:'威尼斯Homo Faber',h1:'Homo Faber 2026: An Island of Light',category:'艺术与文化',eventDate:'2026年9月1日–30日',imageAlt:'Homo Faber 2026 An Island of Light 官方视觉',heroSubtitle:'在 Giorgio Cini基金会，来自70多个国家的500多位工艺师，以700多件作品和15个沉浸式装置呈现当代工艺。',lead:'Homo Faber 2026 正在威尼斯举行，整个9月都可以参观。第四届国际当代工艺双年展在圣乔治马焦雷岛的 Fondazione Giorgio Cini 举办，汇集500多位工艺师、70多个国家、700多件作品和15个沉浸式装置。',stats:['500+ 位工艺师','70+ 个国家','700+ 件作品','15 个沉浸式装置'],sections:[
      {title:'Homo Faber 是什么？',text:'Homo Faber 是一项聚焦当代卓越工艺与专业手工技艺的国际双年展。2026年，来自世界各地的工艺师来到 Fondazione Giorgio Cini；展览不仅看成品，也让游客理解作品背后的知识、材料与专业技术。'},
      {title:'An Island of Light',text:'本届官方主题为 Homo Faber 2026: An Island of Light。艺术总监 Es Devlin 通过15个沉浸式装置，利用 Fondazione Giorgio Cini 的历史建筑和花园，探讨光线、材料与人的双手之间的关系。'},
      {title:'不只是看展',text:'Homo Faber 的价值也在于看到工艺正在发生。现场演示、参与式工作坊、美食体验和特别导览，让游客观察技法、动作、工序、工具和材料，更接近工艺师真实的工作过程。'},
      {title:'Homo Faber in Città：走进威尼斯手工艺',text:'Homo Faber in Città 把活动延伸到威尼斯城区，涉及约140家工坊与手工艺空间。它适合想看威尼斯手工艺、材料和传统技法的游客，也能带你进入比热门景点更安静、更生活化的街区。'},
      {title:'2026实用参观信息',text:'Homo Faber 2026 于9月1日至30日每天开放，地点是圣乔治马焦雷岛的 Fondazione Giorgio Cini。官方建议参观展览至少预留约2小时。',items:['开放时间：每天10:00–19:00','最后入场：17:00','全价票：16欧元','优惠票：10欧元，按官网适用条件执行']},
      {title:'如何前往圣乔治马焦雷岛',text:'提前在线购票的游客可乘坐 San Marco–San Zaccaria B1 码头与 San Giorgio Maggiore 之间的免费接驳船。目前公布的信息为约每30分钟一班：San Zaccaria 约09:30开始发船，San Giorgio 约10:15开始返程，最后返程约19:15。时间可能调整，出发前请再次查看官网。普通公共交通也可以乘 ACTV 2号水上巴士到 San Giorgio。'}
    ],discoverCta:'想继续安排威尼斯行程？查看我们的威尼斯旅行指南，发现更多街区、岛屿和适合加入行程的地点。 →',discoverHref:'/zh/discover-venice',tipLabel:'Marghera Venice Apartments 建议',tip:'单看展览建议至少留2小时。如果还想参观 San Giorgio Maggiore 教堂、在岛上休息或看现场演示，安排半天会更从容。',officialLabel:'官方信息',officialNote:'开放时间、活动、接驳船班次和门票条件都可能调整。参观前请再次查看 Homo Faber 官方网站。',officialButton:'Homo Faber 2026 官方网站',officialHref:'https://www.homofaber.com/en/biennial/homofaber-2026',relatedEyebrow:'2026年9月威尼斯活动',relatedTitle:'你可能还想看',filmLabel:'威尼斯电影节 2026',filmHref:'/zh/journal/mostra-del-cinema',glassLabel:'The Venice Glass Week 2026',glassHref:'/zh/journal/venice-glass-week-2026',backLabel:'返回旅行日志',journalHref:'/zh/journal',homeLabel:'首页',homeHref:'/zh',journalLabel:'旅行日志'
  }
};
