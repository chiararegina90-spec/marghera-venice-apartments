export type GlassWeekLang='it'|'en'|'de'|'fr'|'es'|'zh';

type Section={title:string;text:string};
type Pick={name:string;text:string;zone:string;note?:string};

export type GlassWeekContent={
  lang:GlassWeekLang;
  seoTitle:string;
  metaDescription:string;
  primaryKeyword:string;
  h1:string;
  category:string;
  eventDate:string;
  imageAlt:string;
  heroSubtitle:string;
  lead:string;
  sections:Section[];
  picksTitle:string;
  picksIntro:string;
  picks:Pick[];
  planTitle:string;
  planText:string;
  muranoCta:string;
  muranoHref:string;
  tipLabel:string;
  tip:string;
  officialLabel:string;
  officialNote:string;
  officialButton:string;
  officialHref:string;
  relatedEyebrow:string;
  relatedTitle:string;
  homoFaberLabel:string;
  homoFaberHref:string;
  biennaleLabel:string;
  biennaleHref:string;
  backLabel:string;
  journalHref:string;
  homeLabel:string;
  homeHref:string;
  journalLabel:string;
};

export const glassWeek2026:Record<GlassWeekLang,GlassWeekContent>={
  it:{
    lang:'it',
    seoTitle:'The Venice Glass Week 2026: eventi, Murano e cosa vedere',
    metaDescription:'Dal 12 al 20 settembre 2026 The Venice Glass Week porta oltre 200 eventi tra Venezia, Mestre e Murano: HUB, vetro di Murano e consigli per la visita.',
    primaryKeyword:'The Venice Glass Week 2026',
    h1:'The Venice Glass Week 2026: eventi, Murano e cosa vedere',
    category:'Arte & Cultura',
    eventDate:'12–20 SETTEMBRE 2026',
    imageAlt:'The Venice Glass Week 2026, festival del vetro tra Venezia e Murano',
    heroSubtitle:'Dal 12 al 20 settembre: oltre 200 appuntamenti dedicati al vetro di Murano, tra mostre, fornaci, HUB e installazioni nel cuore di Venezia.',
    lead:'Se stai cercando cosa fare a Venezia a settembre, The Venice Glass Week 2026 è uno degli appuntamenti più interessanti per entrare nel mondo del vetro di Murano: nove giorni di eventi tra Venezia, Mestre e l’isola dove questa tradizione continua a vivere ogni giorno.',
    sections:[
      {title:'La decima edizione: 12–20 settembre 2026',text:'Nato nel 2017 per celebrare, sostenere e promuovere l’arte del vetro, il festival raggiunge nel 2026 la decima edizione. Gli appuntamenti si distribuiscono tra Venezia, Mestre e Murano, trasformando il viaggio in un percorso tra patrimonio storico, ricerca contemporanea e lavorazione artigianale.'},
      {title:'Oltre 200 eventi tra Venezia, Mestre e Murano',text:'L’edizione 2026 annuncia oltre 200 appuntamenti, il programma più ampio dalla nascita del festival: mostre, installazioni, talk, visite guidate, workshop, dimostrazioni e iniziative speciali. Per chi visita Venezia a settembre significa poter scegliere tra esperienze molto diverse, senza dover seguire l’intero calendario.'},
      {title:'Murano e la tradizione del vetro',text:'Murano resta il cuore simbolico della Glass Week. Le fornaci, gli atelier e le realtà culturali dell’isola permettono di vedere come l’arte del vetro muranese continui a evolversi, mettendo in dialogo tecniche storiche, design e sperimentazione contemporanea.'},
      {title:'The Venice Glass Week HUB e HUB Under35',text:'Una delle novità più importanti della decima edizione è la nuova sede di The Venice Glass Week HUB by Generali, ospitato per la prima volta a Palazzo Morosini, in Campo Santo Stefano. HUB Under35 torna invece alla Fondazione Bevilacqua La Masa – Galleria di Piazza San Marco: la mostra riunisce 39 artisti internazionali con 52 opere ed è a ingresso gratuito, senza prenotazione richiesta.'},
      {title:'Murano Illumina il Mondo: l’evento di punta',text:'Dal 13 settembre al 1 novembre 2026 Murano Illumina il Mondo è il flagship event di The Venice Glass Week. Sotto gli archi delle Procuratie Vecchie, in Piazza San Marco, dodici installazioni luminose nate dalla collaborazione tra artisti e designer internazionali e vetrerie muranesi reinterpretano in chiave contemporanea il lampadario veneziano.'}
    ],
    picksTitle:'Tre appuntamenti che sceglierei durante la Glass Week',
    picksIntro:'Tra gli eventi già confermati al momento di questo aggiornamento, questi tre offrono un buon equilibrio tra grande installazione, giovani artisti e una vera tappa a Murano. Il programma ufficiale può comunque ricevere variazioni.',
    picks:[
      {name:'Murano Illumina il Mondo',text:'È il progetto simbolo dell’edizione 2026 e il modo più immediato per vedere il vetro muranese dialogare con Piazza San Marco. Le dodici installazioni sotto le Procuratie Vecchie sono pensate come reinterpretazioni contemporanee del lampadario veneziano.',zone:'Zona: Piazza San Marco – Procuratie Vecchie'},
      {name:'The Venice Glass Week HUB Under35',text:'Una tappa interessante per scoprire la nuova generazione del vetro artistico internazionale: 39 artisti e 52 opere in uno spazio centrale, facile da inserire in una giornata nel centro storico.',zone:'Zona: San Marco – Fondazione Bevilacqua La Masa',note:'Ingresso gratuito · nessuna prenotazione richiesta'},
      {name:'L’Anima dell’Onda, 2026',text:'Alla Fornace Wave Murano Glass, cinque totem monumentali lavorano con canne di vetro, metallo, luce e riflessi ispirati alla laguna. È una scelta utile se vuoi associare la Glass Week a una visita reale dentro il tessuto produttivo di Murano.',zone:'Zona: Murano – Fornace Wave Murano Glass',note:'Ingresso gratuito · nessuna prenotazione richiesta'}
    ],
    planTitle:'Come organizzare la visita',
    planText:'Gli eventi sono distribuiti tra Venezia, Mestre e Murano. Controlla il programma del giorno prima di partire, raggruppa gli appuntamenti per zona e verifica sempre se una visita richiede prenotazione. Se vuoi vedere davvero Murano, evita di trattarla come una deviazione di un’ora: dedica all’isola almeno mezza giornata, meglio ancora una giornata intera.',
    muranoCta:'Vuoi dedicare una giornata a Murano? Leggi la nostra guida completa all’isola. →',
    muranoHref:'/guide/murano',
    tipLabel:'Il consiglio di Marghera Venice Apartments',
    tip:'Controlla il programma la sera prima e raggruppa gli eventi per zona. In questo modo eviti inutili avanti e indietro tra Venezia e Murano e lasci più tempo a mostre, dimostrazioni e atelier.',
    officialLabel:'Informazioni ufficiali',
    officialNote:'Il programma online può ancora ricevere aggiornamenti. Orari, prenotazioni, ingressi e condizioni dei singoli eventi possono cambiare: verifica sempre il sito ufficiale prima della visita.',
    officialButton:'The Venice Glass Week – sito ufficiale',
    officialHref:'https://theveniceglassweek.com/',
    relatedEyebrow:'Settembre a Venezia',
    relatedTitle:'Potrebbe interessarti anche',
    homoFaberLabel:'Homo Faber 2026',homoFaberHref:'/journal/homo-faber-2026',
    biennaleLabel:'Biennale Arte 2026',biennaleHref:'/journal/biennale-di-venezia',
    backLabel:'Torna al Journal',journalHref:'/journal',homeLabel:'Home',homeHref:'/',journalLabel:'Journal'
  },
  en:{
    lang:'en',
    seoTitle:'The Venice Glass Week 2026 | Murano Events & Visitor Guide',
    metaDescription:'Plan The Venice Glass Week 2026, 12–20 September: 200+ Venice and Murano glass events, HUB Under35, Murano Illumina il Mondo and practical tips.',
    primaryKeyword:'The Venice Glass Week 2026',
    h1:'The Venice Glass Week 2026: Murano events and visitor guide',
    category:'Art & Culture',eventDate:'12–20 SEPTEMBER 2026',
    imageAlt:'The Venice Glass Week 2026, a Venice glass festival with events in Murano',
    heroSubtitle:'More than 200 events across Venice, Mestre and Murano, from contemporary glass art to furnaces, studios and the festival’s flagship installation.',
    lead:'For travellers looking for things to do in Venice in September, The Venice Glass Week 2026 is a rare chance to experience Murano glass beyond shop windows: nine days of exhibitions, workshops and glassmaking events spread across Venice, Mestre and Murano.',
    sections:[
      {title:'The tenth edition: 12–20 September 2026',text:'Founded in 2017 to celebrate, support and promote glassmaking, The Venice Glass Week reaches its tenth edition in 2026. Events take place across Venice, Mestre and Murano, connecting historic craft with contemporary art, design and new approaches to glass.'},
      {title:'More than 200 Venice glass events',text:'The 2026 edition announces more than 200 events, the festival’s richest programme to date, including exhibitions, installations, talks, guided visits, workshops, demonstrations and special projects. You do not need to cover everything: the best approach is to choose a few events that fit your Venice itinerary.'},
      {title:'Murano glassmaking, past and present',text:'Murano remains the symbolic heart of the festival. Its furnaces, studios and cultural spaces show why Murano glass is more than a souvenir: centuries of specialist knowledge continue to meet international design, glass art and experimentation.'},
      {title:'The Venice Glass Week HUB and HUB Under35',text:'A major change for the tenth edition is the new home of The Venice Glass Week HUB by Generali at Palazzo Morosini in Campo Santo Stefano. HUB Under35 returns to Fondazione Bevilacqua La Masa – Galleria di Piazza San Marco, presenting 52 works by 39 international artists; admission is free and no reservation is required.'},
      {title:'Murano Illumina il Mondo: the flagship event',text:'Running from 13 September to 1 November 2026, Murano Illumina il Mondo is the flagship event of The Venice Glass Week. Beneath the Procuratie Vecchie in St Mark’s Square, twelve new light installations reinterpret the Venetian chandelier through collaborations between international artists and designers and Murano glassmakers.'}
    ],
    picksTitle:'Three Glass Week events I would prioritise',
    picksIntro:'Among the events confirmed at the time of this update, these three give you a strong mix of landmark installation, emerging talent and a genuine Murano stop. The official programme may still be updated.',
    picks:[
      {name:'Murano Illumina il Mondo',text:'Start with the festival’s headline project: twelve light installations in one of Venice’s most recognisable settings. It is an easy way to see Murano glass art in dialogue with architecture rather than only in a museum or shop.',zone:'Area: St Mark’s Square – Procuratie Vecchie'},
      {name:'The Venice Glass Week HUB Under35',text:'A useful stop for seeing where contemporary glass is heading. The exhibition brings together 39 international artists and 52 works in central Venice, so it fits naturally into a day around St Mark’s Square.',zone:'Area: San Marco – Fondazione Bevilacqua La Masa',note:'Free admission · no reservation required'},
      {name:'L’Anima dell’Onda, 2026',text:'At Wave Murano Glass, five monumental totems combine glass canes, metal, light and lagoon-inspired reflections. It is a good choice if you want your Glass Week itinerary to include an actual Murano furnace setting rather than only central Venice venues.',zone:'Area: Murano – Wave Murano Glass furnace',note:'Free admission · no reservation required'}
    ],
    planTitle:'How to plan your visit',
    planText:'Events are spread across Venice, Mestre and Murano. Check the daily programme before setting out, group activities by area and confirm whether reservations are needed. If Murano is one of your priorities, give the island at least half a day rather than squeezing it into a quick detour.',
    muranoCta:'Planning a day in Murano? Read our complete Murano guide. →',muranoHref:'/en/guide/murano',
    tipLabel:'Marghera Venice Apartments tip',tip:'Check the programme the evening before and group events by area. You will spend less time moving between Venice and Murano and more time enjoying exhibitions, demonstrations and studios.',
    officialLabel:'Official information',officialNote:'The online programme may still receive updates. Times, reservations, admission rules and individual event conditions can change, so always check the official website before visiting.',officialButton:'The Venice Glass Week – official website',officialHref:'https://theveniceglassweek.com/en/',
    relatedEyebrow:'September in Venice',relatedTitle:'You may also like',
    homoFaberLabel:'Homo Faber 2026',homoFaberHref:'/en/journal/homo-faber-2026',biennaleLabel:'Biennale Arte 2026',biennaleHref:'/en/journal/biennale-di-venezia',
    backLabel:'Back to Journal',journalHref:'/en/journal',homeLabel:'Home',homeHref:'/en',journalLabel:'Journal'
  },
  de:{
    lang:'de',
    seoTitle:'The Venice Glass Week 2026 | Murano, Glaskunst & Venedig',
    metaDescription:'The Venice Glass Week 2026 vom 12.–20. September: über 200 Veranstaltungen in Venedig, Mestre und Murano, Glaskunst, HUBs und praktische Besuchstipps.',
    primaryKeyword:'The Venice Glass Week 2026',
    h1:'The Venice Glass Week 2026: Murano, Glaskunst und Venedig im September',
    category:'Kunst & Kultur',eventDate:'12.–20. SEPTEMBER 2026',
    imageAlt:'The Venice Glass Week 2026 mit Murano Glaskunst und Veranstaltungen in Venedig',
    heroSubtitle:'Über 200 Veranstaltungen zwischen Venedig, Mestre und Murano – von zeitgenössischer Glaskunst bis zu Werkstätten, Glasbläsereien und Lichtinstallationen.',
    lead:'Wer Venedig im September besucht und Murano Glas nicht nur in Schaufenstern sehen möchte, findet während The Venice Glass Week 2026 besonders viele Möglichkeiten: neun Tage mit Ausstellungen, Werkstätten, Vorführungen und Glaskunst in Venedig, Mestre und auf Murano.',
    sections:[
      {title:'Die zehnte Ausgabe: 12.–20. September 2026',text:'The Venice Glass Week wurde 2017 gegründet, um die Glaskunst zu feiern, zu fördern und sichtbar zu machen. 2026 findet die zehnte Ausgabe in Venedig, Mestre und Murano statt und verbindet handwerkliche Tradition mit internationaler Kunst, Design und zeitgenössischer Forschung.'},
      {title:'Über 200 Veranstaltungen in Venedig und Murano',text:'Für 2026 sind mehr als 200 Veranstaltungen angekündigt – das umfangreichste Programm seit Beginn des Festivals. Dazu gehören Ausstellungen, Installationen, Talks, Führungen, Workshops, Vorführungen und Sonderprojekte. Für Reisende ist eine kleine Auswahl nach Stadtteil meist sinnvoller als ein möglichst voller Tagesplan.'},
      {title:'Murano Glas zwischen Tradition und Gegenwart',text:'Murano bleibt das symbolische Zentrum der Glass Week. In Glasbläsereien, Ateliers und Kulturorten wird sichtbar, wie jahrhundertealtes Wissen weitergegeben und zugleich mit moderner Glaskunst, Design und neuen Techniken verbunden wird.'},
      {title:'The Venice Glass Week HUB und HUB Under35',text:'Eine wichtige Neuerung der zehnten Ausgabe ist der neue Standort des The Venice Glass Week HUB by Generali im Palazzo Morosini am Campo Santo Stefano. HUB Under35 findet wieder bei der Fondazione Bevilacqua La Masa – Galleria di Piazza San Marco statt: 39 internationale Künstlerinnen und Künstler zeigen 52 Werke; der Eintritt ist frei, eine Reservierung ist nicht erforderlich.'},
      {title:'Murano Illumina il Mondo: das Highlight des Festivals',text:'Vom 13. September bis 1. November 2026 ist Murano Illumina il Mondo das zentrale Highlight der The Venice Glass Week. Unter den Arkaden der Procuratie Vecchie am Markusplatz interpretieren zwölf neue Lichtinstallationen den venezianischen Kronleuchter neu – entstanden in Zusammenarbeit internationaler Künstler und Designer mit Murano-Glashütten.'}
    ],
    picksTitle:'Drei Termine, die ich bei der Glass Week einplanen würde',
    picksIntro:'Unter den derzeit bestätigten Veranstaltungen bieten diese drei eine gute Mischung aus großer Installation, junger Glaskunst und einem echten Besuch auf Murano. Das offizielle Programm kann noch aktualisiert werden.',
    picks:[
      {name:'Murano Illumina il Mondo',text:'Das Leitprojekt der Ausgabe 2026 verbindet zwölf Lichtinstallationen mit einer der bekanntesten Kulissen Venedigs. Besonders interessant ist, wie Murano Glaskunst hier mit Architektur und öffentlichem Raum zusammenspielt.',zone:'Ort: Markusplatz – Procuratie Vecchie'},
      {name:'The Venice Glass Week HUB Under35',text:'Eine gute Adresse, um junge internationale Positionen in der Glaskunst kennenzulernen. 39 Künstlerinnen und Künstler zeigen 52 Werke – zentral gelegen und gut mit einem Rundgang durch San Marco kombinierbar.',zone:'Ort: San Marco – Fondazione Bevilacqua La Masa',note:'Eintritt frei · keine Reservierung erforderlich'},
      {name:'L’Anima dell’Onda, 2026',text:'In der Fornace Wave Murano Glass entstehen aus Glasstäben, Metall, Licht und lagunenartigen Reflexen fünf monumentale Totems. Der Besuch bringt die Glass Week direkt in das produktive Umfeld von Murano und nicht nur in klassische Ausstellungsräume.',zone:'Ort: Murano – Fornace Wave Murano Glass',note:'Eintritt frei · keine Reservierung erforderlich'}
    ],
    planTitle:'So planen Sie den Besuch',planText:'Die Veranstaltungen verteilen sich auf Venedig, Mestre und Murano. Prüfen Sie das Tagesprogramm, gruppieren Sie Termine nach Gebiet und kontrollieren Sie vorab, ob eine Reservierung nötig ist. Wenn Murano wichtig ist, sollten Sie mindestens einen halben Tag für die Insel einplanen.',
    muranoCta:'Einen Tag für Murano geplant? Lesen Sie unseren vollständigen Murano-Reiseführer. →',muranoHref:'/de/guide/murano',
    tipLabel:'Tipp von Marghera Venice Apartments',tip:'Prüfen Sie am Vorabend das Tagesprogramm und gruppieren Sie die Veranstaltungen nach Gebiet. So vermeiden Sie unnötige Wege zwischen Venedig und Murano und haben mehr Zeit für Vorführungen, Ausstellungen und Ateliers.',
    officialLabel:'Offizielle Informationen',officialNote:'Das Online-Programm kann noch aktualisiert werden. Zeiten, Reservierungen, Eintrittsbedingungen und Hinweise einzelner Veranstaltungen können sich ändern. Prüfen Sie deshalb vor dem Besuch die offizielle Website.',officialButton:'The Venice Glass Week – offizielle Website',officialHref:'https://theveniceglassweek.com/en/',
    relatedEyebrow:'Venedig im September',relatedTitle:'Das könnte Sie auch interessieren',homoFaberLabel:'Homo Faber 2026',homoFaberHref:'/de/journal/homo-faber-2026',biennaleLabel:'Biennale Arte 2026',biennaleHref:'/de/journal/biennale-di-venezia',backLabel:'Zurück zum Journal',journalHref:'/de/journal',homeLabel:'Startseite',homeHref:'/de',journalLabel:'Journal'
  },
  fr:{
    lang:'fr',seoTitle:'The Venice Glass Week 2026 | Murano, événements et visites',metaDescription:'The Venice Glass Week 2026, du 12 au 20 septembre : plus de 200 événements à Venise, Mestre et Murano, art verrier, HUBs et conseils de visite.',primaryKeyword:'The Venice Glass Week 2026',
    h1:'The Venice Glass Week 2026 : Murano, art verrier et idées de visite',category:'Art & Culture',eventDate:'12–20 SEPTEMBRE 2026',imageAlt:'The Venice Glass Week 2026, festival du verre à Venise et événements à Murano',heroSubtitle:'Plus de 200 rendez-vous entre Venise, Mestre et Murano, des ateliers verriers aux installations contemporaines et au grand projet de la place Saint-Marc.',
    lead:'Pour qui cherche que faire à Venise en septembre, The Venice Glass Week 2026 permet de découvrir le verre de Murano bien au-delà des boutiques : neuf jours d’expositions, d’ateliers, de démonstrations et d’événements à Venise, Mestre et sur l’île de Murano.',
    sections:[
      {title:'La dixième édition : du 12 au 20 septembre 2026',text:'Créée en 2017 pour célébrer, soutenir et promouvoir l’art verrier, The Venice Glass Week fête sa dixième édition en 2026. Les événements se déploient à Venise, Mestre et Murano, entre savoir-faire historique, design international et création contemporaine.'},
      {title:'Plus de 200 événements à Venise et Murano',text:'L’édition 2026 annonce plus de 200 rendez-vous, le programme le plus riche depuis la création du festival : expositions, installations, conférences, visites guidées, ateliers, démonstrations et projets spéciaux. Pour un séjour, mieux vaut sélectionner quelques événements par quartier plutôt que vouloir tout voir.'},
      {title:'Murano et l’art du verre aujourd’hui',text:'Murano reste le cœur symbolique de la semaine du verre. Les fours, ateliers et lieux culturels de l’île montrent comment le savoir-faire du verre de Murano continue d’évoluer au contact du design, de l’art verrier international et de nouvelles expérimentations.'},
      {title:'The Venice Glass Week HUB et HUB Under35',text:'Parmi les nouveautés majeures de cette dixième édition, The Venice Glass Week HUB by Generali s’installe pour la première fois au Palazzo Morosini, Campo Santo Stefano. Le HUB Under35 revient à la Fondazione Bevilacqua La Masa – Galleria di Piazza San Marco : 39 artistes internationaux y présentent 52 œuvres, avec entrée gratuite et sans réservation.'},
      {title:'Murano Illumina il Mondo, l’événement phare',text:'Du 13 septembre au 1er novembre 2026, Murano Illumina il Mondo est l’événement phare de The Venice Glass Week. Sous les arcades des Procuratie Vecchie, place Saint-Marc, douze installations lumineuses réinterprètent le lustre vénitien grâce à des collaborations entre artistes et designers internationaux et verreries de Murano.'}
    ],
    picksTitle:'Trois rendez-vous que je privilégierais pendant la Glass Week',picksIntro:'Parmi les événements confirmés au moment de cette mise à jour, ces trois choix combinent installation majeure, jeune création et véritable étape à Murano. Le programme officiel peut encore évoluer.',
    picks:[
      {name:'Murano Illumina il Mondo',text:'C’est le grand projet à ne pas manquer pour voir le verre de Murano dialoguer avec l’architecture de Venise. Les douze installations sous les Procuratie Vecchie donnent une lecture contemporaine du lustre vénitien.',zone:'Quartier : place Saint-Marc – Procuratie Vecchie'},
      {name:'The Venice Glass Week HUB Under35',text:'Une étape intéressante pour découvrir de jeunes artistes verriers internationaux : 39 artistes et 52 œuvres réunis dans un lieu très central, facile à intégrer à une journée autour de Saint-Marc.',zone:'Quartier : San Marco – Fondazione Bevilacqua La Masa',note:'Entrée gratuite · sans réservation'},
      {name:'L’Anima dell’Onda, 2026',text:'À la Fornace Wave Murano Glass, cinq totems monumentaux associent cannes de verre, métal, lumière et reflets inspirés de la lagune. Un bon choix pour vivre la Glass Week dans un véritable lieu de production à Murano.',zone:'Quartier : Murano – Fornace Wave Murano Glass',note:'Entrée gratuite · sans réservation'}
    ],
    planTitle:'Comment organiser la visite',planText:'Les événements sont répartis entre Venise, Mestre et Murano. Consultez le programme du jour, regroupez les visites par zone et vérifiez les réservations avant de partir. Si vous souhaitez vraiment découvrir Murano, prévoyez au minimum une demi-journée sur l’île.',
    muranoCta:'Vous prévoyez une journée à Murano ? Lisez notre guide complet de l’île. →',muranoHref:'/fr/guide/murano',tipLabel:'Conseil Marghera Venice Apartments',tip:'Consultez le programme la veille et regroupez les événements par quartier. Vous passerez moins de temps dans les transports entre Venise et Murano et davantage dans les expositions, ateliers et démonstrations.',officialLabel:'Informations officielles',officialNote:'Le programme en ligne peut encore être mis à jour. Horaires, réservations, conditions d’entrée et modalités propres à chaque événement peuvent changer : consultez toujours le site officiel avant la visite.',officialButton:'The Venice Glass Week – site officiel',officialHref:'https://theveniceglassweek.com/en/',relatedEyebrow:'Venise en septembre',relatedTitle:'À découvrir également',homoFaberLabel:'Homo Faber 2026',homoFaberHref:'/fr/journal/homo-faber-2026',biennaleLabel:'Biennale Arte 2026',biennaleHref:'/fr/journal/biennale-di-venezia',backLabel:'Retour au Journal',journalHref:'/fr/journal',homeLabel:'Accueil',homeHref:'/fr',journalLabel:'Journal'
  },
  es:{
    lang:'es',seoTitle:'The Venice Glass Week 2026 | Murano, eventos y qué ver',metaDescription:'The Venice Glass Week 2026, del 12 al 20 de septiembre: más de 200 eventos en Venecia, Mestre y Murano, vidrio de Murano, HUBs y consejos de visita.',primaryKeyword:'The Venice Glass Week 2026',
    h1:'The Venice Glass Week 2026: Murano, eventos y qué ver',category:'Arte y Cultura',eventDate:'12–20 SEPTIEMBRE 2026',imageAlt:'The Venice Glass Week 2026, festival del vidrio en Venecia y eventos en Murano',heroSubtitle:'Más de 200 citas entre Venecia, Mestre y Murano, desde talleres y hornos de vidrio hasta instalaciones contemporáneas en pleno centro de la ciudad.',
    lead:'Si buscas qué hacer en Venecia en septiembre, The Venice Glass Week 2026 es una oportunidad para conocer el vidrio de Murano más allá de las tiendas: nueve días de exposiciones, talleres, demostraciones y eventos repartidos entre Venecia, Mestre y la isla de Murano.',
    sections:[
      {title:'La décima edición: 12–20 de septiembre de 2026',text:'Creado en 2017 para celebrar, apoyar y promover el arte del vidrio, el festival llega en 2026 a su décima edición. Las actividades se desarrollan en Venecia, Mestre y Murano y conectan la tradición artesanal con el diseño internacional y la creación contemporánea.'},
      {title:'Más de 200 eventos en Venecia y Murano',text:'La edición 2026 anuncia más de 200 actividades, el programa más amplio desde el nacimiento del festival: exposiciones, instalaciones, charlas, visitas guiadas, talleres, demostraciones y proyectos especiales. Para un viajero resulta más útil escoger algunos eventos por zona que intentar seguir todo el calendario.'},
      {title:'Murano y el arte del vidrio',text:'Murano sigue siendo el corazón simbólico de la Glass Week. Sus hornos, talleres y espacios culturales muestran cómo el vidrio de Murano y el cristal de Murano continúan evolucionando entre técnicas históricas, diseño y nuevas formas de arte en vidrio.'},
      {title:'The Venice Glass Week HUB y HUB Under35',text:'Una de las principales novedades de la décima edición es la nueva sede de The Venice Glass Week HUB by Generali en Palazzo Morosini, Campo Santo Stefano. HUB Under35 vuelve a la Fondazione Bevilacqua La Masa – Galleria di Piazza San Marco, con 39 artistas internacionales y 52 obras; la entrada es gratuita y no requiere reserva.'},
      {title:'Murano Illumina il Mondo, el evento estrella',text:'Del 13 de septiembre al 1 de noviembre de 2026, Murano Illumina il Mondo es el evento estrella de The Venice Glass Week. Bajo los arcos de las Procuratie Vecchie, en la plaza de San Marcos, doce instalaciones luminosas reinterpretan la lámpara veneciana mediante colaboraciones entre artistas y diseñadores internacionales y vidrierías de Murano.'}
    ],
    picksTitle:'Tres citas que elegiría durante la Glass Week',picksIntro:'Entre los eventos confirmados en el momento de esta actualización, estos tres combinan una gran instalación, artistas emergentes y una parada auténtica en Murano. El programa oficial todavía puede recibir cambios.',
    picks:[
      {name:'Murano Illumina il Mondo',text:'Es el proyecto central de la edición 2026 y una forma muy accesible de ver el vidrio de Murano dialogando con la arquitectura de Venecia. Las doce instalaciones transforman el entorno de las Procuratie Vecchie sin convertir la visita en una exposición convencional.',zone:'Zona: plaza de San Marcos – Procuratie Vecchie'},
      {name:'The Venice Glass Week HUB Under35',text:'Una buena parada para conocer nuevas voces del arte en vidrio internacional: 39 artistas y 52 obras en un espacio céntrico, fácil de combinar con una jornada por San Marcos.',zone:'Zona: San Marco – Fondazione Bevilacqua La Masa',note:'Entrada gratuita · no requiere reserva'},
      {name:'L’Anima dell’Onda, 2026',text:'En la Fornace Wave Murano Glass, cinco tótems monumentales combinan cañas de vidrio, metal, luz y reflejos inspirados en la laguna. Es una opción especialmente interesante si quieres que tu visita incluya un auténtico entorno de producción en Murano.',zone:'Zona: Murano – Fornace Wave Murano Glass',note:'Entrada gratuita · no requiere reserva'}
    ],
    planTitle:'Cómo organizar la visita',planText:'Los eventos se reparten entre Venecia, Mestre y Murano. Consulta el programa del día, agrupa las actividades por zona y comprueba si necesitan reserva. Si Murano es una prioridad, dedica al menos media jornada a la isla en lugar de convertirla en una visita rápida.',muranoCta:'¿Quieres dedicar un día a Murano? Lee nuestra guía completa de la isla. →',muranoHref:'/es/guide/murano',tipLabel:'Consejo de Marghera Venice Apartments',tip:'Consulta el programa la noche anterior y agrupa los eventos por zona. Así perderás menos tiempo desplazándote entre Venecia y Murano y podrás disfrutar más de talleres, demostraciones y exposiciones.',officialLabel:'Información oficial',officialNote:'El programa online todavía puede recibir actualizaciones. Horarios, reservas, condiciones de entrada y normas de cada evento pueden cambiar; revisa siempre la web oficial antes de la visita.',officialButton:'The Venice Glass Week – sitio oficial',officialHref:'https://theveniceglassweek.com/en/',relatedEyebrow:'Venecia en septiembre',relatedTitle:'También te puede interesar',homoFaberLabel:'Homo Faber 2026',homoFaberHref:'/es/journal/homo-faber-2026',biennaleLabel:'Biennale Arte 2026',biennaleHref:'/es/journal/biennale-di-venezia',backLabel:'Volver al Journal',journalHref:'/es/journal',homeLabel:'Inicio',homeHref:'/es',journalLabel:'Journal'
  },
  zh:{
    lang:'zh',seoTitle:'The Venice Glass Week 2026｜威尼斯玻璃周与穆拉诺旅行指南',metaDescription:'2026年9月12日至20日威尼斯玻璃周举行，威尼斯、梅斯特雷和穆拉诺岛有200多场活动，包含HUB、玻璃艺术展与Murano Illumina il Mondo。',primaryKeyword:'威尼斯玻璃周2026',
    h1:'The Venice Glass Week 2026：威尼斯玻璃周与穆拉诺看点',category:'艺术与文化',eventDate:'2026年9月12日–20日',imageAlt:'The Venice Glass Week 2026 威尼斯玻璃周与穆拉诺玻璃艺术活动',heroSubtitle:'九天内有200多场活动分布在威尼斯、梅斯特雷和穆拉诺岛，从玻璃工作室、熔炉到当代艺术装置都能看到。',
    lead:'如果你正在计划9月去威尼斯，The Venice Glass Week 2026（威尼斯玻璃周2026）很适合加入行程。它让游客不只在商店里看穆拉诺玻璃，而是进入展览、工作室和穆拉诺岛的玻璃制作现场，了解这门手艺今天如何继续发展。',
    sections:[
      {title:'第十届：2026年9月12日至20日',text:'The Venice Glass Week 创办于2017年，目的是推广和支持玻璃艺术。2026年迎来第十届，活动分布在威尼斯、梅斯特雷和穆拉诺岛，把传统玻璃工艺、国际设计与当代艺术放在同一条旅行路线中。'},
      {title:'200多场威尼斯九月活动',text:'2026年公布的活动超过200场，是历届规模最大的一次，包括展览、装置、讲座、导览、工作坊和现场演示。游客不必追完整个日程，更适合按照区域和兴趣挑选少量重点活动。'},
      {title:'穆拉诺玻璃：传统仍在继续',text:'穆拉诺岛仍是整个玻璃周最重要的文化背景。这里的熔炉、工作室和文化空间能让人看到穆拉诺玻璃制作并不是只停留在传统纪念品，而是在技术、设计和当代玻璃艺术之间不断变化。'},
      {title:'The Venice Glass Week HUB 与 HUB Under35',text:'第十届的一项重要变化，是 The Venice Glass Week HUB by Generali 首次在 Campo Santo Stefano 的 Palazzo Morosini 举办。HUB Under35 则继续在 Fondazione Bevilacqua La Masa – Galleria di Piazza San Marco 展出，共有39位国际艺术家、52件作品；免费入场，无需预约。'},
      {title:'Murano Illumina il Mondo：本届旗舰活动',text:'Murano Illumina il Mondo 于2026年9月13日至11月1日举行，是 The Venice Glass Week 的旗舰活动。圣马可广场 Procuratie Vecchie 拱廊下将展出12件全新灯光装置，由国际艺术家、设计师与穆拉诺玻璃工坊合作，以当代方式重新诠释威尼斯吊灯。'}
    ],
    picksTitle:'如果只能选三个，我会优先看这些',picksIntro:'以下三个项目在本次更新时已由官网确认，分别代表大型装置、年轻玻璃艺术家和真正位于穆拉诺岛的玻璃工坊体验。官方日程仍可能继续更新。',
    picks:[
      {name:'Murano Illumina il Mondo',text:'这是2026年最具代表性的项目。12件灯光装置放在圣马可广场的历史建筑环境中，可以直接看到穆拉诺玻璃艺术如何与威尼斯城市空间发生联系。',zone:'区域：圣马可广场 – Procuratie Vecchie'},
      {name:'The Venice Glass Week HUB Under35',text:'如果想了解年轻一代的国际玻璃艺术，这一站很合适。39位艺术家带来52件作品，而且位置就在圣马可广场附近，方便与市中心行程组合。',zone:'区域：San Marco – Fondazione Bevilacqua La Masa',note:'免费入场 · 无需预约'},
      {name:'L’Anima dell’Onda, 2026',text:'活动位于穆拉诺岛的 Wave Murano Glass 熔炉空间，五件大型作品利用玻璃棒、金属、光线和潟湖色彩形成不断变化的视觉效果。它很适合想把穆拉诺岛旅游与真实玻璃制作环境结合起来的游客。',zone:'区域：穆拉诺岛 – Fornace Wave Murano Glass',note:'免费入场 · 无需预约'}
    ],
    planTitle:'怎样安排参观更顺',planText:'活动分布在威尼斯、梅斯特雷和穆拉诺岛。出发前先查看当天日程，把同一区域的活动放在一起，并确认是否需要预约。如果你真的想了解穆拉诺岛，建议至少留半天，不要只安排一小时左右的快速往返。',muranoCta:'准备花一天探索穆拉诺岛？查看我们的穆拉诺岛完整旅行指南。 →',muranoHref:'/zh/guide/murano',tipLabel:'Marghera Venice Apartments 建议',tip:'前一晚先看第二天的活动安排，再按区域组合行程。这样可以减少威尼斯与穆拉诺岛之间来回移动，把更多时间留给展览、工作室和玻璃制作现场。',officialLabel:'官方信息',officialNote:'官网日程仍可能更新，具体时间、预约方式、门票和单项活动规则也可能调整。出发前请再次查看 The Venice Glass Week 官方网站。',officialButton:'The Venice Glass Week 官方网站',officialHref:'https://theveniceglassweek.com/en/',relatedEyebrow:'威尼斯九月活动',relatedTitle:'你可能还想看',homoFaberLabel:'Homo Faber 2026',homoFaberHref:'/zh/journal/homo-faber-2026',biennaleLabel:'Biennale Arte 2026',biennaleHref:'/zh/journal/biennale-di-venezia',backLabel:'返回旅行日志',journalHref:'/zh/journal',homeLabel:'首页',homeHref:'/zh',journalLabel:'旅行日志'
  }
};
