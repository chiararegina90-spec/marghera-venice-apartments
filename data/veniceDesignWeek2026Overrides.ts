import type {EventArticle,EventLang} from './journal-events-2026';

type Override=Partial<EventArticle>;

const caPesaro:Record<EventLang,string>={
  it:'/guide/musei-venezia/ca-pesaro',en:'/en/guide/venice-museums/ca-pesaro',de:'/de/guide/museen-venedig/ca-pesaro',fr:'/fr/guide/musees-venise/ca-pesaro',es:'/es/guide/museos-venecia/ca-pesaro',zh:'/zh/guide/venice-museums/ca-pesaro'
};
const querini:Record<EventLang,string>={
  it:'/guide/musei-venezia/querini-stampalia',en:'/en/guide/venice-museums/querini-stampalia',de:'/de/guide/museen-venedig/querini-stampalia',fr:'/fr/guide/musees-venise/querini-stampalia',es:'/es/guide/museos-venecia/querini-stampalia',zh:'/zh/guide/venice-museums/querini-stampalia'
};

export const veniceDesignWeek2026Overrides:Record<EventLang,Override>={
  it:{
    description:'Venice Design Week 2026, dal 9 al 18 ottobre: programma, mostre, visite guidate anche in inglese e workshop selezionati per organizzare la visita.',
    lead:'Venice Design Week torna dal 9 al 18 ottobre 2026 con il tema “100” e un programma diffuso tra mostre, visite guidate, incontri e workshop. Il calendario operativo è ora online: qui trovi una selezione pensata per chi visita Venezia, con attenzione agli appuntamenti in inglese, alle prenotazioni e alle sedi più semplici da inserire in un itinerario.',
    sections:[
      ['Il tema “100” e una Design Week diffusa','Venice Design Week usa Venezia come una rete di sedi invece di concentrarsi in un unico padiglione. Nel 2026 il tema “100” accompagna mostre, incontri, visite guidate e workshop dal 9 al 18 ottobre. Per un visitatore il modo migliore di viverla è scegliere pochi appuntamenti compatibili per zona, lingua e orario.'],
      ['9 ottobre: presentazione ufficiale allo IUAV','La presentazione di Venice Design Week 2026 è in programma venerdì 9 ottobre alle 11:00 nell’Aula Magna Tolentini dello IUAV, Santa Croce 191. È un buon punto di partenza per capire il tema e orientarsi nel programma prima di costruire il proprio itinerario.'],
      ['VDW Interior Design – Home Accessories','La mostra a Combo Venezia, Campo dei Gesuiti 4878, è aperta dal 9 al 18 ottobre, ogni giorno 10:00–13:00 e 14:00–18:00. Tra le visite guidate pubblicate ce ne sono due particolarmente utili per il pubblico internazionale: 9 ottobre alle 15:00 in italiano e inglese e 16 ottobre alle 12:00 in inglese. È richiesta la prenotazione: verifica la disponibilità sul sito ufficiale.'],
      ['VDW Light Selection a Palazzo Nani','VDW Light Selection si svolge al piano nobile di Palazzo Nani – Radisson Collection Hotel, Fondamenta Cannaregio 1105. Il programma pubblica visite guidate in varie lingue; tra quelle rivolte anche al pubblico internazionale risultano il 14 ottobre alle 15:30 in italiano e inglese e il 18 ottobre alle 10:30 in inglese. Prenotazione richiesta: controlla sempre la disponibilità ufficiale.'],
      ['Geographies of Tableware a Ca’ Pesaro','La mostra “Geographies of Tableware – Contemporary Design between Europe and Asia” è al Museo d’Arte Orientale di Ca’ Pesaro dal 29 settembre all’8 novembre 2026, 10:00–17:00, lunedì chiuso, con accesso tramite biglietto del museo. Il calendario VDW include anche visite guidate: prima di partire verifica data, lingua e prenotazione nella scheda ufficiale aggiornata.'],
      ['I DON’T SHINE, I HAVE SOMETHING TO SAY','La mostra dedicata al gioiello contemporaneo è alla Fondazione Querini Stampalia, Wonder Q Room / Libreria Giovanni, Castello 5252, dal 9 al 25 ottobre. Orari pubblicati: 10:00–12:00 e 13:00–18:00, da martedì a domenica; lunedì chiuso. Ingresso libero. L’incontro con i designer è indicato per l’11 ottobre alle 10:30.'],
      ['Due workshop FabLab Venezia in terraferma','Per chi soggiorna a Marghera sono interessanti anche due workshop a Mestre, presso The HuB – Human Bits, con ingresso da Corte Legrenzi: FabLab Venezia x Plug&Display il 12 ottobre alle 18:00 e FabLab Venezia x Crash Baggage il 13 ottobre alle 17:00. Entrambi prevedono registrazione: controlla la disponibilità sul sito ufficiale.'],
      ['Come costruire un itinerario senza rincorrere il calendario','Se vuoi seguire appuntamenti in inglese, combina una mostra con una visita guidata già dichiarata bilingue o English-only e lascia margine per gli spostamenti. Le attività con Reservation/Registration vanno controllate poco prima della visita: non riportiamo disponibilità residua o stati dinamici.']
    ],
    tip:'Per Venice Design Week conviene partire dalla lingua: scegli prima gli appuntamenti dichiarati in inglese o bilingui, poi raggruppali per zona. Il calendario ufficiale è in evoluzione, quindi ricontrolla prenotazioni e orari il giorno precedente.',
    sectionLinks:[
      {section:4,text:'Per preparare la visita al museo consulta anche la nostra guida a ',label:'Ca’ Pesaro',href:caPesaro.it,tail:'.'},
      {section:5,text:'Per la sede e le informazioni pratiche puoi leggere anche la guida alla ',label:'Fondazione Querini Stampalia',href:querini.it,tail:'.'},
      {section:7,text:'Per organizzare gli spostamenti consulta ',label:'come raggiungere Venezia da Marghera',href:'/come-raggiungere-venezia',tail:'.'}
    ],
    dateModified:'2026-09-27'
  },
  en:{
    description:'Venice Design Week 2026 runs 9–18 October: a visitor-focused guide to the programme, exhibitions, English guided tours, reservations and selected workshops.',
    lead:'Venice Design Week returns from 9 to 18 October 2026 with the theme “100” and a city-wide programme of exhibitions, guided tours, meetings and workshops. The operational calendar is now online; this guide selects the most useful entries for international visitors, with particular attention to English-language events, reservations and practical routing.',
    sections:[
      ['The “100” theme and a city-wide Design Week','Venice Design Week uses Venice as a network of venues rather than a single fair hall. In 2026 the theme “100” connects exhibitions, talks, guided tours and workshops from 9 to 18 October. For visitors, the easiest strategy is to combine a few events by area, language and timing.'],
      ['9 October: official presentation at IUAV','The Venice Design Week 2026 presentation is scheduled for Friday 9 October at 11:00 AM in the Aula Magna, Tolentini – IUAV, Santa Croce 191. It is a useful starting point for understanding the theme and planning the rest of the programme.'],
      ['VDW Interior Design – Home Accessories','The exhibition at Combo Venezia, Campo dei Gesuiti 4878, runs 9–18 October, daily 10:00 AM–1:00 PM and 2:00–6:00 PM. Two published guided tours are especially useful for international visitors: 9 October at 3:00 PM in Italian and English, and 16 October at 12:00 PM in English. Reservation is required; check current availability on the official website.'],
      ['VDW Light Selection at Palazzo Nani','VDW Light Selection is hosted on the piano nobile of Palazzo Nani – Radisson Collection Hotel, Fondamenta Cannaregio 1105. Published tours include 14 October at 3:30 PM in Italian and English and 18 October at 10:30 AM in English. Reservation is required, so verify availability before your visit.'],
      ['Geographies of Tableware at Ca’ Pesaro','“Geographies of Tableware – Contemporary Design between Europe and Asia” is at the Museum of Oriental Art, Ca’ Pesaro, from 29 September to 8 November 2026, 10:00 AM–5:00 PM, closed Mondays, with museum ticket required. VDW also lists guided visits; re-check the current date, language and reservation details before going.'],
      ['I DON’T SHINE, I HAVE SOMETHING TO SAY','This contemporary jewellery exhibition is at Fondazione Querini Stampalia, Wonder Q Room / Libreria Giovanni, Castello 5252, from 9 to 25 October. Published hours are 10:00 AM–12:00 PM and 1:00–6:00 PM, Tuesday to Sunday; closed Monday. Admission is free. Meet the Designers is listed for 11 October at 10:30 AM.'],
      ['Two FabLab Venezia workshops in Mestre','Two workshops are particularly convenient for guests based in Marghera: FabLab Venezia x Plug&Display on 12 October at 6:00 PM and FabLab Venezia x Crash Baggage on 13 October at 5:00 PM, both at The HuB – Human Bits in Mestre, entrance from Corte Legrenzi. Registration is required; check availability on the official website.'],
      ['Build an itinerary without chasing the whole calendar','If English is important, start with events explicitly listed as English or bilingual, then group them by area. Any activity marked Reservation or Registration should be re-checked close to the date; this guide does not hard-code remaining capacity or live availability.']
    ],
    tip:'For Venice Design Week, start with language: choose English or bilingual events first, then group them by area. The official calendar is still evolving, so re-check reservations and times the day before.',
    sectionLinks:[
      {section:4,text:'For practical museum information, see our guide to ',label:'Ca’ Pesaro',href:caPesaro.en,tail:'.'},
      {section:5,text:'For venue details, see our guide to ',label:'Fondazione Querini Stampalia',href:querini.en,tail:'.'},
      {section:7,text:'For transport planning, see ',label:'how to reach Venice from Marghera',href:'/come-raggiungere-venezia',tail:'.'}
    ],
    dateModified:'2026-09-27'
  },
  de:{
    description:'Venice Design Week 2026 vom 9.–18. Oktober: Besucher-Guide zu Programm, Ausstellungen, englischen Führungen, Reservierungen und ausgewählten Workshops.',
    lead:'Die Venice Design Week findet vom 9. bis 18. Oktober 2026 unter dem Thema „100“ statt. Das aktuelle Programm mit Ausstellungen, Führungen, Treffen und Workshops ist inzwischen online. Diese Auswahl richtet sich an internationale Besucher und legt besonderen Wert auf englischsprachige Termine, Reservierungen und gut kombinierbare Orte.',
    sections:[
      ['„100“ und eine über die Stadt verteilte Design Week','Die Venice Design Week findet nicht in einer einzigen Halle statt, sondern an vielen Orten in Venedig. 2026 verbindet das Thema „100“ Ausstellungen, Gespräche, Führungen und Workshops. Für Besucher ist es sinnvoll, wenige Termine nach Viertel, Sprache und Uhrzeit zu kombinieren.'],
      ['9. Oktober: offizielle Präsentation an der IUAV','Die Präsentation der Venice Design Week 2026 ist für Freitag, 9. Oktober, 11:00 Uhr, in der Aula Magna Tolentini der IUAV, Santa Croce 191, angekündigt. Sie eignet sich als Einstieg in Thema und Programm.'],
      ['VDW Interior Design – Home Accessories','Die Ausstellung bei Combo Venezia, Campo dei Gesuiti 4878, läuft vom 9. bis 18. Oktober täglich 10:00–13:00 und 14:00–18:00 Uhr. Für internationale Gäste sind besonders die Führungen am 9. Oktober um 15:00 Uhr auf Italienisch und Englisch sowie am 16. Oktober um 12:00 Uhr auf Englisch interessant. Reservierung erforderlich; Verfügbarkeit auf der offiziellen Website prüfen.'],
      ['VDW Light Selection im Palazzo Nani','VDW Light Selection findet im Palazzo Nani – Radisson Collection Hotel, Fondamenta Cannaregio 1105, statt. Veröffentlicht sind unter anderem eine italienisch-englische Führung am 14. Oktober um 15:30 Uhr und eine englische Führung am 18. Oktober um 10:30 Uhr. Reservierung erforderlich.'],
      ['Geographies of Tableware im Ca’ Pesaro','„Geographies of Tableware – Contemporary Design between Europe and Asia“ ist vom 29. September bis 8. November 2026 im Museum für Orientalische Kunst im Ca’ Pesaro zu sehen: 10:00–17:00 Uhr, montags geschlossen, Eintritt mit Museumsticket. Für Führungen bitte Datum, Sprache und Reservierung aktuell prüfen.'],
      ['I DON’T SHINE, I HAVE SOMETHING TO SAY','Die Ausstellung für zeitgenössischen Schmuck läuft vom 9. bis 25. Oktober in der Fondazione Querini Stampalia, Wonder Q Room / Libreria Giovanni, Castello 5252. Veröffentlicht sind 10:00–12:00 und 13:00–18:00 Uhr, Dienstag bis Sonntag; Montag geschlossen. Eintritt frei. Meet the Designers: 11. Oktober, 10:30 Uhr.'],
      ['Zwei FabLab-Venezia-Workshops in Mestre','Für Gäste in Marghera sind zwei Termine in Mestre praktisch: FabLab Venezia x Plug&Display am 12. Oktober um 18:00 Uhr und FabLab Venezia x Crash Baggage am 13. Oktober um 17:00 Uhr, beide im The HuB – Human Bits mit Eingang von Corte Legrenzi. Registrierung erforderlich.'],
      ['Route nach Sprache und Viertel planen','Wenn Englisch wichtig ist, wählen Sie zuerst ausdrücklich englische oder zweisprachige Termine und gruppieren Sie diese anschließend nach Lage. Bei Reservation/Registration bitte kurz vor dem Termin erneut prüfen; Restplätze werden hier nicht fest eingetragen.']
    ],
    tip:'Beginnen Sie bei der Planung mit der Sprache: zuerst englische oder zweisprachige Termine auswählen, dann nach Viertel kombinieren. Reservierungen und Uhrzeiten am Vortag erneut auf der offiziellen Seite prüfen.',
    sectionLinks:[
      {section:4,text:'Praktische Museumsinformationen finden Sie in unserem Guide zu ',label:'Ca’ Pesaro',href:caPesaro.de,tail:'.'},
      {section:5,text:'Mehr zur Location finden Sie im Guide zur ',label:'Fondazione Querini Stampalia',href:querini.de,tail:'.'},
      {section:7,text:'Für die Anreise lesen Sie ',label:'wie Sie Venedig von Marghera erreichen',href:'/come-raggiungere-venezia',tail:'.'}
    ],dateModified:'2026-09-27'
  },
  fr:{
    description:'Venice Design Week 2026 du 9 au 18 octobre : guide visiteur du programme, expositions, visites en anglais, réservations et ateliers sélectionnés.',
    lead:'Venice Design Week revient du 9 au 18 octobre 2026 avec le thème « 100 » et un programme réparti dans toute la ville. Le calendrier opérationnel est désormais en ligne : cette sélection privilégie les rendez-vous utiles aux visiteurs internationaux, notamment les visites en anglais, les réservations et les lieux faciles à combiner.',
    sections:[
      ['Le thème « 100 » et une Design Week dans toute la ville','Venice Design Week transforme Venise en réseau de lieux plutôt qu’en salon unique. En 2026, le thème « 100 » relie expositions, rencontres, visites et ateliers. Pour une visite efficace, mieux vaut choisir quelques rendez-vous selon le quartier, la langue et l’horaire.'],
      ['9 octobre : présentation officielle à l’IUAV','La présentation de Venice Design Week 2026 est annoncée vendredi 9 octobre à 11 h dans l’Aula Magna Tolentini de l’IUAV, Santa Croce 191. C’est un bon point de départ pour comprendre le thème et organiser la suite.'],
      ['VDW Interior Design – Home Accessories','L’exposition à Combo Venezia, Campo dei Gesuiti 4878, est ouverte du 9 au 18 octobre, tous les jours de 10 h à 13 h et de 14 h à 18 h. Deux visites intéressent particulièrement le public international : le 9 octobre à 15 h en italien et anglais, et le 16 octobre à 12 h en anglais. Réservation requise : vérifiez la disponibilité officielle.'],
      ['VDW Light Selection au Palazzo Nani','VDW Light Selection se tient au Palazzo Nani – Radisson Collection Hotel, Fondamenta Cannaregio 1105. Le programme publie notamment une visite bilingue italien-anglais le 14 octobre à 15 h 30 et une visite en anglais le 18 octobre à 10 h 30. Réservation requise.'],
      ['Geographies of Tableware à Ca’ Pesaro','« Geographies of Tableware – Contemporary Design between Europe and Asia » est présentée au Musée d’Art oriental de Ca’ Pesaro du 29 septembre au 8 novembre 2026, de 10 h à 17 h, fermé le lundi, avec billet du musée. Pour les visites guidées, vérifiez la date, la langue et la réservation actuelles.'],
      ['I DON’T SHINE, I HAVE SOMETHING TO SAY','Cette exposition de bijou contemporain se tient à la Fondazione Querini Stampalia, Wonder Q Room / Libreria Giovanni, Castello 5252, du 9 au 25 octobre. Horaires publiés : 10 h–12 h et 13 h–18 h, du mardi au dimanche ; fermé lundi. Entrée libre. Meet the Designers est annoncé le 11 octobre à 10 h 30.'],
      ['Deux ateliers FabLab Venezia à Mestre','Deux ateliers sont pratiques depuis Marghera : FabLab Venezia x Plug&Display le 12 octobre à 18 h et FabLab Venezia x Crash Baggage le 13 octobre à 17 h, tous deux à The HuB – Human Bits à Mestre, entrée par Corte Legrenzi. Inscription requise.'],
      ['Construire un itinéraire sans courir après tout le calendrier','Si l’anglais est important, commencez par les rendez-vous explicitement en anglais ou bilingues, puis regroupez-les par zone. Pour toute activité avec Reservation/Registration, vérifiez les informations peu avant la visite ; nous ne figeons pas les places restantes.']
    ],
    tip:'Commencez par la langue : choisissez d’abord les visites en anglais ou bilingues, puis regroupez-les par quartier. Le calendrier évolue encore ; revérifiez réservations et horaires la veille.',
    sectionLinks:[
      {section:4,text:'Pour les informations pratiques du musée, consultez notre guide de ',label:'Ca’ Pesaro',href:caPesaro.fr,tail:'.'},
      {section:5,text:'Pour préparer la visite du lieu, consultez notre guide de la ',label:'Fondazione Querini Stampalia',href:querini.fr,tail:'.'},
      {section:7,text:'Pour les transports, consultez ',label:'comment rejoindre Venise depuis Marghera',href:'/come-raggiungere-venezia',tail:'.'}
    ],dateModified:'2026-09-27'
  },
  es:{
    description:'Venice Design Week 2026, del 9 al 18 de octubre: guía para visitantes con programa, exposiciones, visitas en inglés, reservas y talleres seleccionados.',
    lead:'Venice Design Week vuelve del 9 al 18 de octubre de 2026 con el tema “100” y un programa repartido por la ciudad. El calendario operativo ya está publicado: esta selección está pensada para visitantes internacionales, con especial atención a actividades en inglés, reservas y sedes fáciles de combinar.',
    sections:[
      ['El tema “100” y una Design Week repartida por Venecia','Venice Design Week utiliza la ciudad como una red de sedes en lugar de concentrarse en un único recinto. En 2026 el tema “100” conecta exposiciones, encuentros, visitas y talleres. Para un visitante conviene elegir pocos eventos según zona, idioma y horario.'],
      ['9 de octubre: presentación oficial en IUAV','La presentación de Venice Design Week 2026 está programada para el viernes 9 de octubre a las 11:00 en el Aula Magna Tolentini de IUAV, Santa Croce 191. Es un buen punto de partida para entender el tema y organizar el resto del programa.'],
      ['VDW Interior Design – Home Accessories','La exposición en Combo Venezia, Campo dei Gesuiti 4878, abre del 9 al 18 de octubre, todos los días de 10:00–13:00 y 14:00–18:00. Para público internacional destacan las visitas del 9 de octubre a las 15:00 en italiano e inglés y del 16 de octubre a las 12:00 en inglés. Reserva obligatoria: comprueba disponibilidad en la web oficial.'],
      ['VDW Light Selection en Palazzo Nani','VDW Light Selection se celebra en Palazzo Nani – Radisson Collection Hotel, Fondamenta Cannaregio 1105. El programa incluye una visita bilingüe italiano-inglés el 14 de octubre a las 15:30 y otra en inglés el 18 de octubre a las 10:30. Reserva obligatoria.'],
      ['Geographies of Tableware en Ca’ Pesaro','“Geographies of Tableware – Contemporary Design between Europe and Asia” está en el Museo de Arte Oriental de Ca’ Pesaro del 29 de septiembre al 8 de noviembre de 2026, 10:00–17:00, cerrado los lunes, con entrada del museo. Para visitas guiadas, revisa fecha, idioma y reserva antes de ir.'],
      ['I DON’T SHINE, I HAVE SOMETHING TO SAY','La exposición de joyería contemporánea está en Fondazione Querini Stampalia, Wonder Q Room / Libreria Giovanni, Castello 5252, del 9 al 25 de octubre. Horario publicado: 10:00–12:00 y 13:00–18:00, de martes a domingo; lunes cerrado. Entrada gratuita. Meet the Designers figura el 11 de octubre a las 10:30.'],
      ['Dos talleres de FabLab Venezia en Mestre','Para quienes se alojan en Marghera resultan cómodos dos talleres en Mestre: FabLab Venezia x Plug&Display el 12 de octubre a las 18:00 y FabLab Venezia x Crash Baggage el 13 de octubre a las 17:00, ambos en The HuB – Human Bits, acceso desde Corte Legrenzi. Requieren registro.'],
      ['Construye la ruta sin perseguir todo el calendario','Si necesitas actividades en inglés, empieza por las indicadas expresamente como English o bilingües y luego agrúpalas por zona. Las actividades con Reservation/Registration deben volver a comprobarse cerca de la fecha; no fijamos aquí plazas restantes.']
    ],
    tip:'Empieza por el idioma: selecciona primero actividades en inglés o bilingües y después agrúpalas por zona. El calendario sigue evolucionando; revisa reservas y horarios el día anterior.',
    sectionLinks:[
      {section:4,text:'Para preparar la visita al museo consulta nuestra guía de ',label:'Ca’ Pesaro',href:caPesaro.es,tail:'.'},
      {section:5,text:'Para la sede consulta también la guía de ',label:'Fondazione Querini Stampalia',href:querini.es,tail:'.'},
      {section:7,text:'Para organizar los desplazamientos consulta ',label:'cómo llegar a Venecia desde Marghera',href:'/come-raggiungere-venezia',tail:'.'}
    ],dateModified:'2026-09-27'
  },
  zh:{
    description:'2026 Venice Design Week 将于10月9日至18日举行：面向游客的节目、展览、英语导览、预约信息与精选工作坊指南。',
    lead:'2026 Venice Design Week 将于10月9日至18日以“100”为主题，在威尼斯多处地点举办展览、导览、交流活动和工作坊。官方实际日程已经上线；本页重点筛选适合国际游客的项目，尤其标明英语活动、预约要求和便于组合的地点。',
    sections:[
      ['“100”主题与分散在全城的设计周','Venice Design Week 并非集中在单一展馆，而是把威尼斯本身作为活动网络。2026年“100”主题贯穿展览、交流、导览和工作坊。游客最适合根据区域、语言和时间选择少量活动组合。'],
      ['10月9日：IUAV 官方开幕介绍','2026 Venice Design Week 介绍活动定于10月9日星期五11:00，在 IUAV Tolentini Aula Magna 举行，地址 Santa Croce 191。适合先了解主题与整体节目，再安排后续路线。'],
      ['VDW Interior Design – Home Accessories','展览地点为 Combo Venezia，Campo dei Gesuiti 4878，10月9日至18日每天10:00–13:00、14:00–18:00开放。对国际游客较方便的导览包括：10月9日15:00意大利语+英语，以及10月16日12:00英语。需要预约，请在官网确认最新余位。'],
      ['Palazzo Nani 的 VDW Light Selection','VDW Light Selection 位于 Palazzo Nani – Radisson Collection Hotel，Fondamenta Cannaregio 1105。已公布的国际游客友好导览包括10月14日15:30意大利语+英语，以及10月18日10:30英语。需要预约。'],
      ['Ca’ Pesaro 的 Geographies of Tableware','“Geographies of Tableware – Contemporary Design between Europe and Asia”在 Ca’ Pesaro 东方艺术博物馆展出，展期2026年9月29日至11月8日，10:00–17:00，周一闭馆，需要博物馆门票。导览日期、语言与预约信息请出发前再次查看官方页面。'],
      ['I DON’T SHINE, I HAVE SOMETHING TO SAY','当代首饰展位于 Fondazione Querini Stampalia 的 Wonder Q Room / Libreria Giovanni，Castello 5252，展期10月9日至25日。公布时间为周二至周日10:00–12:00、13:00–18:00，周一闭馆，免费入场。Meet the Designers 标注为10月11日10:30。'],
      ['Mestre 的两个 FabLab Venezia 工作坊','住在 Marghera 的游客还可考虑 Mestre 的两个活动：FabLab Venezia x Plug&Display，10月12日18:00；FabLab Venezia x Crash Baggage，10月13日17:00。地点均为 The HuB – Human Bits，从 Corte Legrenzi 进入，需要注册。'],
      ['按语言和区域安排路线','如果英语是重要条件，先选择明确标注 English 或双语的项目，再按区域组合。所有标有 Reservation/Registration 的活动都应在临近日期重新确认；本页不会固定显示剩余名额或实时状态。']
    ],
    tip:'先按语言筛选：优先选择英语或双语活动，再按区域组合。官方日程仍可能更新，建议前一天再次确认预约和时间。',
    sectionLinks:[
      {section:4,text:'博物馆实用信息可查看我们的 ',label:'Ca’ Pesaro 指南',href:caPesaro.zh,tail:'。'},
      {section:5,text:'关于场地可查看 ',label:'Fondazione Querini Stampalia 指南',href:querini.zh,tail:'。'},
      {section:7,text:'交通规划可查看 ',label:'从 Marghera 前往威尼斯',href:'/come-raggiungere-venezia',tail:'。'}
    ],dateModified:'2026-09-27'
  }
};
