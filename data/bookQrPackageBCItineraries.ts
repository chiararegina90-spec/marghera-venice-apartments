import type {GuideData} from '@/data/guideTypes';
import type {SiteLang} from '@/lib/i18n';

export const itineraryBookSlugs=["itinerari-venezia-1-7-giorni","venezia-in-un-giorno","venezia-in-due-o-tre-giorni","venezia-in-una-settimana"] as const;
export type ItineraryBookSlug=(typeof itineraryBookSlugs)[number];
type TranslatedCopy=Omit<GuideData,'slug'|'image'|'experiences'|'officialLinks'|'related'>;
const source:Record<ItineraryBookSlug,Record<SiteLang,TranslatedCopy>>={
  "itinerari-venezia-1-7-giorni": {
    "it": {
      "title": "Itinerari a Venezia da 1 a 7 giorni: cosa vedere senza correre",
      "kicker": "Organizza il viaggio · guida ai percorsi",
      "subtitle": "Un piano flessibile per una giornata, un weekend o una settimana fra sestieri, musei, isole e mare.",
      "description": "Itinerari Venezia 1, 2, 3, 4 e 7 giorni: percorsi realistici per San Marco, Rialto, Dorsoduro, Cannaregio, Castello, Murano, Burano, Lido e Pellestrina.",
      "imageAlt": "Venezia dal Canal Grande, punto di partenza degli itinerari",
      "badges": [
        [
          "Durata",
          "1–7 giorni"
        ],
        [
          "Primo giorno",
          "Rialto e San Marco"
        ],
        [
          "Con più tempo",
          "Isole e sestieri"
        ],
        [
          "Aggiornato",
          "6 novembre 2026"
        ]
      ],
      "introTitle": "Quanto tempo serve davvero per vedere Venezia?",
      "intro": [
        "Un giorno basta per incontrare la Venezia monumentale; due o tre permettono di attraversare sestieri differenti; una settimana dà spazio anche alle isole, alla spiaggia e a una gita in Veneto. Il criterio è geografico: accostare luoghi vicini, non rincorrere venti attrazioni.",
        "Questa è la guida generale. Per ogni durata trovi un approfondimento specifico con sequenza delle tappe, alternative per meteo e bambini, e collegamenti a musei e trasporti. I tempi indicati sono di spostamento, non includono le visite e le code.",
        "Se parti da MVA a Marghera puoi arrivare a Piazzale Roma in autobus o a Santa Lucia in treno, lasciando l'auto nel parcheggio privato degli appartamenti."
      ],
      "highlights": [
        [
          "1 giorno · Venezia classica",
          "Piazzale Roma → Canal Grande (linea 2) → Rialto → Mercerie → San Marco; oppure a piedi attraverso Frari e San Polo. Una visita importante, non cinque."
        ],
        [
          "2 giorni · aggiungi Dorsoduro",
          "Dopo i classici dedica una giornata ad Accademia, Zattere, Basilica della Salute e Punta della Dogana. Cultura e passeggiata sono alternative, non obblighi."
        ],
        [
          "3 giorni · laguna o Cannaregio",
          "Scegli una giornata Murano e Burano, con Torcello solo se hai tempo, oppure Ghetto, Fondamenta della Misericordia e Santa Maria dell'Orto."
        ],
        [
          "4 giorni · tempo per osservare",
          "Approfondisci Cannaregio o il sestiere rimasto più interessante, senza dover replicare il programma dei primi giorni."
        ],
        [
          "5 giorni · Castello",
          "Arsenale dall'esterno, Via Garibaldi, Giardini e Sant'Elena; la Biennale può cambiare accessi e tempi."
        ],
        [
          "6 giorni · mare e isole",
          "Lido in bici, Pellestrina e Murazzi (una giornata impegnativa) oppure Sant'Erasmo: serve verificare il collegamento nave."
        ],
        [
          "7 giorni · Veneto vicino",
          "Treviso, Padova o Riviera del Brenta. Una gita con tempi veri di trasferimento, non tre città nella stessa giornata."
        ]
      ],
      "itinerary": [
        [
          "Giorno 1",
          "Rialto e San Marco",
          "Scegli acqua o Frari per iniziare; una sola grande visita prenotata ti lascia tempo per capire la città."
        ],
        [
          "Giorno 2",
          "Dorsoduro",
          "Ponte dell'Accademia, museo se scelto, Zattere, Salute e Punta della Dogana."
        ],
        [
          "Giorno 3",
          "Isole oppure Cannaregio",
          "Murano e Burano richiedono navigazione; l'alternativa in città è un percorso meno affollato."
        ],
        [
          "Giorno 4",
          "Rallenta a Cannaregio",
          "Ghetto, canali, botteghe e fondamente, con pausa lunga."
        ],
        [
          "Giorno 5",
          "Castello",
          "Da Arsenale a Giardini e Sant'Elena, scegliendo le soste."
        ],
        [
          "Giorno 6",
          "Litorale",
          "Lido in bici o Pellestrina tramite ferry linea 11; niente bici nel centro storico."
        ],
        [
          "Giorno 7",
          "Un'altra città del Veneto",
          "Padova o Treviso, oppure un giorno libero per tornare nel sestiere preferito."
        ]
      ],
      "adviceTitle": "Non confondere spostamento e visita",
      "advice": "Il tragitto Piazzale Roma–Rialto–San Marco può richiedere circa 40 minuti di movimento effettivo con collegamenti favorevoli, ma non comprende attese, controlli, ingressi, pranzo e fotografie. Per le isole considera sempre il rientro. Non fare dipendere il piano da un numero fisso di minuti.",
      "heartTitle": "Venezia senza telefono, ogni tanto",
      "heartText": "Usa la guida e i QR per organizzarti, poi riponi il telefono: l'itinerario è una traccia, non un ordine da eseguire. Per percorsi senza barriere consulta la guida dedicata e i canali ufficiali.",
      "faq": [
        [
          "Quanti giorni sono ideali per Venezia?",
          "Tre giorni permettono un primo equilibrio tra centro, Dorsoduro e isole oppure Cannaregio; sette giorni sono utili per esplorare anche litorale e Veneto."
        ],
        [
          "Si possono vedere Murano e Burano nello stesso giorno?",
          "Sì, ma calcola trasferimenti e visite. A Murano le dimostrazioni in fornace sono spesso più pratiche al mattino; Burano merita tempo."
        ],
        [
          "Meglio un pass ACTV di 24 ore?",
          "Dipende dal numero di spostamenti in vaporetto, non dalla durata totale del soggiorno. Confronta corse singole e pass."
        ],
        [
          "Questi percorsi sono accessibili?",
          "Venezia ha molti ponti. Verifica le mappe accessibili e gli approdi ACTV prima di scegliere le tappe."
        ]
      ]
    },
    "en": {
      "title": "Venice itineraries for 1–7 days: what to see at a relaxed pace",
      "kicker": "Plan your stay · routes",
      "subtitle": "Flexible routes for a day, a long weekend or a week among neighbourhoods, museums, islands and sea.",
      "description": "Venice 1, 2, 3 and 7 day itineraries: Rialto, St Mark's, Dorsoduro, Cannaregio, Castello, Murano, Burano, Lido and Pellestrina.",
      "imageAlt": "The Grand Canal, starting point for Venice itineraries",
      "badges": [
        [
          "Trip length",
          "1–7 days"
        ],
        [
          "First day",
          "Rialto and St Mark's"
        ],
        [
          "More time",
          "Islands and districts"
        ],
        [
          "Updated",
          "6 November 2026"
        ]
      ],
      "introTitle": "How many days does Venice really need?",
      "intro": [
        "One day introduces the landmarks; two or three days reveal different sestieri; a week leaves room for lagoon islands, beaches and Veneto day trips. Group places geographically instead of chasing a checklist.",
        "This is your overview. Each main duration links to its own detailed route and realistic alternatives for weather, families and museums. Walking and boat times do not include queues or visits.",
        "From MVA in Marghera you can reach Piazzale Roma by bus or Venezia Santa Lucia by train, leaving your car at your apartment."
      ],
      "highlights": [
        [
          "1 day · the classics",
          "Piazzale Roma → line 2 on the Grand Canal → Rialto → Mercerie → St Mark's; or walk via the Frari and San Polo."
        ],
        [
          "2 days · Dorsoduro",
          "Add Accademia, Zattere, Santa Maria della Salute and Punta della Dogana."
        ],
        [
          "3 days · islands or Cannaregio",
          "Murano and Burano, with Torcello only if time allows; or the Jewish Ghetto and Misericordia."
        ],
        [
          "4 days · slow down",
          "Explore Cannaregio or return to a favourite sestiere without rushing."
        ],
        [
          "5 days · Castello",
          "Arsenale, Via Garibaldi, Giardini and Sant'Elena; Biennale schedules affect access."
        ],
        [
          "6 days · the coast",
          "Cycle on the Lido; Pellestrina and the Murazzi demand a long day; Sant'Erasmo is another option."
        ],
        [
          "7 days · Veneto",
          "Choose one nearby city, such as Padua or Treviso, not several in one day."
        ]
      ],
      "itinerary": [
        [
          "Day 1",
          "Rialto and St Mark's",
          "Choose a Grand Canal arrival or a walk via the Frari and plan one major visit."
        ],
        [
          "Day 2",
          "Dorsoduro",
          "Accademia bridge, museum if desired, Zattere, Salute and Punta della Dogana."
        ],
        [
          "Day 3",
          "Islands or Cannaregio",
          "Allow for boats and return journeys, or walk through quieter neighbourhoods."
        ],
        [
          "Day 4",
          "Cannaregio",
          "Ghetto, canals, shops and a leisurely meal."
        ],
        [
          "Day 5",
          "Castello",
          "From the Arsenale to Giardini and Sant'Elena."
        ],
        [
          "Day 6",
          "Lido or Pellestrina",
          "Cycling is allowed on the islands but not in historic central Venice."
        ],
        [
          "Day 7",
          "A Veneto excursion",
          "Padua or Treviso, or keep one flexible day in Venice."
        ]
      ],
      "adviceTitle": "Travel time is not visiting time",
      "advice": "Piazzale Roma–Rialto–St Mark's may take about 40 minutes of actual movement under favourable connections, excluding boat waits, queues and sightseeing. Allow return-boat margins for islands.",
      "heartTitle": "Put your phone away sometimes",
      "heartText": "Use QR links to plan, then enjoy the city without constantly checking a screen. For step-free routes consult official accessibility information.",
      "faq": [
        [
          "How many days do I need?",
          "Three days provide a balanced introduction; a week lets you explore the lagoon and Veneto."
        ],
        [
          "Can I see Murano and Burano in one day?",
          "Yes, with transport and visiting time; mornings usually work well for Murano glass demonstrations."
        ],
        [
          "Should I buy a 24-hour ACTV pass?",
          "Compare planned boat trips with single fares; the best choice depends on your route."
        ],
        [
          "Are these routes wheelchair accessible?",
          "Not necessarily: bridges are frequent. Check the official accessibility map and ACTV service."
        ]
      ]
    },
    "de": {
      "title": "Venedig-Reiserouten für 1 bis 7 Tage: entspannt entdecken",
      "kicker": "Reiseplanung · Rundgänge",
      "subtitle": "Flexible Tagespläne für Highlights, Inseln, Museen und Meer.",
      "description": "Venedig in 1, 2, 3 oder 7 Tagen: Rialto, Markusplatz, Dorsoduro, Cannaregio, Castello, Murano, Burano und Lido.",
      "imageAlt": "Canal Grande als Ausgangspunkt der Venedig-Rundgänge",
      "badges": [
        [
          "Dauer",
          "1–7 Tage"
        ],
        [
          "Erster Tag",
          "Rialto & Markusplatz"
        ],
        [
          "Mehr Zeit",
          "Inseln und Viertel"
        ],
        [
          "Geprüft",
          "6. November 2026"
        ]
      ],
      "introTitle": "Wie viele Tage braucht man für Venedig?",
      "intro": [
        "Ein Tag reicht für einen ersten Eindruck. Zwei oder drei Tage erschließen verschiedene Stadtteile; eine Woche bietet zusätzlich Zeit für die Lagune und Ausflüge ins Veneto.",
        "Hier finden Sie den Überblick; die einzelnen Rundgänge beschreiben sinnvolle Abfolgen ohne überladene Checklisten. Geh- und Fahrzeiten schließen Wartezeiten und Besichtigungen nicht ein.",
        "Von den MVA-Apartments in Marghera fährt man mit Bus oder Bahn nach Venedig und lässt das Auto am Apartment."
      ],
      "highlights": [
        [
          "1 Tag · Klassiker",
          "Piazzale Roma → Linie 2 auf dem Canal Grande → Rialto → Mercerie → Markusplatz oder zu Fuß über die Frari."
        ],
        [
          "2 Tage · Dorsoduro",
          "Accademia, Zattere, Salute und Punta della Dogana."
        ],
        [
          "3 Tage · Inseln oder Cannaregio",
          "Murano und Burano oder Ghetto und Fondamenta della Misericordia."
        ],
        [
          "4 Tage · bewusst langsam",
          "Cannaregio, kleine Kanäle und längere Pausen."
        ],
        [
          "5 Tage · Castello",
          "Arsenale, Via Garibaldi, Giardini und Sant'Elena."
        ],
        [
          "6 Tage · Lido und Meer",
          "Radtour auf dem Lido oder Ausflug nach Pellestrina."
        ],
        [
          "7 Tage · Veneto",
          "Padua oder Treviso als einzelner Tagesausflug."
        ]
      ],
      "itinerary": [
        [
          "Tag 1",
          "Rialto und Markusplatz",
          "Den Canal Grande vom Wasser aus erleben oder über San Polo zu Fuß gehen."
        ],
        [
          "Tag 2",
          "Dorsoduro",
          "Museen und Spaziergang zur Salute; nur die Lieblingsorte besuchen."
        ],
        [
          "Tag 3",
          "Lagune oder Cannaregio",
          "Schiffszeiten und Rückfahrt einplanen."
        ],
        [
          "Tag 4",
          "Cannaregio",
          "Ghetto und ruhige Fondamente."
        ],
        [
          "Tag 5",
          "Castello",
          "Arsenale, Giardini und Sant'Elena."
        ],
        [
          "Tag 6",
          "Lido oder Pellestrina",
          "Radfahren auf den Inseln, nicht in der historischen Altstadt."
        ],
        [
          "Tag 7",
          "Ausflug oder freier Tag",
          "Padua, Treviso oder ohne festen Plan in Venedig bleiben."
        ]
      ],
      "adviceTitle": "Fahrzeit ist keine Besuchszeit",
      "advice": "Für Piazzale Roma–Rialto–Markusplatz können etwa 40 Minuten reine Fortbewegung ausreichen. Wartezeiten, Besichtigungen und Essen dauern zusätzlich.",
      "heartTitle": "Nicht nur aufs Handy schauen",
      "heartText": "QR-Links sind zum Planen da. Danach lohnt es sich, die Stadt in Ruhe zu erleben. Barrierefreie Wege vorher offiziell prüfen.",
      "faq": [
        [
          "Wie viele Tage sind ideal?",
          "Drei Tage für einen ersten Überblick, sieben für Lagune und Venetien."
        ],
        [
          "Murano und Burano an einem Tag?",
          "Ja, mit genügend Zeit für Fähren und Besuche; die Glasvorführungen auf Murano lieber vormittags."
        ],
        [
          "Ist eine ACTV-Tageskarte sinnvoll?",
          "Das hängt von der Anzahl der Fahrten ab."
        ],
        [
          "Sind alle Routen barrierefrei?",
          "Nein. Wegen der Brücken bitte die offiziellen Karten prüfen."
        ]
      ]
    },
    "fr": {
      "title": "Venise en 1 à 7 jours : itinéraires pour visiter sans courir",
      "kicker": "Préparer son séjour · parcours",
      "subtitle": "Des journées souples entre monuments, quartiers, musées, îles et mer.",
      "description": "Itinéraires Venise 1, 2, 3 et 7 jours : Rialto, Saint-Marc, Dorsoduro, Cannaregio, Castello, Murano, Burano, Lido et Pellestrina.",
      "imageAlt": "Grand Canal de Venise, départ des itinéraires",
      "badges": [
        [
          "Durée",
          "1–7 jours"
        ],
        [
          "Premier jour",
          "Rialto et Saint-Marc"
        ],
        [
          "Plus de temps",
          "Îles et quartiers"
        ],
        [
          "Vérifié",
          "6 novembre 2026"
        ]
      ],
      "introTitle": "Combien de jours pour découvrir Venise ?",
      "intro": [
        "Une journée permet de découvrir les incontournables ; deux ou trois offrent plusieurs quartiers ; une semaine laisse de la place à la lagune, à la mer et à la Vénétie.",
        "Ce guide présente le panorama général. Les itinéraires détaillés privilégient les étapes proches plutôt qu'une course aux monuments. Les temps de trajet n'incluent ni visites ni attente.",
        "Depuis MVA à Marghera, rejoignez Piazzale Roma en bus ou Venezia Santa Lucia en train en laissant la voiture à l'appartement."
      ],
      "highlights": [
        [
          "1 jour · classiques",
          "Piazzale Roma → ligne 2 sur le Grand Canal → Rialto → Mercerie → Saint-Marc, ou promenade par les Frari."
        ],
        [
          "2 jours · Dorsoduro",
          "Accademia, Zattere, Salute et Punta della Dogana."
        ],
        [
          "3 jours · îles ou Cannaregio",
          "Murano et Burano, avec Torcello en option, ou Ghetto et Misericordia."
        ],
        [
          "4 jours · ralentir",
          "Cannaregio, petits canaux et pauses."
        ],
        [
          "5 jours · Castello",
          "Arsenale, Via Garibaldi, Giardini et Sant'Elena."
        ],
        [
          "6 jours · littoral",
          "Vélo au Lido ou excursion à Pellestrina et aux Murazzi."
        ],
        [
          "7 jours · Vénétie",
          "Padoue ou Trévise, une seule ville dans la journée."
        ]
      ],
      "itinerary": [
        [
          "Jour 1",
          "Rialto et Saint-Marc",
          "Vaporetto sur le Grand Canal ou promenade via San Polo."
        ],
        [
          "Jour 2",
          "Dorsoduro",
          "Accademia, Zattere et Salute, avec un musée au choix."
        ],
        [
          "Jour 3",
          "Îles ou Cannaregio",
          "Prévoir les bateaux, les visites et le retour."
        ],
        [
          "Jour 4",
          "Cannaregio",
          "Ghetto, fondamente et pause gourmande."
        ],
        [
          "Jour 5",
          "Castello",
          "Arsenale, Giardini et Sant'Elena."
        ],
        [
          "Jour 6",
          "Lido ou Pellestrina",
          "Vélo possible sur les îles mais interdit dans le centre historique."
        ],
        [
          "Jour 7",
          "Excursion ou journée libre",
          "Padoue, Trévise ou retour au quartier préféré."
        ]
      ],
      "adviceTitle": "Temps de trajet ≠ temps de visite",
      "advice": "Environ 40 minutes de déplacement effectif peuvent suffire pour Piazzale Roma–Rialto–Saint-Marc avec de bonnes correspondances, sans attente, visite ou repas.",
      "heartTitle": "Parfois, rangez le téléphone",
      "heartText": "Utilisez les QR pour préparer vos visites, puis laissez de la place aux découvertes. Pour l'accessibilité, vérifiez les parcours officiels.",
      "faq": [
        [
          "Combien de jours prévoir ?",
          "Trois jours donnent un premier aperçu équilibré ; une semaine permet d'explorer aussi la lagune."
        ],
        [
          "Murano et Burano en un jour ?",
          "Oui, en prévoyant les trajets et les visites, idéalement Murano le matin."
        ],
        [
          "Le pass ACTV 24 heures vaut-il le coup ?",
          "Comparez le nombre de trajets réellement prévu."
        ],
        [
          "Les itinéraires sont-ils accessibles ?",
          "Pas tous : les ponts sont fréquents. Consultez les cartes officielles."
        ]
      ]
    },
    "es": {
      "title": "Venecia en 1 a 7 días: itinerarios sin prisas",
      "kicker": "Planifica el viaje · rutas",
      "subtitle": "Planes flexibles para monumentos, barrios, museos, islas y mar.",
      "description": "Itinerarios Venecia 1, 2, 3 y 7 días: Rialto, San Marcos, Dorsoduro, Cannaregio, Castello, Murano, Burano y Lido.",
      "imageAlt": "Gran Canal de Venecia, comienzo de los itinerarios",
      "badges": [
        [
          "Duración",
          "1–7 días"
        ],
        [
          "Primer día",
          "Rialto y San Marcos"
        ],
        [
          "Más tiempo",
          "Islas y barrios"
        ],
        [
          "Revisado",
          "6 noviembre 2026"
        ]
      ],
      "introTitle": "¿Cuántos días necesitas para Venecia?",
      "intro": [
        "Un día alcanza para conocer los iconos; con dos o tres puedes explorar distintos barrios; una semana da tiempo para islas, playa y excursiones a Véneto.",
        "Esta es la visión general. Cada duración tiene una ruta propia con etapas próximas y alternativas realistas. Los tiempos de desplazamiento no incluyen visitas ni esperas.",
        "Desde MVA en Marghera puedes llegar en autobús a Piazzale Roma o en tren a Venezia Santa Lucia dejando el coche en el apartamento."
      ],
      "highlights": [
        [
          "1 día · los clásicos",
          "Piazzale Roma → línea 2 por el Gran Canal → Rialto → Mercerie → San Marcos; o a pie pasando por Frari."
        ],
        [
          "2 días · Dorsoduro",
          "Accademia, Zattere, Salute y Punta della Dogana."
        ],
        [
          "3 días · islas o Cannaregio",
          "Murano y Burano, Torcello opcional, o el Gueto y Misericordia."
        ],
        [
          "4 días · con calma",
          "Cannaregio, canales tranquilos y descansos."
        ],
        [
          "5 días · Castello",
          "Arsenale, Via Garibaldi, Giardini y Sant'Elena."
        ],
        [
          "6 días · costa",
          "Bicicleta en Lido o excursión a Pellestrina y los Murazzi."
        ],
        [
          "7 días · Véneto",
          "Padua o Treviso: una ciudad, no tres en una jornada."
        ]
      ],
      "itinerary": [
        [
          "Día 1",
          "Rialto y San Marcos",
          "Gran Canal en vaporetto o paseo por San Polo."
        ],
        [
          "Día 2",
          "Dorsoduro",
          "Accademia, Zattere, Salute y un museo elegido."
        ],
        [
          "Día 3",
          "Islas o Cannaregio",
          "Considera barcos, visitas y regreso."
        ],
        [
          "Día 4",
          "Cannaregio",
          "Gueto, canales y una pausa larga."
        ],
        [
          "Día 5",
          "Castello",
          "Arsenale, Giardini y Sant'Elena."
        ],
        [
          "Día 6",
          "Lido o Pellestrina",
          "Se permite ir en bici en las islas, no en el centro histórico."
        ],
        [
          "Día 7",
          "Excursión o día libre",
          "Padua, Treviso o más Venecia."
        ]
      ],
      "adviceTitle": "Moverse no es lo mismo que visitar",
      "advice": "Piazzale Roma–Rialto–San Marcos puede llevar unos 40 minutos de desplazamiento efectivo con buenas conexiones, sin contar esperas, monumentos ni comida.",
      "heartTitle": "Guarda el móvil por momentos",
      "heartText": "Usa los QR para organizarte y después disfruta de la ciudad sin mirar la pantalla constantemente. Consulta rutas accesibles oficiales.",
      "faq": [
        [
          "¿Cuántos días son ideales?",
          "Tres días permiten ver el centro y elegir islas; una semana abre opciones en Véneto."
        ],
        [
          "¿Murano y Burano en un día?",
          "Sí, con tiempo para barcos y visitas; Murano suele encajar mejor por la mañana."
        ],
        [
          "¿Compensa un pase ACTV?",
          "Depende de tus desplazamientos reales."
        ],
        [
          "¿Son rutas accesibles?",
          "No todas: consulta la información oficial sobre puentes y transporte."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯1至7日游路线：不赶时间的旅行安排",
      "kicker": "行程规划 · 步行与水上巴士",
      "subtitle": "按天数选择圣马可、里亚托、艺术区、潟湖岛屿与海滨。",
      "description": "威尼斯1、2、3、7日游路线：里亚托、圣马可、Dorsoduro、Cannaregio、Castello、Murano、Burano、Lido及Pellestrina。",
      "imageAlt": "威尼斯大运河：各条游览路线的起点",
      "badges": [
        [
          "游玩天数",
          "1–7天"
        ],
        [
          "首日",
          "里亚托与圣马可"
        ],
        [
          "深度游",
          "岛屿与街区"
        ],
        [
          "核查",
          "2026年11月6日"
        ]
      ],
      "introTitle": "威尼斯需要玩几天？",
      "intro": [
        "一天能感受经典地标，两三天可深入不同街区，一周则可以安排潟湖岛屿、海滨与威尼托周边城市。按地理位置组织景点，而不是不断赶路。",
        "这是路线总览，每种天数还有专门的详细指南。船程和步行时间不包括候船、排队及参观。",
        "住在 Marghera 的 MVA 公寓，可乘公交到 Piazzale Roma 或火车到 Santa Lucia，汽车留在公寓停车场。"
      ],
      "highlights": [
        [
          "1天·经典路线",
          "Piazzale Roma → 2号船经大运河 → Rialto → Mercerie → 圣马可；或步行经过 Frari 教堂。"
        ],
        [
          "2天·Dorsoduro",
          "Accademia、Zattere、Salute 和 Punta della Dogana。"
        ],
        [
          "3天·岛屿或 Cannaregio",
          "Murano 与 Burano；时间充裕可加 Torcello；或选择犹太区与 Misericordia。"
        ],
        [
          "4天·放慢脚步",
          "Cannaregio 运河、街巷和长时间休息。"
        ],
        [
          "5天·Castello",
          "Arsenale、Via Garibaldi、Giardini 与 Sant’Elena。"
        ],
        [
          "6天·海滨",
          "Lido 骑车，或 Pellestrina 和 Murazzi 一日游。"
        ],
        [
          "7天·周边城市",
          "Padova 或 Treviso，一天只选一处。"
        ]
      ],
      "itinerary": [
        [
          "第1天",
          "Rialto 与圣马可",
          "坐船欣赏大运河，或经 San Polo 步行。"
        ],
        [
          "第2天",
          "Dorsoduro",
          "Accademia、Zattere、Salute 和一座喜欢的博物馆。"
        ],
        [
          "第3天",
          "岛屿或 Cannaregio",
          "留足船程、参观及返程时间。"
        ],
        [
          "第4天",
          "Cannaregio",
          "犹太区、宁静运河与慢节奏午餐。"
        ],
        [
          "第5天",
          "Castello",
          "Arsenale、Giardini 和 Sant’Elena。"
        ],
        [
          "第6天",
          "Lido 或 Pellestrina",
          "岛上可以骑车，威尼斯历史中心禁止骑车。"
        ],
        [
          "第7天",
          "周边一日游或自由活动",
          "Padova、Treviso 或重访喜欢的街区。"
        ]
      ],
      "adviceTitle": "交通时间不等于游览时间",
      "advice": "条件理想时 Piazzale Roma–Rialto–圣马可实际移动时间可能约40分钟，但不包括候船、排队、景点游览和吃饭。",
      "heartTitle": "偶尔把手机收起来",
      "heartText": "使用二维码规划后，也请享受不看屏幕的威尼斯。无障碍路线需事先查询官方地图。",
      "faq": [
        [
          "安排几天最好？",
          "三天适合初访，七天还能探索海岛和周边地区。"
        ],
        [
          "一天去 Murano 和 Burano 可以吗？",
          "可以，但须考虑航行及参观时间；Murano 的玻璃工坊通常上午更适合参观。"
        ],
        [
          "应买 ACTV 一日票吗？",
          "按实际船次比较单程票与通票。"
        ],
        [
          "路线适合轮椅吗？",
          "部分桥梁不适合，需查官方无障碍地图。"
        ]
      ]
    }
  },
  "venezia-in-un-giorno": {
    "it": {
      "title": "Venezia in un giorno: due itinerari a piedi e in vaporetto",
      "kicker": "Itinerario · 1 giorno",
      "subtitle": "Da Rialto a San Marco sull'acqua, oppure passeggiando dai Frari: scegli il ritmo giusto.",
      "description": "Cosa vedere a Venezia in un giorno: percorso A linea 2 Piazzale Roma–Rialto–San Marco, percorso B Frari e San Polo, Accademia e Dorsoduro opzionali.",
      "imageAlt": "Ponte di Rialto sul Canal Grande, un classico di Venezia in un giorno",
      "badges": [
        [
          "Durata",
          "Una giornata"
        ],
        [
          "Percorso A",
          "Canal Grande"
        ],
        [
          "Percorso B",
          "Frari e San Polo"
        ],
        [
          "Consiglio",
          "Una grande visita"
        ]
      ],
      "introTitle": "Il percorso giusto non è quello con più fermate",
      "intro": [
        "Piazza San Marco, Ponte di Rialto e un tratto di Canal Grande sono un buon primo incontro. Non cercare di aggiungere per forza Palazzo Ducale, Basilica, Murano e Burano: tra ingressi, attese e navigazione rischieresti di passare la giornata a guardare l'orologio.",
        "Percorso A: se arrivi a Piazzale Roma sali sulla linea 2 direzione Rialto, osservando il Canal Grande dall'acqua. Scendi a Rialto, attraversa il ponte, segui le Mercerie e arriva in Piazza San Marco e sulla Riva degli Schiavoni.",
        "Percorso B: da Piazzale Roma vai a piedi verso Santa Croce, Basilica dei Frari, Campo San Polo e Rialto, poi San Marco. Offre più calli, botteghe e deviazioni. Scegline uno: sono alternative, non un percorso da sommare."
      ],
      "highlights": [
        [
          "Percorso A · acqua e monumenti",
          "Piazzale Roma → linea 2 → Rialto → Mercerie → San Marco → Riva degli Schiavoni. Rialto–San Marco può richiedere circa 10 minuti a piedi per chi visita la città, senza soste."
        ],
        [
          "Percorso B · Venezia a piedi",
          "Piazzale Roma → Santa Croce → Frari → San Polo → Rialto → San Marco. Se ami l'arte, valuta una visita ai Frari al posto di un altro museo."
        ],
        [
          "Estensione Accademia · solo se resta tempo",
          "Da San Marco raggiungi il Ponte dell'Accademia passando per Calle Larga XXII Marzo e Campo Santo Stefano (circa 15 minuti a passo deciso). Poi scegli Zattere oppure Salute e Punta della Dogana."
        ],
        [
          "La visita da prenotare",
          "Scegli Palazzo Ducale oppure Basilica di San Marco come visita principale, tenendo conto delle regole e degli orari reali. Non sono soste da cinque minuti."
        ],
        [
          "Pranzo · uno stop vero",
          "Un bacaro o una pausa seduti è parte dell'esperienza. Controlla il prezzo del menu e l'eventuale servizio prima di ordinare."
        ],
        [
          "Il ritorno",
          "Se rientri da San Marco, consulta l'imbarcadero ACTV o organizza il cammino verso Piazzale Roma/Santa Lucia secondo le energie."
        ]
      ],
      "itinerary": [
        [
          "Mattino",
          "Scegli A o B e raggiungi Rialto",
          "Con la linea 2 il tratto Piazzale Roma–Rialto è indicativamente un quarto d'ora secondo la corsa; controlla gli orari ACTV."
        ],
        [
          "Tarda mattina",
          "Mercerie e Piazza San Marco",
          "Cammina senza bloccare i ponti e riserva tempo per osservare la Basilica anche dall'esterno."
        ],
        [
          "Pranzo",
          "Cicchetti o tavola",
          "Scegli in anticipo se vuoi qualcosa di veloce oppure un pranzo seduto."
        ],
        [
          "Pomeriggio",
          "Una visita importante",
          "Palazzo Ducale, Basilica o un museo secondo prenotazioni e interessi."
        ],
        [
          "Solo se c'è tempo",
          "Accademia e Dorsoduro",
          "Ponte dell'Accademia, Zattere oppure Salute. Non sacrificare il rientro per aggiungere tappe."
        ],
        [
          "Rientro",
          "Vaporetto, autobus o treno",
          "Controlla ACTV e il percorso verso Marghera; aggiungi margine per l'ultima corsa utile."
        ]
      ],
      "adviceTitle": "I 40 minuti sono solo movimento",
      "advice": "Con una coincidenza favorevole, il percorso Piazzale Roma–Rialto–San Marco può richiedere all'incirca 40 minuti di tragitto effettivo, inclusa una piccola sosta al ponte, ma non l'attesa del mezzo, le visite, il pranzo o le code. Non è la durata della giornata.",
      "heartTitle": "La tua prima Venezia, non una maratona",
      "heartText": "Meglio uscire con due esperienze memorabili che con venti fotografie tutte uguali. Se trovi folla a San Marco, cerca una laterale e recupera il ritmo.",
      "faq": [
        [
          "Si visita Venezia in un giorno senza vaporetto?",
          "Sì: il percorso via Frari e San Polo è interamente a piedi; attenzione ai ponti."
        ],
        [
          "Dalla stazione Santa Lucia si può seguire il percorso A?",
          "Sì, ma verifica la fermata ACTV e la corsa disponibili: non tutti i collegamenti sono equivalenti a quelli di Piazzale Roma."
        ],
        [
          "Posso aggiungere Murano e Burano?",
          "In una sola giornata è meglio scegliere fra centro e isole, oppure rinunciare a diverse visite."
        ],
        [
          "Con bambini o passeggino?",
          "Prevedi soste frequenti e consulta la guida Venezia accessibile per verificare i ponti e le rampe."
        ]
      ]
    },
    "en": {
      "title": "Venice in one day: two realistic walking and vaporetto routes",
      "kicker": "Itinerary · 1 day",
      "subtitle": "Rialto and St Mark's by water or via the Frari and San Polo on foot.",
      "description": "One day in Venice: ACTV line 2 from Piazzale Roma to Rialto, St Mark's and a walking alternative through the Frari and San Polo; optional Accademia.",
      "imageAlt": "Rialto Bridge on the Grand Canal",
      "badges": [
        [
          "Time",
          "One day"
        ],
        [
          "Route A",
          "Grand Canal"
        ],
        [
          "Route B",
          "Frari and San Polo"
        ],
        [
          "Tip",
          "One major visit"
        ]
      ],
      "introTitle": "A good itinerary is not a checklist",
      "intro": [
        "Rialto, St Mark's and a stretch of Grand Canal form a good first visit. Trying to add Doge's Palace, the Basilica, Murano and Burano usually leaves too little time for any of them.",
        "Route A: from Piazzale Roma take ACTV line 2 towards Rialto. Enjoy the palaces from the water, then walk across Rialto Bridge, through the Mercerie to St Mark's Square and Riva degli Schiavoni.",
        "Route B: walk from Piazzale Roma via Santa Croce, Basilica dei Frari, Campo San Polo and Rialto to St Mark's. These are alternatives, not two walks to complete back-to-back."
      ],
      "highlights": [
        [
          "Route A · water first",
          "Piazzale Roma → line 2 → Rialto → Mercerie → St Mark's → Riva degli Schiavoni. Allow at least ten minutes walking between Rialto and St Mark's without stops."
        ],
        [
          "Route B · on foot",
          "Piazzale Roma → Santa Croce → Frari → San Polo → Rialto → St Mark's."
        ],
        [
          "Optional Accademia extension",
          "From St Mark's reach Accademia Bridge via Calle Larga XXII Marzo and Campo Santo Stefano; choose Zattere or Salute and Punta della Dogana."
        ],
        [
          "Book one major sight",
          "Choose Doge's Palace or St Mark's Basilica according to your interests. Entrance checks and queues take time."
        ],
        [
          "A proper lunch break",
          "Try cicchetti or sit down; check menu prices and service charges."
        ],
        [
          "Plan your return",
          "Check ACTV stops or walk back towards Piazzale Roma/Santa Lucia if appropriate."
        ]
      ],
      "itinerary": [
        [
          "Morning",
          "Choose route A or B to Rialto",
          "Line 2 from Piazzale Roma to Rialto takes roughly fifteen minutes depending on the service."
        ],
        [
          "Late morning",
          "Mercerie and St Mark's",
          "Enjoy the square without blocking busy bridges."
        ],
        [
          "Lunch",
          "Cicchetti or a meal",
          "Make a real stop rather than rushing."
        ],
        [
          "Afternoon",
          "One important visit",
          "Doge's Palace, Basilica or a selected museum."
        ],
        [
          "Optional",
          "Accademia and Dorsoduro",
          "Add only if the day allows."
        ],
        [
          "Return",
          "Boat, bus or train",
          "Check ACTV and leave a margin for Marghera connections."
        ]
      ],
      "adviceTitle": "Forty minutes is just moving time",
      "advice": "With favourable connections, Piazzale Roma–Rialto–St Mark's can take about 40 minutes of actual movement, excluding waiting, visits, photos and meals.",
      "heartTitle": "A first visit, not a race",
      "heartText": "Two unforgettable experiences are better than twenty rushed stops. Let the city surprise you.",
      "faq": [
        [
          "Can I see Venice in a day without boats?",
          "Yes, choose the Frari/San Polo walking route. There are many bridges."
        ],
        [
          "What if I arrive at Santa Lucia station?",
          "Check the ACTV stop and exact service before using route A."
        ],
        [
          "Can I add Murano and Burano?",
          "Better choose between the islands and the historic centre in a one-day trip."
        ],
        [
          "Is it suitable with a pushchair?",
          "Plan breaks and check step-free alternatives."
        ]
      ]
    },
    "de": {
      "title": "Venedig an einem Tag: zwei Rundgänge mit Vaporetto oder zu Fuß",
      "kicker": "Reiseroute · 1 Tag",
      "subtitle": "Rialto und Markusplatz vom Wasser aus oder über Frari und San Polo.",
      "description": "Venedig an einem Tag: ACTV-Linie 2 Piazzale Roma–Rialto, Markusplatz und Alternative zu Fuß über Frari und San Polo, optional Accademia.",
      "imageAlt": "Rialtobrücke am Canal Grande",
      "badges": [
        [
          "Dauer",
          "1 Tag"
        ],
        [
          "Route A",
          "Canal Grande"
        ],
        [
          "Route B",
          "Frari & San Polo"
        ],
        [
          "Tipp",
          "Ein Hauptbesuch"
        ]
      ],
      "introTitle": "Nicht die Zahl der Stopps macht einen guten Tag",
      "intro": [
        "Rialto, Markusplatz und Canal Grande sind ein sinnvoller erster Eindruck. Dogenpalast, Markusdom, Murano und Burano sollten Sie nicht alle in denselben Tag pressen.",
        "Route A: ab Piazzale Roma ACTV-Linie 2 Richtung Rialto. Danach zu Fuß über die Rialtobrücke, Mercerie und Markusplatz zur Riva degli Schiavoni.",
        "Route B: zu Fuß von Piazzale Roma über Santa Croce, Frari-Kirche, Campo San Polo und Rialto zum Markusplatz. Beides sind Alternativen, nicht ein einziger langer Rundgang."
      ],
      "highlights": [
        [
          "Route A · vom Wasser aus",
          "Piazzale Roma → Linie 2 → Rialto → Mercerie → Markusplatz; für Rialto–Markusplatz mindestens zehn Gehminuten ohne Stopps."
        ],
        [
          "Route B · zu Fuß",
          "Piazzale Roma → Santa Croce → Frari → San Polo → Rialto → Markusplatz."
        ],
        [
          "Optional: Accademia",
          "Vom Markusplatz über Calle Larga XXII Marzo und Campo Santo Stefano zur Accademiabrücke, dann Zattere oder Salute."
        ],
        [
          "Ein Highlight reservieren",
          "Dogenpalast oder Markusdom – Zeiten und Zugang vorab prüfen."
        ],
        [
          "Mittagspause",
          "Cicchetti oder Restaurant. Preise und Service vor der Bestellung prüfen."
        ],
        [
          "Rückfahrt",
          "ACTV oder Fußweg nach Piazzale Roma/Santa Lucia einplanen."
        ]
      ],
      "itinerary": [
        [
          "Vormittag",
          "Route A oder B bis Rialto",
          "Linie 2 fährt Piazzale Roma–Rialto in etwa einer Viertelstunde, abhängig vom Fahrplan."
        ],
        [
          "Später Vormittag",
          "Mercerie und Markusplatz",
          "Zeit zum Schauen, ohne Wege zu blockieren."
        ],
        [
          "Mittag",
          "Echte Pause",
          "Cicchetti oder sitzendes Essen."
        ],
        [
          "Nachmittag",
          "Ein wichtiger Besuch",
          "Dogenpalast, Markusdom oder Museum."
        ],
        [
          "Optional",
          "Accademia und Dorsoduro",
          "Nur wenn genügend Zeit bleibt."
        ],
        [
          "Rückweg",
          "Vaporetto, Bus oder Bahn",
          "Verbindungen nach Marghera mit Zeitpuffer prüfen."
        ]
      ],
      "adviceTitle": "Vierzig Minuten sind keine Tagesplanung",
      "advice": "Piazzale Roma–Rialto–Markusplatz kann ungefähr 40 Minuten reine Wegzeit beanspruchen. Warten, Besichtigungen und Essen kommen dazu.",
      "heartTitle": "Venedig ist kein Wettlauf",
      "heartText": "Zwei bewusste Erlebnisse sind schöner als zwanzig hastige Stopps.",
      "faq": [
        [
          "Ohne Vaporetto möglich?",
          "Ja, die Frari/San-Polo-Route ist ein Fußweg."
        ],
        [
          "Ab Bahnhof Santa Lucia?",
          "Den passenden ACTV-Anleger und die Abfahrt prüfen."
        ],
        [
          "Murano und Burano zusätzlich?",
          "Für einen Tag besser zwischen Inseln und Altstadt wählen."
        ],
        [
          "Mit Kinderwagen?",
          "Pausen und Brücken einplanen; barrierefreie Hinweise nutzen."
        ]
      ]
    },
    "fr": {
      "title": "Venise en un jour : deux itinéraires à pied ou en vaporetto",
      "kicker": "Itinéraire · 1 jour",
      "subtitle": "Rialto et Saint-Marc par le Grand Canal ou à pied via les Frari.",
      "description": "Venise en un jour : ligne ACTV 2 Piazzale Roma–Rialto, Saint-Marc, promenade par les Frari et San Polo, option Accademia.",
      "imageAlt": "Pont du Rialto sur le Grand Canal",
      "badges": [
        [
          "Durée",
          "1 journée"
        ],
        [
          "Parcours A",
          "Grand Canal"
        ],
        [
          "Parcours B",
          "Frari et San Polo"
        ],
        [
          "Conseil",
          "Une grande visite"
        ]
      ],
      "introTitle": "Pas besoin de cocher vingt monuments",
      "intro": [
        "Rialto, la place Saint-Marc et le Grand Canal suffisent pour une belle première impression. Ajouter tous les musées et Murano-Burano serait trop ambitieux.",
        "Parcours A : vaporetto ACTV ligne 2 depuis Piazzale Roma vers Rialto, puis pont, Mercerie, Saint-Marc et Riva degli Schiavoni.",
        "Parcours B : marche depuis Piazzale Roma par Santa Croce, les Frari, San Polo, Rialto et Saint-Marc. Ce sont deux alternatives."
      ],
      "highlights": [
        [
          "A · découvrir depuis l'eau",
          "Piazzale Roma → ligne 2 → Rialto → Mercerie → Saint-Marc ; prévoir au moins dix minutes à pied entre Rialto et Saint-Marc."
        ],
        [
          "B · à pied",
          "Piazzale Roma → Santa Croce → Frari → San Polo → Rialto → Saint-Marc."
        ],
        [
          "Option Accademia",
          "Depuis Saint-Marc via Calle Larga XXII Marzo et Campo Santo Stefano jusqu'au pont, puis Zattere ou Salute."
        ],
        [
          "Une visite majeure",
          "Choisir Palais des Doges ou basilique Saint-Marc, selon horaires et réservations."
        ],
        [
          "Pause déjeuner",
          "Bacaro ou restaurant, tarifs vérifiés avant commande."
        ],
        [
          "Retour",
          "Prévoir l'embarcadère et le trajet vers Marghera."
        ]
      ],
      "itinerary": [
        [
          "Matin",
          "Parcours A ou B jusqu'à Rialto",
          "La ligne 2 Piazzale Roma–Rialto prend environ un quart d'heure selon la course."
        ],
        [
          "Fin de matinée",
          "Mercerie et Saint-Marc",
          "Découvrir sans bloquer les passages."
        ],
        [
          "Déjeuner",
          "Pause gourmande",
          "Cicchetti ou vrai repas."
        ],
        [
          "Après-midi",
          "Une grande visite",
          "Palais des Doges, basilique ou musée."
        ],
        [
          "Option",
          "Accademia et Dorsoduro",
          "Seulement si le temps le permet."
        ],
        [
          "Retour",
          "Vaporetto, bus ou train",
          "Vérifier les correspondances vers Marghera."
        ]
      ],
      "adviceTitle": "Quarante minutes ne suffisent pas pour visiter",
      "advice": "Le trajet Piazzale Roma–Rialto–Saint-Marc peut représenter 40 minutes de déplacement effectif, mais il faut ajouter attentes, visites et repas.",
      "heartTitle": "Venise mérite du temps",
      "heartText": "Deux beaux souvenirs valent mieux que vingt étapes expédiées.",
      "faq": [
        [
          "Sans vaporetto ?",
          "Oui, le parcours Frari/San Polo est entièrement pédestre."
        ],
        [
          "Depuis Santa Lucia ?",
          "Vérifier le quai ACTV et la bonne course."
        ],
        [
          "Murano et Burano en plus ?",
          "Mieux vaut choisir îles ou centre historique pour une seule journée."
        ],
        [
          "Avec poussette ?",
          "Prévoir pauses et ponts ; consulter les alternatives accessibles."
        ]
      ]
    },
    "es": {
      "title": "Venecia en un día: dos rutas a pie o en vaporetto",
      "kicker": "Itinerario · 1 día",
      "subtitle": "Rialto y San Marcos por el Gran Canal o caminando por Frari y San Polo.",
      "description": "Qué ver en Venecia en un día: línea ACTV 2 Piazzale Roma–Rialto, San Marcos, ruta a pie por Frari y San Polo y opción Accademia.",
      "imageAlt": "Puente de Rialto sobre el Gran Canal",
      "badges": [
        [
          "Duración",
          "1 día"
        ],
        [
          "Ruta A",
          "Gran Canal"
        ],
        [
          "Ruta B",
          "Frari y San Polo"
        ],
        [
          "Consejo",
          "Una gran visita"
        ]
      ],
      "introTitle": "No necesitas ver veinte monumentos",
      "intro": [
        "Rialto, San Marcos y el Gran Canal son un buen primer encuentro. Añadir todos los museos y Murano-Burano en un solo día te obligaría a correr.",
        "Ruta A: desde Piazzale Roma toma ACTV línea 2 a Rialto, cruza el puente y sigue Mercerie hasta San Marcos y Riva degli Schiavoni.",
        "Ruta B: desde Piazzale Roma camina por Santa Croce, Frari, Campo San Polo, Rialto y San Marcos. Son alternativas, no dos maratones seguidas."
      ],
      "highlights": [
        [
          "A · Venecia desde el agua",
          "Piazzale Roma → línea 2 → Rialto → Mercerie → San Marcos; deja al menos diez minutos andando desde Rialto."
        ],
        [
          "B · ruta a pie",
          "Piazzale Roma → Santa Croce → Frari → San Polo → Rialto → San Marcos."
        ],
        [
          "Accademia opcional",
          "Desde San Marcos por Calle Larga XXII Marzo y Campo Santo Stefano al puente; luego Zattere o Salute."
        ],
        [
          "Una visita importante",
          "Elige Palacio Ducal o basílica según horarios y entradas."
        ],
        [
          "Parada para comer",
          "Un bacaro o una comida sin prisas; mira precios y cargos."
        ],
        [
          "Regreso",
          "Consulta ACTV y la conexión hacia Marghera."
        ]
      ],
      "itinerary": [
        [
          "Mañana",
          "Elige A o B y llega a Rialto",
          "La línea 2 desde Piazzale Roma tarda aproximadamente un cuarto de hora hasta Rialto, según servicio."
        ],
        [
          "Media mañana",
          "Mercerie y San Marcos",
          "Disfruta sin obstruir puentes."
        ],
        [
          "Comida",
          "Descanso real",
          "Cicchetti o mesa."
        ],
        [
          "Tarde",
          "Una gran visita",
          "Palacio Ducal, basílica o museo."
        ],
        [
          "Opcional",
          "Accademia y Dorsoduro",
          "Solo si queda tiempo."
        ],
        [
          "Vuelta",
          "Barco, bus o tren",
          "Verifica conexión y margen hacia Marghera."
        ]
      ],
      "adviceTitle": "40 minutos no son un día de visitas",
      "advice": "Con buenas conexiones Piazzale Roma–Rialto–San Marcos puede requerir unos 40 minutos de recorrido efectivo, sin esperas, visitas, fotos ni comida.",
      "heartTitle": "Venecia no es una carrera",
      "heartText": "Dos experiencias bonitas valen más que veinte paradas rápidas.",
      "faq": [
        [
          "¿Se puede sin vaporetto?",
          "Sí, el recorrido Frari/San Polo es caminando."
        ],
        [
          "¿Desde Santa Lucia?",
          "Comprueba muelle ACTV y servicio apropiado."
        ],
        [
          "¿Añadir Murano y Burano?",
          "Mejor elegir entre islas y centro histórico en un día."
        ],
        [
          "¿Con carrito de bebé?",
          "Calcula puentes y paradas; revisa itinerarios accesibles."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯一日游：水上巴士与步行两条经典路线",
      "kicker": "一日游 · 实用路线",
      "subtitle": "从大运河到里亚托与圣马可，或经过 Frari 和 San Polo 步行。",
      "description": "威尼斯一天怎么玩：ACTV 2号船 Piazzale Roma–Rialto–圣马可，Frari 与 San Polo 步行路线，可选 Accademia。",
      "imageAlt": "大运河上的里亚托桥",
      "badges": [
        [
          "时长",
          "一整天"
        ],
        [
          "路线A",
          "大运河"
        ],
        [
          "路线B",
          "Frari 与 San Polo"
        ],
        [
          "建议",
          "选择一个重点参观"
        ]
      ],
      "introTitle": "好的路线不等于景点越多越好",
      "intro": [
        "里亚托桥、圣马可广场和大运河足够开启第一次威尼斯之旅。总督宫、大教堂、Murano、Burano 全塞进一天通常太赶。",
        "路线A：在 Piazzale Roma 乘 ACTV 2号船到 Rialto，从水上欣赏建筑，再经过里亚托桥、Mercerie 到圣马可广场和 Riva degli Schiavoni。",
        "路线B：从 Piazzale Roma 步行经过 Santa Croce、Frari 教堂、Campo San Polo、Rialto 再到圣马可。两条路线二选一，不要全部叠加。"
      ],
      "highlights": [
        [
          "路线A · 从水上认识威尼斯",
          "Piazzale Roma → 2号船 → Rialto → Mercerie → 圣马可；里亚托到圣马可步行至少约10分钟，不含拍照。"
        ],
        [
          "路线B · 步行小巷",
          "Piazzale Roma → Santa Croce → Frari → San Polo → Rialto → 圣马可。"
        ],
        [
          "加选 Accademia",
          "从圣马可经 Calle Larga XXII Marzo 和 Campo Santo Stefano 到桥上，再选 Zattere 或 Salute。"
        ],
        [
          "只预订一个重点景点",
          "总督宫或圣马可大教堂，提前核对入场和开放。"
        ],
        [
          "认真吃一顿饭",
          "小酒馆或餐厅，点餐前看好价格和服务费。"
        ],
        [
          "预留返程",
          "查询 ACTV 码头、公交或火车回 Marghera。"
        ]
      ],
      "itinerary": [
        [
          "上午",
          "选择A或B到达 Rialto",
          "Piazzale Roma 乘2号船到 Rialto 约15分钟，依航班而异。"
        ],
        [
          "接近中午",
          "Mercerie 与圣马可",
          "注意不在桥上挡路。"
        ],
        [
          "午餐",
          "好好休息",
          "吃 cicchetti 或坐下来用餐。"
        ],
        [
          "下午",
          "参观一个主要景点",
          "总督宫、大教堂或喜欢的博物馆。"
        ],
        [
          "有时间再加",
          "Accademia 与 Dorsoduro",
          "不要因为增加景点影响返程。"
        ],
        [
          "返程",
          "船、公交或火车",
          "确认回 Marghera 的衔接时间。"
        ]
      ],
      "adviceTitle": "40分钟只是交通时间",
      "advice": "连接顺畅时，Piazzale Roma–Rialto–圣马可实际移动可约40分钟，但不包括等船、参观、吃饭和拍照。",
      "heartTitle": "不是景点打卡比赛",
      "heartText": "专心体验两三个地方，比走马观花更有意义。",
      "faq": [
        [
          "一天不坐船可以吗？",
          "可以，Frari/San Polo 是步行路线，但需过桥。"
        ],
        [
          "从 Santa Lucia 火车站出发？",
          "查询当日合适的 ACTV 站台和班次。"
        ],
        [
          "再去 Murano 和 Burano？",
          "一天更适合在本岛与海岛之间作选择。"
        ],
        [
          "推婴儿车方便吗？",
          "桥多，安排休息并查看无障碍建议。"
        ]
      ]
    }
  },
  "venezia-in-due-o-tre-giorni": {
    "it": {
      "title": "Venezia in 2 o 3 giorni: itinerario a piedi, musei e isole",
      "kicker": "Itinerario · weekend e soggiorni brevi",
      "subtitle": "San Marco, Dorsoduro e una terza giornata da scegliere fra laguna e Cannaregio.",
      "description": "Venezia in 2 o 3 giorni: primo giorno Rialto e San Marco, secondo Accademia e Dorsoduro, terzo Murano e Burano oppure Cannaregio. Trasporti e consigli.",
      "imageAlt": "Basilica della Salute dal Canal Grande per una visita a Dorsoduro",
      "badges": [
        [
          "Durata",
          "2 o 3 giorni"
        ],
        [
          "Giorno 1",
          "Classici"
        ],
        [
          "Giorno 2",
          "Dorsoduro"
        ],
        [
          "Giorno 3",
          "Laguna o Cannaregio"
        ]
      ],
      "introTitle": "Il secondo giorno è quello in cui Venezia cambia volto",
      "intro": [
        "Se hai due giorni, dedica il primo a Rialto, Mercerie, Piazza San Marco e una visita importante. Il secondo attraversa Dorsoduro, sestiere di musei, fondamenta e passeggiate sull'acqua.",
        "Dal Ponte dell'Accademia puoi scegliere le Gallerie oppure la Peggy Guggenheim, proseguire lungo le Zattere, arrivare alla Basilica della Salute e a Punta della Dogana. Non serve visitare tutti i musei: selezionane uno e dedica il resto della giornata all'atmosfera.",
        "Con un terzo giorno scegli tra le isole Murano e Burano, tenendo conto delle attese in vaporetto, oppure Cannaregio con Ghetto, Misericordia e Madonna dell'Orto. Torcello è un'aggiunta, non un passaggio obbligato."
      ],
      "highlights": [
        [
          "Giorno 1 · Venezia monumentale",
          "Rialto → Mercerie → Piazza San Marco → Riva degli Schiavoni; visita a Palazzo Ducale o Basilica secondo biglietti e disponibilità."
        ],
        [
          "Giorno 2 · Accademia e Zattere",
          "Ponte dell'Accademia → museo a scelta → Zattere → Salute → Punta della Dogana. Percorso flessibile, non una gara."
        ],
        [
          "Terzo giorno A · Murano e Burano",
          "Murano al mattino per vetro e botteghe; Burano con calma per colori e merletto. Torcello solo con molte ore a disposizione."
        ],
        [
          "Terzo giorno B · Cannaregio",
          "Ghetto di Venezia → Fondamenta della Misericordia → Madonna dell'Orto oppure altre calli tranquille. Comodo se il meteo non favorisce la navigazione."
        ],
        [
          "Musei senza comprare troppo",
          "Museum Pass MUVE ha convenienza solo per le sedi incluse che visiterai; Accademia e Guggenheim richiedono biglietti separati."
        ],
        [
          "Fermati fra le tappe",
          "Campo Santo Stefano, bacari, botteghe e piccole fondamenta non sono interruzioni: sono parte del viaggio."
        ]
      ],
      "itinerary": [
        [
          "Giorno 1 · mattina",
          "Da Piazzale Roma a Rialto",
          "Scegli linea 2 sul Canal Grande o passeggiata via Frari."
        ],
        [
          "Giorno 1 · pomeriggio",
          "San Marco",
          "Una grande visita e passeggiata verso la Riva degli Schiavoni."
        ],
        [
          "Giorno 2 · mattina",
          "Ponte dell'Accademia e un museo",
          "Gallerie oppure Peggy Guggenheim; verifica orari, accessibilità e prenotazioni."
        ],
        [
          "Giorno 2 · pomeriggio",
          "Zattere, Salute e Punta della Dogana",
          "Passeggia e scegli eventuale visita; fermati a guardare il bacino."
        ],
        [
          "Giorno 3 · opzione isole",
          "Murano → Burano",
          "Rivedi gli orari ACTV anche per il ritorno; dimostrazioni del vetro preferibilmente al mattino."
        ],
        [
          "Giorno 3 · opzione città",
          "Cannaregio",
          "Ghetto, Misericordia e zone meno affollate, con pause."
        ],
        [
          "Se piove",
          "Piano B",
          "Riduci gli spostamenti lunghi e scegli una o due visite al coperto, senza cambiare tutto il viaggio."
        ]
      ],
      "adviceTitle": "Le tre isole non sono un biglietto da timbrare",
      "advice": "Se decidi per Murano, Burano e Torcello, la navigazione e le visite possono occupare l'intera giornata; per molte persone è meglio sceglierne due. I ferry per le isole non sono metropolitane con corse identiche tutto il giorno.",
      "heartTitle": "Il terzo giorno è una scelta personale",
      "heartText": "Arte, fotografie, bambini, cucina o laguna: l'itinerario migliore è quello che lascia tempo alla tua curiosità e alla stanchezza reale.",
      "faq": [
        [
          "Venezia in due giorni: vale la pena visitare le isole?",
          "Puoi farlo, ma toglieresti tempo al centro. Per un primo weekend il percorso San Marco + Dorsoduro è più equilibrato."
        ],
        [
          "Meglio Murano o Burano?",
          "Murano se ti interessa la lavorazione del vetro; Burano per il borgo e il merletto. Con tempo sufficiente puoi combinare entrambe."
        ],
        [
          "Si può raggiungere Accademia a piedi da San Marco?",
          "Sì, circa 15 minuti a passo deciso via Calle Larga XXII Marzo e Campo Santo Stefano; di più con soste."
        ],
        [
          "Cosa fare con la pioggia?",
          "Alterna Gallerie dell'Accademia, musei e pause al coperto; controlla la guida sul meteo."
        ]
      ]
    },
    "en": {
      "title": "Venice in 2 or 3 days: weekend itinerary, museums and islands",
      "kicker": "Itinerary · short stays",
      "subtitle": "St Mark's, Dorsoduro and a choice between the lagoon and Cannaregio.",
      "description": "Venice 2–3 day itinerary: Rialto and St Mark's, Accademia and Dorsoduro, Murano and Burano or Cannaregio. Practical tips and transport.",
      "imageAlt": "Santa Maria della Salute and the Grand Canal near Dorsoduro",
      "badges": [
        [
          "Duration",
          "2–3 days"
        ],
        [
          "Day 1",
          "Landmarks"
        ],
        [
          "Day 2",
          "Dorsoduro"
        ],
        [
          "Day 3",
          "Islands or Cannaregio"
        ]
      ],
      "introTitle": "Dorsoduro changes the pace of the second day",
      "intro": [
        "Day one covers Rialto, the Mercerie and St Mark's with one main visit. On day two, explore Dorsoduro: museums, waterfront walks and less hurried corners.",
        "From Accademia Bridge you might choose the Accademia Galleries or Peggy Guggenheim, walk along the Zattere and continue to Salute and Punta della Dogana. One museum is enough for many visitors.",
        "On day three choose Murano and Burano, allowing navigation time, or explore the Jewish Ghetto and Cannaregio. Torcello is an optional extra, not a required stop."
      ],
      "highlights": [
        [
          "Day 1 · icons",
          "Rialto, Mercerie, St Mark's and Riva degli Schiavoni, plus one major sight."
        ],
        [
          "Day 2 · Dorsoduro",
          "Accademia Bridge, a chosen museum, Zattere, Salute and Punta della Dogana."
        ],
        [
          "Day 3 A · lagoon",
          "Murano glass demonstrations in the morning, Burano's streets and lace in the afternoon."
        ],
        [
          "Day 3 B · Cannaregio",
          "Jewish Ghetto, Fondamenta della Misericordia and Madonna dell'Orto."
        ],
        [
          "Museum passes",
          "MUVE Museum Pass does not include Accademia or Peggy Guggenheim; compare before buying."
        ],
        [
          "Slow discoveries",
          "Campo Santo Stefano, quiet canals and bacari belong in your itinerary too."
        ]
      ],
      "itinerary": [
        [
          "Day 1 morning",
          "Arrive at Rialto",
          "Line 2 on the Grand Canal or walk via Frari."
        ],
        [
          "Day 1 afternoon",
          "St Mark's",
          "Choose one main visit and Riva degli Schiavoni."
        ],
        [
          "Day 2 morning",
          "Accademia and a museum",
          "Pick Accademia Galleries or Peggy Guggenheim."
        ],
        [
          "Day 2 afternoon",
          "Zattere and Salute",
          "Enjoy the waterfront and Punta della Dogana."
        ],
        [
          "Day 3 option A",
          "Murano and Burano",
          "Check ACTV return services and allow for visits."
        ],
        [
          "Day 3 option B",
          "Cannaregio",
          "Ghetto, Misericordia and quieter streets."
        ],
        [
          "Rainy day",
          "Indoor alternatives",
          "Choose a museum and fewer open-air transfers."
        ]
      ],
      "adviceTitle": "Three islands take a whole day",
      "advice": "Murano, Burano and Torcello together require substantial boat and visiting time. Two islands are often a more comfortable plan.",
      "heartTitle": "Choose your own third day",
      "heartText": "Art, food, family time or lagoon: follow what genuinely interests you.",
      "faq": [
        [
          "Are the islands essential in a two-day visit?",
          "Not necessarily. St Mark's and Dorsoduro make a balanced first weekend."
        ],
        [
          "Murano or Burano?",
          "Murano for glassmaking, Burano for colour and lace; combine them if time allows."
        ],
        [
          "Can I walk from St Mark's to Accademia?",
          "Yes, around 15 minutes briskly via Calle Larga XXII Marzo and Campo Santo Stefano."
        ],
        [
          "What if it rains?",
          "Pick museums and check the weather guide."
        ]
      ]
    },
    "de": {
      "title": "Venedig in 2 oder 3 Tagen: Museen, Rundgänge und Inseln",
      "kicker": "Wochenende · Kurzurlaub",
      "subtitle": "Markusplatz, Dorsoduro und als dritter Tag Lagune oder Cannaregio.",
      "description": "Venedig 2–3 Tage: Rialto und Markusplatz, Accademia und Dorsoduro, Murano und Burano oder Cannaregio. Tipps und Verkehr.",
      "imageAlt": "Santa Maria della Salute am Canal Grande",
      "badges": [
        [
          "Dauer",
          "2–3 Tage"
        ],
        [
          "Tag 1",
          "Klassiker"
        ],
        [
          "Tag 2",
          "Dorsoduro"
        ],
        [
          "Tag 3",
          "Inseln oder Cannaregio"
        ]
      ],
      "introTitle": "Am zweiten Tag zeigt sich ein anderes Venedig",
      "intro": [
        "Tag eins führt über Rialto und Mercerie zum Markusplatz mit einer großen Besichtigung. Tag zwei gehört Dorsoduro: Museen, Uferwege und ruhige Plätze.",
        "Ab Accademiabrücke können Sie die Gallerie dell'Accademia oder Peggy Guggenheim besuchen und über die Zattere zur Salute und Punta della Dogana spazieren. Ein Museum reicht oft.",
        "Am dritten Tag wählen Sie Murano und Burano mit Schiffspuffern oder Cannaregio mit Ghetto und Misericordia. Torcello nur als Zusatz, wenn die Zeit reicht."
      ],
      "highlights": [
        [
          "Tag 1 · Highlights",
          "Rialto, Mercerie, Markusplatz und Riva degli Schiavoni; eine Hauptbesichtigung."
        ],
        [
          "Tag 2 · Dorsoduro",
          "Accademiabrücke, Museum, Zattere, Salute und Punta della Dogana."
        ],
        [
          "Tag 3 A · Inseln",
          "Murano vormittags, Burano danach; Fahrzeiten prüfen."
        ],
        [
          "Tag 3 B · Cannaregio",
          "Ghetto, Fondamenta della Misericordia, Madonna dell'Orto."
        ],
        [
          "Museen und Pässe",
          "MUVE Museum Pass enthält weder Accademia noch Peggy Guggenheim."
        ],
        [
          "Pausen sind Programm",
          "Campo Santo Stefano, kleine Kanäle und Bacari."
        ]
      ],
      "itinerary": [
        [
          "Tag 1 morgens",
          "Rialto",
          "Linie 2 oder Fußweg über Frari."
        ],
        [
          "Tag 1 nachmittags",
          "Markusplatz",
          "Ein Hauptbesuch und Riva degli Schiavoni."
        ],
        [
          "Tag 2 morgens",
          "Accademia und Museum",
          "Accademia-Galerien oder Peggy Guggenheim."
        ],
        [
          "Tag 2 nachmittags",
          "Zattere, Salute",
          "Punta della Dogana und Spaziergang."
        ],
        [
          "Tag 3 Option A",
          "Murano und Burano",
          "ACTV-Rückfahrt berücksichtigen."
        ],
        [
          "Tag 3 Option B",
          "Cannaregio",
          "Ghetto, Misericordia und ruhige Gassen."
        ],
        [
          "Bei Regen",
          "Museen vorziehen",
          "Weniger lange Fahrten im Freien."
        ]
      ],
      "adviceTitle": "Drei Inseln brauchen Zeit",
      "advice": "Murano, Burano und Torcello kosten mit Schiffen und Besuchen einen ganzen Tag. Oft sind zwei Inseln entspannter.",
      "heartTitle": "Der dritte Tag gehört Ihnen",
      "heartText": "Kunst, Essen, Familienzeit oder Lagune – wählen Sie nach Interesse.",
      "faq": [
        [
          "Inseln bei nur zwei Tagen?",
          "Nicht unbedingt; Markusplatz und Dorsoduro bilden ein gutes erstes Wochenende."
        ],
        [
          "Murano oder Burano?",
          "Glas auf Murano, Farben und Spitze auf Burano."
        ],
        [
          "Zu Fuß vom Markusplatz zur Accademia?",
          "Etwa 15 Minuten zügig über Calle Larga XXII Marzo und Campo Santo Stefano."
        ],
        [
          "Bei Regen?",
          "Ein Museum wählen und den Wetterguide prüfen."
        ]
      ]
    },
    "fr": {
      "title": "Venise en 2 ou 3 jours : week-end, musées et îles",
      "kicker": "Itinéraire · court séjour",
      "subtitle": "Saint-Marc, Dorsoduro puis les îles ou Cannaregio.",
      "description": "Venise en 2–3 jours : Rialto et Saint-Marc, Accademia et Dorsoduro, Murano et Burano ou Cannaregio. Transports et conseils.",
      "imageAlt": "Santa Maria della Salute depuis le Grand Canal",
      "badges": [
        [
          "Durée",
          "2–3 jours"
        ],
        [
          "Jour 1",
          "Monuments"
        ],
        [
          "Jour 2",
          "Dorsoduro"
        ],
        [
          "Jour 3",
          "Îles ou Cannaregio"
        ]
      ],
      "introTitle": "Le deuxième jour change de perspective",
      "intro": [
        "Jour un : Rialto, Mercerie et Saint-Marc avec une visite majeure. Jour deux : Dorsoduro, musées, promenades sur l'eau et places plus calmes.",
        "Depuis le pont de l'Accademia, choisissez les Gallerie ou Peggy Guggenheim, poursuivez vers les Zattere, la Salute et Punta della Dogana. Un seul musée peut suffire.",
        "Le troisième jour, choisissez Murano et Burano avec temps de navigation ou le Ghetto et Cannaregio. Torcello reste une option supplémentaire."
      ],
      "highlights": [
        [
          "Jour 1 · incontournables",
          "Rialto, Mercerie, Saint-Marc et Riva degli Schiavoni."
        ],
        [
          "Jour 2 · Dorsoduro",
          "Accademia, musée choisi, Zattere, Salute, Punta della Dogana."
        ],
        [
          "Jour 3 A · lagune",
          "Murano le matin pour le verre, puis Burano pour la dentelle et les couleurs."
        ],
        [
          "Jour 3 B · Cannaregio",
          "Ghetto juif, Misericordia et Madonna dell'Orto."
        ],
        [
          "Pass musées",
          "Le Museum Pass MUVE n'inclut ni Accademia ni Peggy Guggenheim."
        ],
        [
          "Le temps de vivre",
          "Campo Santo Stefano, petites ruelles et bacari."
        ]
      ],
      "itinerary": [
        [
          "Jour 1 matin",
          "Rialto",
          "Ligne 2 ou marche via les Frari."
        ],
        [
          "Jour 1 après-midi",
          "Saint-Marc",
          "Une grande visite et la Riva degli Schiavoni."
        ],
        [
          "Jour 2 matin",
          "Accademia",
          "Un musée au choix."
        ],
        [
          "Jour 2 après-midi",
          "Zattere et Salute",
          "Punta della Dogana et promenade."
        ],
        [
          "Jour 3 option A",
          "Murano et Burano",
          "Prévoir le retour ACTV."
        ],
        [
          "Jour 3 option B",
          "Cannaregio",
          "Ghetto, Misericordia et canaux calmes."
        ],
        [
          "Sous la pluie",
          "Choix intérieur",
          "Un musée et moins de déplacements."
        ]
      ],
      "adviceTitle": "Trois îles, c'est une journée chargée",
      "advice": "Murano, Burano et Torcello exigent des transferts et des visites. Deux îles suffisent souvent.",
      "heartTitle": "Choisissez votre troisième jour",
      "heartText": "Art, cuisine, famille ou lagune : suivez vos envies.",
      "faq": [
        [
          "Îles indispensables en deux jours ?",
          "Non ; Saint-Marc et Dorsoduro font un bon premier séjour."
        ],
        [
          "Murano ou Burano ?",
          "Murano pour le verre, Burano pour les couleurs et la dentelle."
        ],
        [
          "Saint-Marc à Accademia à pied ?",
          "Environ 15 minutes d'un bon pas via Calle Larga XXII Marzo et Campo Santo Stefano."
        ],
        [
          "S'il pleut ?",
          "Privilégiez un musée et consultez le guide météo."
        ]
      ]
    },
    "es": {
      "title": "Venecia en 2 o 3 días: fin de semana, museos e islas",
      "kicker": "Itinerario · estancia corta",
      "subtitle": "San Marcos, Dorsoduro y un tercer día para las islas o Cannaregio.",
      "description": "Venecia en 2–3 días: Rialto, San Marcos, Accademia y Dorsoduro, Murano y Burano o Cannaregio. Transportes y consejos.",
      "imageAlt": "Santa Maria della Salute desde el Gran Canal",
      "badges": [
        [
          "Duración",
          "2–3 días"
        ],
        [
          "Día 1",
          "Clásicos"
        ],
        [
          "Día 2",
          "Dorsoduro"
        ],
        [
          "Día 3",
          "Islas o Cannaregio"
        ]
      ],
      "introTitle": "El segundo día muestra otra Venecia",
      "intro": [
        "El primer día se centra en Rialto y San Marcos con una visita importante. El segundo descubre Dorsoduro, sus museos, paseos junto al agua y plazas tranquilas.",
        "Desde el Puente de la Accademia puedes elegir las Gallerie o Peggy Guggenheim, caminar por Zattere y seguir a Salute y Punta della Dogana. Un museo es suficiente.",
        "El tercer día elige Murano y Burano considerando los barcos, o Cannaregio con el Gueto y Misericordia. Torcello es opcional."
      ],
      "highlights": [
        [
          "Día 1 · monumentos",
          "Rialto, Mercerie, San Marcos y Riva degli Schiavoni."
        ],
        [
          "Día 2 · Dorsoduro",
          "Accademia, museo, Zattere, Salute y Punta della Dogana."
        ],
        [
          "Día 3 A · islas",
          "Murano por la mañana para vidrio; Burano después."
        ],
        [
          "Día 3 B · Cannaregio",
          "Gueto judío, Misericordia y Madonna dell'Orto."
        ],
        [
          "Pases de museo",
          "Museum Pass MUVE no incluye Accademia ni Peggy Guggenheim."
        ],
        [
          "Paradas libres",
          "Campo Santo Stefano, canales y bacari."
        ]
      ],
      "itinerary": [
        [
          "Día 1 mañana",
          "Rialto",
          "Línea 2 o paseo por Frari."
        ],
        [
          "Día 1 tarde",
          "San Marcos",
          "Una gran visita y Riva degli Schiavoni."
        ],
        [
          "Día 2 mañana",
          "Accademia",
          "Elige un museo."
        ],
        [
          "Día 2 tarde",
          "Zattere y Salute",
          "Punta della Dogana y paseo."
        ],
        [
          "Día 3 opción A",
          "Murano y Burano",
          "Comprobar regreso ACTV."
        ],
        [
          "Día 3 opción B",
          "Cannaregio",
          "Gueto, Misericordia y canales más tranquilos."
        ],
        [
          "Con lluvia",
          "Alternativa cubierta",
          "Un museo y menos traslados largos."
        ]
      ],
      "adviceTitle": "Tres islas requieren el día entero",
      "advice": "Murano, Burano y Torcello ocupan mucho tiempo entre barcos y visitas. Dos islas suelen ser más cómodas.",
      "heartTitle": "Tu tercer día, tu elección",
      "heartText": "Arte, gastronomía, niños o laguna: elige lo que te interesa.",
      "faq": [
        [
          "¿Islas con solo dos días?",
          "No es imprescindible; San Marcos y Dorsoduro dan un buen primer fin de semana."
        ],
        [
          "¿Murano o Burano?",
          "Murano para vidrio, Burano para color y encaje."
        ],
        [
          "¿San Marcos a Accademia a pie?",
          "Unos 15 minutos caminando rápido por Calle Larga XXII Marzo y Campo Santo Stefano."
        ],
        [
          "¿Si llueve?",
          "Prioriza un museo y mira la guía meteorológica."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯两天或三天游：博物馆、老城与岛屿路线",
      "kicker": "周末及短住行程",
      "subtitle": "第1天圣马可，第2天 Dorsoduro，第3天选择海岛或 Cannaregio。",
      "description": "威尼斯2至3日游攻略：Rialto 与圣马可、Accademia 与 Dorsoduro、Murano/Burano 或 Cannaregio，包含交通建议。",
      "imageAlt": "大运河旁的 Santa Maria della Salute 教堂",
      "badges": [
        [
          "天数",
          "2–3天"
        ],
        [
          "第1天",
          "地标"
        ],
        [
          "第2天",
          "Dorsoduro"
        ],
        [
          "第3天",
          "岛屿或 Cannaregio"
        ]
      ],
      "introTitle": "第二天可以看到不同的威尼斯",
      "intro": [
        "第一天游 Rialto、Mercerie 与圣马可，选择一处主要景点。第二天转向 Dorsoduro：博物馆、临水步道与更宁静的广场。",
        "从 Accademia 桥可选学院美术馆或 Peggy Guggenheim，接着走 Zattere、Salute 和 Punta della Dogana。无需全部参观，一座博物馆即可。",
        "第三天选 Murano 与 Burano，记得留船程；或走访 Cannaregio 的犹太区和 Misericordia。Torcello 只是时间充裕时的加选。"
      ],
      "highlights": [
        [
          "第1天·经典老城",
          "Rialto、Mercerie、圣马可与 Riva degli Schiavoni。"
        ],
        [
          "第2天·Dorsoduro",
          "Accademia、博物馆、Zattere、Salute 与 Punta della Dogana。"
        ],
        [
          "第3天A·海岛",
          "上午 Murano 体验玻璃工艺，下午 Burano 看彩色房屋与蕾丝。"
        ],
        [
          "第3天B·Cannaregio",
          "犹太区、Misericordia 与 Madonna dell'Orto。"
        ],
        [
          "博物馆通票",
          "MUVE Museum Pass 不包含学院美术馆及 Peggy Guggenheim。"
        ],
        [
          "留出空白时间",
          "Campo Santo Stefano、小运河及 bacari 小酒馆。"
        ]
      ],
      "itinerary": [
        [
          "第1天上午",
          "Rialto",
          "2号船或经 Frari 步行。"
        ],
        [
          "第1天下午",
          "圣马可",
          "选择一处重点参观，再看 Riva degli Schiavoni。"
        ],
        [
          "第2天上午",
          "Accademia",
          "选择一座博物馆。"
        ],
        [
          "第2天下午",
          "Zattere 与 Salute",
          "散步到 Punta della Dogana。"
        ],
        [
          "第3天选项A",
          "Murano 与 Burano",
          "核对 ACTV 回程。"
        ],
        [
          "第3天选项B",
          "Cannaregio",
          "犹太区、Misericordia 与安静的街巷。"
        ],
        [
          "下雨时",
          "室内替代",
          "选择博物馆，减少露天移动。"
        ]
      ],
      "adviceTitle": "三座岛屿会非常赶",
      "advice": "Murano、Burano 和 Torcello 三岛同游，需要较多船程和参观时间；不少游客选择两岛更舒适。",
      "heartTitle": "第三天由你的兴趣决定",
      "heartText": "艺术、美食、家庭或潟湖，选择真正喜欢的体验。",
      "faq": [
        [
          "两天一定要看海岛吗？",
          "不一定，圣马可与 Dorsoduro 已是不错的首访安排。"
        ],
        [
          "Murano 还是 Burano？",
          "Murano 适合玻璃工艺，Burano 适合彩色村落与蕾丝。"
        ],
        [
          "从圣马可走到 Accademia？",
          "经 Calle Larga XXII Marzo 和 Campo Santo Stefano 快走约15分钟。"
        ],
        [
          "下雨怎么办？",
          "优先选择博物馆并查看天气指南。"
        ]
      ]
    }
  },
  "venezia-in-una-settimana": {
    "it": {
      "title": "Venezia in 7 giorni: una settimana tra isole, sestieri e Veneto",
      "kicker": "Itinerario · 4–7 giorni",
      "subtitle": "Una settimana per andare oltre San Marco: Cannaregio, Castello, Lido, Pellestrina e una gita fuori città.",
      "description": "Itinerario Venezia in una settimana: primi 3 giorni nel centro e laguna, 4° Cannaregio, 5° Castello, 6° Lido e Pellestrina, 7° Padova o Treviso.",
      "imageAlt": "Panorama della laguna di Venezia per un viaggio di una settimana",
      "badges": [
        [
          "Durata",
          "4–7 giorni"
        ],
        [
          "Centro",
          "Sestieri e musei"
        ],
        [
          "Isole",
          "Lido e Pellestrina"
        ],
        [
          "Escursione",
          "Padova o Treviso"
        ]
      ],
      "introTitle": "Sette giorni a Venezia non sono troppi",
      "intro": [
        "Dopo i primi tre giorni classici, il viaggio cambia qualità: puoi scegliere musei senza fretta, camminare dove ci sono più residenti che comitive, fare una giornata al mare e conoscere un'altra città del Veneto.",
        "Giorni 1–3: Rialto e San Marco; Dorsoduro e Accademia; Murano e Burano oppure Cannaregio. I giorni successivi approfondiscono Castello e il litorale, lasciando sempre un'opzione di recupero se piove o se un museo è chiuso.",
        "Questo non è un programma obbligatorio. In luglio e agosto la spiaggia diventa una scelta naturale, mentre in inverno potresti preferire musei, teatri o una seconda giornata nel centro storico."
      ],
      "highlights": [
        [
          "Giorno 4 · Cannaregio per davvero",
          "Ghetto, Fondamenta della Misericordia, Sacca della Misericordia e Madonna dell'Orto, con pausa in bacaro e deviazioni libere."
        ],
        [
          "Giorno 5 · Castello",
          "Arsenale visto dall'esterno, Via Garibaldi, Giardini della Biennale e Sant'Elena; gli spazi espositivi seguono il calendario delle mostre."
        ],
        [
          "Giorno 6 · Lido in bicicletta",
          "Dal Lido Santa Maria Elisabetta verso Malamocco, Murazzi, Alberoni e natura. Valuta distanza e noleggio prima di partire."
        ],
        [
          "Alternativa · Pellestrina",
          "Con linea 11 e ferry fra Alberoni e Santa Maria del Mare raggiungi Pellestrina, i borghi dei pescatori e Ca' Roman: giornata lunga, da pianificare con gli orari."
        ],
        [
          "Giorno 7 · Padova o Treviso",
          "Padova per arte e piazze; Treviso per canali e centro raccolto. Non mettere entrambe le città nella stessa escursione."
        ],
        [
          "Scelta gentile · un giorno libero",
          "Se Venezia ti ha conquistato, usa l'ultimo giorno per ritornare in un campo o in un museo: è un programma perfettamente valido."
        ]
      ],
      "itinerary": [
        [
          "1",
          "San Marco e Rialto",
          "Partenza dalla terraferma e una visita importante."
        ],
        [
          "2",
          "Dorsoduro",
          "Accademia, Zattere, Salute e Punta della Dogana."
        ],
        [
          "3",
          "Murano e Burano",
          "Una giornata di laguna oppure un primo approfondimento di Cannaregio."
        ],
        [
          "4",
          "Cannaregio",
          "Ghetto, fondamenta, botteghe e luoghi tranquilli."
        ],
        [
          "5",
          "Castello",
          "Arsenale, Via Garibaldi, Giardini, Sant'Elena."
        ],
        [
          "6",
          "Lido, Pellestrina o Sant'Erasmo",
          "Bici e ferry dove consentiti; verifica le corse e la capienza bici."
        ],
        [
          "7",
          "Padova, Treviso o Venezia libera",
          "Scegli una sola escursione, oppure rallenta in città."
        ]
      ],
      "adviceTitle": "Il ferry non è un collegamento sempre uguale",
      "advice": "La linea 17 collega Tronchetto e Lido San Nicolò; la linea 11 include il passaggio Alberoni–Santa Maria del Mare verso Pellestrina. Passeggero e bicicletta richiedono titoli separati; ACTV può limitare le bici in base alla capienza. Nel centro storico veneziano non è consentito circolare in bici.",
      "heartTitle": "Con una settimana puoi tornare",
      "heartText": "Scegli un luogo da rivedere in una luce diversa: Rialto al mattino, Zattere al tramonto o Cannaregio dopo cena. Spesso è lì che inizia la vera familiarità con la città.",
      "faq": [
        [
          "È troppo stare una settimana a Venezia?",
          "No, se alterni sestieri, isole, litorale e una possibile escursione a Padova o Treviso."
        ],
        [
          "Si può visitare Pellestrina in bicicletta?",
          "Sì. Verifica traghetti ACTV, eventuale prenotazione del posto-bici e biglietto della bici."
        ],
        [
          "Una settimana richiede il pass ACTV 7 giorni?",
          "Non necessariamente: dipende dalle giornate in cui userai davvero il vaporetto. Confronta il pass da €65 con i biglietti necessari."
        ],
        [
          "E se la Biennale è chiusa?",
          "Puoi camminare a Castello e ai Giardini; gli spazi espositivi vanno verificati sui calendari ufficiali."
        ]
      ]
    },
    "en": {
      "title": "One week in Venice: a 7-day itinerary of islands and neighbourhoods",
      "kicker": "Itinerary · 4–7 days",
      "subtitle": "Beyond St Mark's: Cannaregio, Castello, Lido, Pellestrina and a Veneto day trip.",
      "description": "Seven days in Venice: first days in the historic centre and lagoon, Cannaregio, Castello, cycling Lido or Pellestrina, and Padua or Treviso.",
      "imageAlt": "The Venetian lagoon for a week-long visit",
      "badges": [
        [
          "Trip",
          "4–7 days"
        ],
        [
          "City",
          "Districts and museums"
        ],
        [
          "Islands",
          "Lido and Pellestrina"
        ],
        [
          "Day trip",
          "Padua or Treviso"
        ]
      ],
      "introTitle": "A week in Venice is not too long",
      "intro": [
        "After three classic days you can explore neighbourhoods without rushing, spend a day at the coast or visit another Veneto city.",
        "Days 1–3 cover Rialto/St Mark's, Dorsoduro, then Murano/Burano or Cannaregio. The following days extend to Castello, the Lido and a flexible excursion.",
        "This is not a rigid checklist. Beach days suit summer, while winter may favour museums or another unhurried day in the city."
      ],
      "highlights": [
        [
          "Day 4 · Cannaregio",
          "Jewish Ghetto, Fondamenta della Misericordia and Madonna dell'Orto."
        ],
        [
          "Day 5 · Castello",
          "Arsenale, Via Garibaldi, Biennale Giardini and Sant'Elena; exhibition access varies."
        ],
        [
          "Day 6 · Lido by bike",
          "From Santa Maria Elisabetta to Malamocco, the Murazzi and Alberoni."
        ],
        [
          "Alternative · Pellestrina",
          "ACTV line 11 via Alberoni and Santa Maria del Mare to fishing villages and Ca' Roman: allow a full day."
        ],
        [
          "Day 7 · Padua or Treviso",
          "One city per day: art and piazzas in Padua, canals and small streets in Treviso."
        ],
        [
          "An open day",
          "Return to a museum or canal you loved instead of adding another excursion."
        ]
      ],
      "itinerary": [
        [
          "1",
          "St Mark's and Rialto",
          "A major visit and time for the Grand Canal."
        ],
        [
          "2",
          "Dorsoduro",
          "Accademia, Zattere and Salute."
        ],
        [
          "3",
          "Murano and Burano",
          "Or choose Cannaregio instead."
        ],
        [
          "4",
          "Cannaregio",
          "Ghetto, canals and long pauses."
        ],
        [
          "5",
          "Castello",
          "Arsenale, Via Garibaldi, Giardini and Sant'Elena."
        ],
        [
          "6",
          "Lido, Pellestrina or Sant'Erasmo",
          "Cycling and ferries; always check bike rules."
        ],
        [
          "7",
          "Padua, Treviso or free day",
          "One excursion only, or another day in Venice."
        ]
      ],
      "adviceTitle": "Ferries and bikes need planning",
      "advice": "ACTV line 17 serves Tronchetto–Lido San Nicolò; line 11 includes the Alberoni–Santa Maria del Mare ferry to Pellestrina. Passenger and bicycle tickets are separate, and capacity varies. Cycling in Venice's historic centre is prohibited.",
      "heartTitle": "A week lets you come back",
      "heartText": "Return to Rialto early, walk along the Zattere at sunset or discover Cannaregio after dinner.",
      "faq": [
        [
          "Is seven days too long?",
          "No: alternate museums, neighbourhoods, islands and a Veneto excursion."
        ],
        [
          "Can I cycle in Pellestrina?",
          "Yes, with ACTV ferry capacity and bike ticket checks."
        ],
        [
          "Must I buy the ACTV seven-day pass?",
          "Not automatically: compare actual journeys with the €65 pass."
        ],
        [
          "What if Biennale venues are closed?",
          "Castello and the Giardini still offer pleasant walks; exhibition access follows official calendars."
        ]
      ]
    },
    "de": {
      "title": "Eine Woche in Venedig: 7-Tage-Route mit Inseln und Stadtteilen",
      "kicker": "Reiseroute · 4–7 Tage",
      "subtitle": "Über den Markusplatz hinaus: Cannaregio, Castello, Lido, Pellestrina und Venetien.",
      "description": "Venedig in sieben Tagen: Rialto, Dorsoduro, Murano, Burano, Cannaregio, Castello, Lido und ein Ausflug nach Padua oder Treviso.",
      "imageAlt": "Die Lagune von Venedig für eine einwöchige Reise",
      "badges": [
        [
          "Dauer",
          "4–7 Tage"
        ],
        [
          "Altstadt",
          "Stadtteile & Museen"
        ],
        [
          "Inseln",
          "Lido & Pellestrina"
        ],
        [
          "Ausflug",
          "Padua oder Treviso"
        ]
      ],
      "introTitle": "Sieben Tage in Venedig lohnen sich",
      "intro": [
        "Nach den ersten drei Tagen bleibt Zeit für echte Spaziergänge, weniger bekannte Viertel, einen Tag am Meer und eine nahe Stadt in Venetien.",
        "Die Tage 1–3 umfassen Rialto, Markusplatz, Dorsoduro und die Lagune. Danach kommen Cannaregio, Castello und der Lido mit Radtouren hinzu.",
        "Im Sommer ist das Meer eine gute Idee, im Winter vielleicht ein zusätzliches Museum. Die Reihenfolge ist flexibel."
      ],
      "highlights": [
        [
          "Tag 4 · Cannaregio",
          "Ghetto, Fondamenta della Misericordia und Madonna dell'Orto."
        ],
        [
          "Tag 5 · Castello",
          "Arsenale, Via Garibaldi, Giardini und Sant'Elena; Biennale-Ausstellungen saisonal."
        ],
        [
          "Tag 6 · Lido per Rad",
          "Von Santa Maria Elisabetta nach Malamocco, zu den Murazzi und Alberoni."
        ],
        [
          "Alternative · Pellestrina",
          "Linie 11 mit Fähre Alberoni–Santa Maria del Mare, Fischerdörfer und Ca' Roman."
        ],
        [
          "Tag 7 · Padua oder Treviso",
          "Padua für Kunst und Plätze; Treviso für Kanäle und Gassen."
        ],
        [
          "Ein Tag ohne Programm",
          "Der zweite Besuch eines Lieblingsorts kann wertvoller sein als die nächste Stadt."
        ]
      ],
      "itinerary": [
        [
          "1",
          "Markusplatz und Rialto",
          "Canal Grande und eine Hauptbesichtigung."
        ],
        [
          "2",
          "Dorsoduro",
          "Accademia, Zattere und Salute."
        ],
        [
          "3",
          "Murano und Burano",
          "Alternativ Cannaregio."
        ],
        [
          "4",
          "Cannaregio",
          "Ghetto und ruhige Fondamente."
        ],
        [
          "5",
          "Castello",
          "Arsenale, Giardini, Sant'Elena."
        ],
        [
          "6",
          "Lido oder Pellestrina",
          "Rad und Fähre, Kapazität prüfen."
        ],
        [
          "7",
          "Padua, Treviso oder frei",
          "Eine Stadt oder ein weiterer Tag in Venedig."
        ]
      ],
      "adviceTitle": "Fahrräder und Fähren vorher prüfen",
      "advice": "Linie 17 verbindet Tronchetto mit Lido San Nicolò, Linie 11 Alberoni mit Santa Maria del Mare und Pellestrina. Für Rad und Fahrgast sind getrennte Tickets nötig. In der historischen Altstadt ist Radfahren verboten.",
      "heartTitle": "Sie können Orte wiedersehen",
      "heartText": "Rialto am Morgen oder Zattere am Abend wirken anders als beim ersten Mal.",
      "faq": [
        [
          "Lohnen sich sieben Tage?",
          "Ja, für Stadtteile, Museen, Inseln und eine Veneto-Exkursion."
        ],
        [
          "Pellestrina mit dem Rad?",
          "Ja, aber Fähren, Reservierungen und Tickets prüfen."
        ],
        [
          "ACTV 7-Tage-Pass nötig?",
          "Nur wenn die geplanten Fahrten den Preis von 65 € rechtfertigen."
        ],
        [
          "Biennale geschlossen?",
          "Castello und Giardini sind auch ohne Ausstellung einen Besuch wert."
        ]
      ]
    },
    "fr": {
      "title": "Une semaine à Venise : itinéraire de 7 jours, îles et quartiers",
      "kicker": "Itinéraire · 4–7 jours",
      "subtitle": "Au-delà de Saint-Marc : Cannaregio, Castello, Lido, Pellestrina et une excursion en Vénétie.",
      "description": "Venise en une semaine : Rialto, Dorsoduro, Murano, Burano, Cannaregio, Castello, vélo au Lido et Padoue ou Trévise.",
      "imageAlt": "Paysage de la lagune de Venise pour une semaine",
      "badges": [
        [
          "Durée",
          "4–7 jours"
        ],
        [
          "Ville",
          "Quartiers et musées"
        ],
        [
          "Îles",
          "Lido et Pellestrina"
        ],
        [
          "Excursion",
          "Padoue ou Trévise"
        ]
      ],
      "introTitle": "Une semaine à Venise, c'est une chance",
      "intro": [
        "Après trois jours classiques, consacrez du temps aux quartiers quotidiens, aux petits canaux, à la mer et à une ville proche.",
        "Les jours 1 à 3 couvrent Rialto/Saint-Marc, Dorsoduro et les îles ou Cannaregio. Les jours suivants ajoutent Castello, Lido et une excursion.",
        "Ce programme est modulable : la plage convient en été, les musées et les retours au centre en hiver."
      ],
      "highlights": [
        [
          "Jour 4 · Cannaregio",
          "Ghetto, Fondamenta della Misericordia et Madonna dell'Orto."
        ],
        [
          "Jour 5 · Castello",
          "Arsenale, Via Garibaldi, Giardini et Sant'Elena ; horaires des expositions variables."
        ],
        [
          "Jour 6 · Lido à vélo",
          "De Santa Maria Elisabetta vers Malamocco, Murazzi et Alberoni."
        ],
        [
          "Option · Pellestrina",
          "Ligne 11 et ferry Alberoni–Santa Maria del Mare, villages de pêcheurs et Ca' Roman."
        ],
        [
          "Jour 7 · Padoue ou Trévise",
          "Choisir une ville, pas les deux dans une journée."
        ],
        [
          "Une journée libre",
          "Revenir dans son quartier préféré est aussi un bon choix."
        ]
      ],
      "itinerary": [
        [
          "1",
          "Saint-Marc et Rialto",
          "Une visite majeure et le Grand Canal."
        ],
        [
          "2",
          "Dorsoduro",
          "Accademia, Zattere et Salute."
        ],
        [
          "3",
          "Murano et Burano",
          "Ou Cannaregio."
        ],
        [
          "4",
          "Cannaregio",
          "Ghetto, canaux et pauses."
        ],
        [
          "5",
          "Castello",
          "Arsenale, Giardini et Sant'Elena."
        ],
        [
          "6",
          "Lido ou Pellestrina",
          "Vélo et ferry selon conditions."
        ],
        [
          "7",
          "Padoue, Trévise ou libre",
          "Une excursion ou retour à Venise."
        ]
      ],
      "adviceTitle": "Ferry et vélo : préparer le trajet",
      "advice": "Ligne 17 Tronchetto–Lido San Nicolò, ligne 11 Alberoni–Santa Maria del Mare vers Pellestrina. Billets vélo et passager distincts, capacité limitée. Vélo interdit dans le centre historique.",
      "heartTitle": "Revoir un endroit aimé",
      "heartText": "Rialto tôt le matin et Zattere en soirée ne ressemblent pas aux mêmes lieux à midi.",
      "faq": [
        [
          "Sept jours, c'est trop ?",
          "Non, si vous alternez quartiers, îles et Vénétie."
        ],
        [
          "Pellestrina à vélo ?",
          "Oui, en vérifiant ferry, billets et réservation éventuelle."
        ],
        [
          "Pass ACTV sept jours obligatoire ?",
          "Non, comparer vos trajets au pass de 65 €."
        ],
        [
          "Biennale fermée ?",
          "Castello et les Giardini restent intéressants pour se promener."
        ]
      ]
    },
    "es": {
      "title": "Una semana en Venecia: itinerario de 7 días por islas y barrios",
      "kicker": "Itinerario · 4–7 días",
      "subtitle": "Más allá de San Marcos: Cannaregio, Castello, Lido, Pellestrina y Véneto.",
      "description": "Venecia en 7 días: Rialto, Dorsoduro, Murano, Burano, Cannaregio, Castello, bicicleta en Lido y excursión a Padua o Treviso.",
      "imageAlt": "Paisaje de la laguna de Venecia para una semana de viaje",
      "badges": [
        [
          "Duración",
          "4–7 días"
        ],
        [
          "Ciudad",
          "Barrios y museos"
        ],
        [
          "Islas",
          "Lido y Pellestrina"
        ],
        [
          "Excursión",
          "Padua o Treviso"
        ]
      ],
      "introTitle": "Una semana en Venecia no es demasiado",
      "intro": [
        "Tras tres días clásicos puedes recorrer barrios a otro ritmo, pasar un día junto al mar y conocer una ciudad cercana de Véneto.",
        "Los días 1–3 cubren Rialto/San Marcos, Dorsoduro y las islas o Cannaregio. Después llegan Castello, Lido y una excursión flexible.",
        "En verano el mar es tentador; en invierno puedes cambiarlo por museos. El orden no es obligatorio."
      ],
      "highlights": [
        [
          "Día 4 · Cannaregio",
          "Gueto, Misericordia y Madonna dell'Orto."
        ],
        [
          "Día 5 · Castello",
          "Arsenale, Via Garibaldi, Giardini y Sant'Elena; Biennale según calendario."
        ],
        [
          "Día 6 · Lido en bici",
          "De Santa Maria Elisabetta a Malamocco, Murazzi y Alberoni."
        ],
        [
          "Opción · Pellestrina",
          "Línea 11 y ferry Alberoni–Santa Maria del Mare, pueblos pesqueros y Ca' Roman."
        ],
        [
          "Día 7 · Padua o Treviso",
          "Elige una ciudad para disfrutarla."
        ],
        [
          "Día flexible",
          "Repetir un lugar favorito también vale la pena."
        ]
      ],
      "itinerary": [
        [
          "1",
          "San Marcos y Rialto",
          "Gran Canal y una visita importante."
        ],
        [
          "2",
          "Dorsoduro",
          "Accademia, Zattere y Salute."
        ],
        [
          "3",
          "Murano y Burano",
          "O Cannaregio."
        ],
        [
          "4",
          "Cannaregio",
          "Gueto, canales y descansos."
        ],
        [
          "5",
          "Castello",
          "Arsenale, Giardini y Sant'Elena."
        ],
        [
          "6",
          "Lido o Pellestrina",
          "Bicicleta y ferry según disponibilidad."
        ],
        [
          "7",
          "Padua, Treviso o libre",
          "Una excursión o más Venecia."
        ]
      ],
      "adviceTitle": "El ferry y la bicicleta se planifican",
      "advice": "Línea 17 Tronchetto–Lido San Nicolò, línea 11 Alberoni–Santa Maria del Mare hacia Pellestrina. Billetes separados para bici y pasajero, con aforo limitado. No se puede circular en bici por el centro histórico.",
      "heartTitle": "Puedes volver a tu lugar preferido",
      "heartText": "Rialto temprano o Zattere al atardecer cambian toda la experiencia.",
      "faq": [
        [
          "¿Siete días son muchos?",
          "No, si combinas ciudad, islas y una excursión."
        ],
        [
          "¿Pellestrina en bici?",
          "Sí, confirma ferry, billetes y reservas."
        ],
        [
          "¿Necesito pase ACTV de siete días?",
          "Solo si tus viajes justifican los 65 €."
        ],
        [
          "¿Si la Biennale está cerrada?",
          "Castello y Giardini merecen un paseo también."
        ]
      ]
    },
    "zh": {
      "title": "威尼斯一周七日游：岛屿、街区与周边城市",
      "kicker": "4–7日深度路线",
      "subtitle": "走出圣马可：Cannaregio、Castello、Lido、Pellestrina 与周边一日游。",
      "description": "威尼斯七日游：Rialto、Dorsoduro、Murano、Burano、Cannaregio、Castello、Lido 骑车，以及 Padova 或 Treviso。",
      "imageAlt": "威尼斯潟湖风景，适合七日游探索",
      "badges": [
        [
          "天数",
          "4–7天"
        ],
        [
          "城区",
          "街区与博物馆"
        ],
        [
          "海岛",
          "Lido 与 Pellestrina"
        ],
        [
          "一日游",
          "Padova 或 Treviso"
        ]
      ],
      "introTitle": "一周游威尼斯并不算长",
      "intro": [
        "前三天熟悉经典景点后，更多时间可以走访真实生活的街区、海滨和周边城市。",
        "第1至3天是 Rialto 与圣马可、Dorsoduro、Murano/Burano 或 Cannaregio。后续增加 Castello、Lido 和可选一日游。",
        "这不是固定的打卡清单。夏天适合海滩，冬天则可以多参观博物馆或重访喜欢的地方。"
      ],
      "highlights": [
        [
          "第4天 · Cannaregio",
          "犹太区、Misericordia 与 Madonna dell'Orto。"
        ],
        [
          "第5天 · Castello",
          "Arsenale、Via Garibaldi、Giardini 与 Sant'Elena；双年展展馆开放情况各有不同。"
        ],
        [
          "第6天 · Lido 骑车",
          "从 Santa Maria Elisabetta 经 Malamocco 到 Murazzi 与 Alberoni。"
        ],
        [
          "另一选择 · Pellestrina",
          "乘11号线与 Alberoni–Santa Maria del Mare 渡船，到渔村及 Ca' Roman，需一整天。"
        ],
        [
          "第7天 · Padova 或 Treviso",
          "一天选一座城市，不要过度赶路。"
        ],
        [
          "自由日",
          "回到最喜欢的桥或运河也非常值得。"
        ]
      ],
      "itinerary": [
        [
          "1",
          "圣马可与 Rialto",
          "大运河和一处重点景点。"
        ],
        [
          "2",
          "Dorsoduro",
          "Accademia、Zattere 与 Salute。"
        ],
        [
          "3",
          "Murano 与 Burano",
          "或选择 Cannaregio。"
        ],
        [
          "4",
          "Cannaregio",
          "犹太区、运河与休息。"
        ],
        [
          "5",
          "Castello",
          "Arsenale、Giardini、Sant'Elena。"
        ],
        [
          "6",
          "Lido 或 Pellestrina",
          "骑行与渡船，注意运力。"
        ],
        [
          "7",
          "Padova、Treviso 或自由日",
          "选择一处，或留在威尼斯。"
        ]
      ],
      "adviceTitle": "骑车搭渡船需提前安排",
      "advice": "17号线连接 Tronchetto 与 Lido San Nicolò，11号线连接 Alberoni 与 Santa Maria del Mare 前往 Pellestrina。自行车与乘客须分别持票，运力有限。历史中心禁止骑车。",
      "heartTitle": "还可以重访喜欢的地点",
      "heartText": "清晨的 Rialto 与晚间的 Zattere，会带来不同的威尼斯感受。",
      "faq": [
        [
          "七天会不会太多？",
          "不会，适合交替探索街区、岛屿与威尼托周边。"
        ],
        [
          "能在 Pellestrina 骑车吗？",
          "可以，但要查船班、车票与可能的预订。"
        ],
        [
          "必须购买 ACTV 七日票吗？",
          "不是，按实际航程对比 €65 的通票。"
        ],
        [
          "双年展不开放怎么办？",
          "Castello 和 Giardini 仍可散步，展馆开放以官方安排为准。"
        ]
      ]
    }
  }
};
const langs:SiteLang[]=['it','en','de','fr','es','zh'];
const related:[string,string][]=[["Itinerari da 1 a 7 giorni","/guide/itinerari-venezia-1-7-giorni"],["Un giorno a Venezia","/guide/venezia-in-un-giorno"],["Due o tre giorni","/guide/venezia-in-due-o-tre-giorni"],["Una settimana","/guide/venezia-in-una-settimana"],["Biglietti ACTV","/come-raggiungere-venezia"],["Museum Pass","/guide/museum-pass-venezia"],["Venezia accessibile","/guide/venezia-accessibile"],["Burano","/guide/burano"],["Pellestrina","/guide/pellestrina"]];
const sources:[string,string][]=[["ACTV · orari linee e avvisi","https://actv.avmspa.it/"],["Venezia Unica · mappe e informazioni","https://www.veneziaunica.it/"],["Comune · regole visitatori","https://www.comune.venezia.it/it/content/sanzioni-comportamenti"]];
const images:Record<ItineraryBookSlug,string>={"itinerari-venezia-1-7-giorni":"/images/home-rialto-vincenzo-landino.webp","venezia-in-un-giorno":"/images/home-rialto-vincenzo-landino.webp","venezia-in-due-o-tre-giorni":"/images/bacino-san-marco-hero-v2.webp","venezia-in-una-settimana":"/images/scopri-venezia-michael-heise.webp"};
export const itineraryBookGuides:Record<ItineraryBookSlug,Record<SiteLang,GuideData>>=Object.fromEntries(itineraryBookSlugs.map(slug=>[slug,Object.fromEntries(langs.map(lang=>[lang,{slug,...source[slug][lang],image:images[slug],experiences:[],related:related.filter(x=>x[1]!==`/guide/${slug}`),officialLinks:sources}]))])) as unknown as Record<ItineraryBookSlug,Record<SiteLang,GuideData>>;
