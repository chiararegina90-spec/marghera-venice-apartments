import type {EventArticle,EventLang} from './journal-events-2026';

// Verified 16 November 2026 against Venezia Unica, Peggy Guggenheim Collection and MUVE a Mestre.
// Existing images are contextual illustrations, not event documentary photographs.
export type Priority2Slug="marghera-on-ice-2026"|"venezia-a-dicembre-2026"|"fucina-degli-angeli-guggenheim-2026"|"da-cosa-nasce-cosa-forte-marghera-2026";
const shared:Record<Priority2Slug,Partial<EventArticle>>={
  "marghera-on-ice-2026": {
    "slug": "marghera-on-ice-2026",
    "image": "/images/journal-natale-capodanno.webp",
    "imageAlt": "Atmosfera natalizia veneziana, fotografia illustrativa e non della pista Marghera on Ice",
    "startDate": "2026-11-14",
    "endDate": "2027-02-09",
    "official": [
      "Marghera on Ice — Venezia Unica",
      "https://www.veneziaunica.it/it/cosa-fare-a-venezia/eventi/marghera-on-ice"
    ],
    "relatedSlugs": [
      "venezia-a-dicembre-2026"
    ],
    "relatedLinks": [
      [
        "Venezia con bambini",
        "/journal/venezia-con-bambini"
      ],
      [
        "Natale e Capodanno a Venezia",
        "/journal/natale-capodanno-venezia"
      ]
    ],
    "eventLocation": {
      "name": "Piazza Mercato, Marghera",
      "addressLocality": "Venezia",
      "addressCountry": "IT"
    },
    "fallbackImage": "/images/journal-natale-capodanno.webp",
    "commonsQuery": "",
    "datePublished": "2026-11-16",
    "dateModified": "2026-11-16"
  },
  "venezia-a-dicembre-2026": {
    "slug": "venezia-a-dicembre-2026",
    "image": "/images/venezia.webp",
    "imageAlt": "Panorama di Venezia, immagine illustrativa della guida di dicembre",
    "official": [
      "Natale Venezia 2026 — Venezia Unica",
      "https://www.veneziaunica.it/it/cosa-fare-a-venezia/eventi/natale-venezia-2026"
    ],
    "relatedSlugs": [
      "marghera-on-ice-2026",
      "fucina-degli-angeli-guggenheim-2026",
      "da-cosa-nasce-cosa-forte-marghera-2026"
    ],
    "relatedLinks": [
      [
        "Natale e Capodanno a Venezia",
        "/journal/natale-capodanno-venezia"
      ],
      [
        "Acqua alta a Venezia",
        "/journal/acqua-alta-a-venezia"
      ],
      [
        "Dove parcheggiare a Venezia",
        "/journal/dove-parcheggiare-venezia"
      ]
    ],
    "fallbackImage": "/images/venezia.webp",
    "commonsQuery": "",
    "datePublished": "2026-11-16",
    "dateModified": "2026-11-16"
  },
  "fucina-degli-angeli-guggenheim-2026": {
    "slug": "fucina-degli-angeli-guggenheim-2026",
    "image": "/images/murano-glass.webp",
    "imageAlt": "Vetro artistico di Murano, immagine di contesto e non delle opere della mostra",
    "startDate": "2026-11-14",
    "endDate": "2027-03-29",
    "official": [
      "Collezione Peggy Guggenheim — Fucina degli Angeli",
      "https://www.guggenheim-venice.it/it/mostre-eventi/mostre/fucina-degli-angeli-peggy-guggenheim-e-il-vetro-artistico-del-novecento/"
    ],
    "relatedSlugs": [
      "venezia-a-dicembre-2026"
    ],
    "relatedLinks": [
      [
        "Collezione Peggy Guggenheim",
        "/guide/musei-venezia/peggy-guggenheim"
      ],
      [
        "Il vetro di Murano",
        "/guide/murano"
      ]
    ],
    "eventLocation": {
      "name": "Collezione Peggy Guggenheim",
      "streetAddress": "Dorsoduro 701",
      "addressLocality": "Venezia",
      "addressCountry": "IT"
    },
    "fallbackImage": "/images/murano-glass.webp",
    "commonsQuery": "",
    "datePublished": "2026-11-16",
    "dateModified": "2026-11-16"
  },
  "da-cosa-nasce-cosa-forte-marghera-2026": {
    "slug": "da-cosa-nasce-cosa-forte-marghera-2026",
    "image": "/images/culture/torre-civica-mestre-cover.webp",
    "imageAlt": "Centro di Mestre, immagine di contesto e non della mostra a Forte Marghera",
    "startDate": "2026-12-04",
    "endDate": "2027-05-09",
    "official": [
      "MUVE a Mestre — Da cosa nasce cosa",
      "https://muvemestre.visitmuve.it/mostra/da-cosa-nasce-cosa/"
    ],
    "relatedSlugs": [
      "venezia-a-dicembre-2026"
    ],
    "relatedLinks": [
      [
        "Scopri Venezia e la terraferma",
        "/scopri-venezia"
      ],
      [
        "Marghera on Ice",
        "/journal/marghera-on-ice-2026"
      ],
      [
        "Visita Forte Marghera",
        "/guide/musei-venezia/forte-marghera"
      ]
    ],
    "eventLocation": {
      "name": "Casermetta 9, Forte Marghera",
      "addressLocality": "Mestre",
      "addressCountry": "IT"
    },
    "fallbackImage": "/images/culture/torre-civica-mestre-cover.webp",
    "commonsQuery": "",
    "datePublished": "2026-11-16",
    "dateModified": "2026-11-16"
  }
};
const localized:Record<EventLang,Record<Priority2Slug,Pick<EventArticle,'title'|'category'|'eventDate'|'description'|'lead'|'sections'|'tip'> & {metaTitle?:string;cardDescription?:string;dateModified?:string}>> = {
  "it": {
    "marghera-on-ice-2026": {
      "title": "Marghera on Ice 2026–27: pattinaggio, mercatini e attività per famiglie",
      "metaTitle": "Marghera on Ice 2026–27: date, pista, eventi e bambini",
      "category": "Eventi a Marghera",
      "eventDate": "14 NOVEMBRE 2026 – 9 FEBBRAIO 2027",
      "description": "Marghera on Ice in Piazza Mercato dal 14 novembre 2026 al 9 febbraio 2027: pista di pattinaggio, mercatini, iniziative per famiglie e inaugurazione.",
      "lead": "A pochi passi dalla vita quotidiana di Marghera, Piazza Mercato si trasforma in un luogo di festa e pattinaggio: Marghera on Ice torna dal 14 novembre 2026 al 9 febbraio 2027, con un programma dedicato anche alle famiglie.",
      "sections": [
        [
          "Quando e dove",
          "La pista è in Piazza Mercato a Marghera. La stagione annunciata da Venezia Unica va dal 14 novembre 2026 al 9 febbraio 2027; l'inaugurazione ufficiale è prevista sabato 21 novembre alle 16:00. La data iniziale della pista e quella della cerimonia sono due cose diverse."
        ],
        [
          "Cosa propone Marghera on Ice",
          "La programmazione ufficiale comprende corsi di pattinaggio, esibizioni artistiche, mercatini domenicali, Cosplay On Ice, iniziative per la Befana, hockey, sfilate con carri allegorici e possibilità di organizzare compleanni. Non tutte le attività si svolgono ogni giorno: controlla il calendario aggiornato."
        ],
        [
          "È adatto a una famiglia?",
          "È una buona occasione per alternare le visite a Venezia a un'attività più tranquilla sulla terraferma. Per bambini piccoli occorre verificare direttamente regole della pista, eventuale assistenza, disponibilità di pattini e prezzi: non presentiamo come garantiti servizi che non risultano confermati per ogni giornata."
        ],
        [
          "Orari, costi e programma",
          "Aperture quotidiane, costi di ingresso, noleggio e calendario dettagliato possono variare durante la stagione. La pagina Venezia Unica è il riferimento per programma e avvisi; evita di basarti su fotografie o listini delle edizioni precedenti."
        ],
        [
          "Perché interessa a chi soggiorna a Marghera",
          "Marghera on Ice permette di vivere un lato più locale del Natale veneziano senza organizzare necessariamente un intero pomeriggio in centro storico. Da Rossi Apartment e Dimora Castelli conviene verificare il percorso preciso e gli orari con la mappa e con i collegamenti locali."
        ]
      ],
      "tip": "Segna già il 21 novembre per l'inaugurazione e controlla il programma prima di uscire: pattinaggio, mercatini e spettacoli hanno calendari differenti."
    },
    "venezia-a-dicembre-2026": {
      "title": "Venezia a dicembre 2026: cosa fare, mostre, Natale e consigli pratici",
      "metaTitle": "Venezia a dicembre 2026: eventi, musei, meteo e itinerari",
      "category": "Venezia pratica",
      "eventDate": "DICEMBRE 2026",
      "description": "Cosa fare a Venezia a dicembre 2026: eventi natalizi, musei aperti, mostre, meteo, acqua alta, bambini e consigli per raggiungere Venezia da Marghera.",
      "lead": "Dicembre è il mese delle luci e delle calli invernali, ma anche quello in cui orari festivi, giornate corte e marea richiedono attenzione. Questa guida unisce esperienze culturali e informazioni pratiche, senza ripetere il programma completo di Natale e Capodanno.",
      "sections": [
        [
          "Venezia a dicembre: atmosfera e clima",
          "Le giornate sono brevi, spesso fresche e umide; possono verificarsi pioggia, nebbia e acqua alta. Vestiti a strati, porta una giacca impermeabile e scarpe adatte al pavé bagnato. Prima della visita consulta le previsioni meteorologiche e quelle del Centro Maree."
        ],
        [
          "Mercatini, luci e piste di pattinaggio",
          "Natale Venezia 2026 comprende luminarie, mercatini e attività diffuse tra centro storico e terraferma. Le piste sono annunciate in Campo San Polo a Venezia, Piazza Ferretto a Mestre e Piazza Mercato a Marghera, dove Marghera on Ice prosegue fino al 9 febbraio 2027. Per gli appuntamenti puntuali verifica il calendario ufficiale."
        ],
        [
          "Mostre da vedere a dicembre",
          "Alla Collezione Peggy Guggenheim prosegue fino al 29 marzo 2027 Fucina degli Angeli, dedicata a Peggy Guggenheim e al vetro artistico del Novecento. Dal 4 dicembre la mostra Da cosa nasce cosa si trasferisce a Casermetta 9, Forte Marghera, fino al 9 maggio 2027. Il Museo M9 di Mestre propone anche PLAYERS fino al 14 febbraio 2027."
        ],
        [
          "Musei aperti durante le feste",
          "MUVE comunica aperture straordinarie in diverse sedi per il ponte dell'Immacolata e dal 25 dicembre al 6 gennaio; Palazzo Ducale e Museo Correr prevedono anche serate prolungate in alcune date. Non tutti i musei osservano lo stesso calendario: controlla la singola scheda per eccezioni, prenotazioni e ultimo ingresso."
        ],
        [
          "Natale e Capodanno: guida dedicata",
          "Per mercatini specifici, fuochi di Capodanno nel Bacino di San Marco, festa a Mestre e punti di osservazione consigliati usa la nostra guida Natale e Capodanno 2026–27. Qui ci concentriamo sulle opzioni valide per l'intero mese, senza duplicare programmi suscettibili di cambiamenti."
        ],
        [
          "Muoversi da Marghera e organizzare le giornate",
          "Lasciare l'auto nel parcheggio privato dell'appartamento e proseguire con bus o treno evita la ricerca di un parcheggio vicino al centro storico. Nei giorni festivi verifica ACTV e Trenitalia; alterna luoghi al coperto, passeggiate e una visita alla terraferma, senza sottovalutare il tempo necessario per muoversi a Venezia."
        ]
      ],
      "tip": "Per dicembre scegli un museo importante, un quartiere da esplorare e un'attività serale: pochi appuntamenti ben collegati funzionano meglio di un programma troppo pieno."
    },
    "fucina-degli-angeli-guggenheim-2026": {
      "title": "Fucina degli Angeli alla Peggy Guggenheim: il vetro che incontra l'arte",
      "metaTitle": "Fucina degli Angeli Venezia 2026–27: mostra Peggy Guggenheim",
      "category": "Mostre a Venezia",
      "eventDate": "14 NOVEMBRE 2026 – 29 MARZO 2027",
      "description": "Fucina degli Angeli alla Collezione Peggy Guggenheim di Venezia dal 14 novembre 2026 al 29 marzo 2027: Egidio Costantini, vetro di Murano e visita.",
      "lead": "Alla Collezione Peggy Guggenheim il vetro di Murano diventa il punto d'incontro fra artigianato e grandi artisti del Novecento. Fucina degli Angeli racconta il progetto visionario di Egidio Costantini e il sostegno decisivo di Peggy Guggenheim.",
      "sections": [
        [
          "Una mostra fra Venezia e arte moderna",
          "Dal 14 novembre 2026 al 29 marzo 2027, la Collezione Peggy Guggenheim presenta Fucina degli Angeli. Peggy Guggenheim e il vetro artistico del Novecento. La mostra, curata da Cristina Beltrami, ricostruisce un capitolo originale del vetro muranese del secondo dopoguerra."
        ],
        [
          "Egidio Costantini e la nascita della Fucina",
          "Nel 1955 Egidio Costantini fondò a Venezia, in Campo Santi Filippo e Giacomo, una galleria dedicata al vetro artistico. Il nome Fucina degli Angeli nacque su suggerimento di Jean Cocteau; l'idea era far dialogare il sapere dei maestri vetrai con i linguaggi degli artisti contemporanei."
        ],
        [
          "Il ruolo di Peggy Guggenheim",
          "Peggy Guggenheim non fu soltanto una collezionista: acquistò opere, sostenne Costantini, lo aiutò a incontrare artisti internazionali e contribuì a dare visibilità al progetto. La mostra permette di leggere Venezia come laboratorio creativo, non solo come città monumentale."
        ],
        [
          "Dove, orari e biglietti",
          "La sede è Palazzo Venier dei Leoni, Dorsoduro 701, lungo il Canal Grande. La Collezione Peggy Guggenheim indica apertura dalle 10:00 alle 18:00, ultimo ingresso alle 17:00, chiusura il martedì e il 25 dicembre. Prezzi, disponibilità ed eventuali eccezioni vanno controllati sul sito ufficiale."
        ],
        [
          "Come abbinarla a un itinerario",
          "Dopo la visita puoi continuare verso la Basilica della Salute, l'Accademia o esplorare Dorsoduro; per approfondire il vetro puoi dedicare un'altra giornata a Murano. Da Marghera raggiungi prima Venezia con i mezzi pubblici, poi prosegui a piedi o in vaporetto."
        ]
      ],
      "tip": "La foto di apertura è illustrativa del vetro muranese, non una riproduzione delle opere esposte. Per vedere i pezzi della mostra e prenotare usa la pagina ufficiale del museo."
    },
    "da-cosa-nasce-cosa-forte-marghera-2026": {
      "cardDescription": "Mostra a Casermetta 9 fino al 9 maggio 2027: MUVE indica 3 dicembre nella pagina Casermette e 4 dicembre nella scheda mostra. Verifica la prima giornata di accesso.",
      "dateModified": "2026-11-24",
      "title": "Da cosa nasce cosa: la mostra a Forte Marghera tra arte e progettazione",
      "metaTitle": "Da cosa nasce cosa a Forte Marghera: mostra 2026–2027",
      "category": "Arte a Mestre e Marghera",
      "eventDate": "4 DICEMBRE 2026 – 9 MAGGIO 2027",
      "description": "Da cosa nasce cosa a Forte Marghera fino al 9 maggio 2027: MUVE indica il 3 o 4 dicembre come inizio. Mostra dei 28 artisti degli Atelier 2025–26.",
      "lead": "Forte Marghera accoglie la seconda tappa di Da cosa nasce cosa, mostra collettiva che racconta il lavoro di ventotto artisti e il valore del processo creativo, dei tentativi e dei cambiamenti.",
      "sections": [
        [
          "Quando e dove",
          "La seconda tappa ufficiale della mostra è programmata dal 4 dicembre 2026 al 9 maggio 2027 nella Casermetta 9 di Forte Marghera, nella terraferma veneziana. La prima fase si svolge a Venezia dal 10 ottobre al 22 novembre 2026."
        ],
        [
          "Il progetto degli Atelier 2025–2026",
          "Da cosa nasce cosa conclude gli Atelier 2025–2026 della Fondazione Musei Civici di Venezia e della Fondazione Bevilacqua La Masa. È curata da Camilla Mozzato e nasce dal confronto con ventotto artisti, tra studi, incontri individuali e workshop."
        ],
        [
          "Perché il titolo richiama Bruno Munari",
          "Il nome riprende il libro Da cosa nasce cosa di Bruno Munari: progettare non è un percorso sempre lineare, ma un processo fatto di prove, trasformazioni e possibilità. La mostra usa questa idea per raccontare la ricerca artistica, senza trasformarla in un'esposizione dedicata al solo Munari."
        ],
        [
          "Visita e informazioni da verificare",
          "La sede di Casermetta 9 e la chiusura del 9 maggio 2027 sono confermate da MUVE, ma le fonti ufficiali riportano due date di inizio diverse. Orari giornalieri, biglietti e accessi possono essere pubblicati o aggiornati separatamente: controlla il sito ufficiale prima di partire e non applicare automaticamente le condizioni della prima sede. La scheda mostra MUVE indica il 4 dicembre 2026 come inizio alla Casermetta 9; la pagina ufficiale Casermette e il programma MUVE indicano invece il 3 dicembre. Non è confermato se il 3 sia un'inaugurazione e il 4 l'apertura ordinaria: verifica il giorno effettivo di ingresso sul sito MUVE prima di partire."
        ],
        [
          "Un'altra Venezia, fuori dalle calli",
          "Forte Marghera è un'occasione per conoscere la creatività della terraferma, con un ritmo diverso dai musei del centro storico. Puoi abbinare la visita a Mestre o a una passeggiata a Marghera; da Rossi Apartment e Dimora Castelli verifica l'itinerario esatto con i collegamenti locali."
        ]
      ],
      "tip": "Non confondere le due tappe: fino al 22 novembre 2026 la mostra è in sedi veneziane; dal 4 dicembre il riferimento è Casermetta 9 a Forte Marghera."
    }
  },
  "en": {
    "marghera-on-ice-2026": {
      "title": "Marghera on Ice 2026–27: skating and family events near Venice",
      "category": "Marghera events",
      "eventDate": "14 NOVEMBER 2026 – 9 FEBRUARY 2027",
      "description": "Marghera on Ice in Piazza Mercato from 14 November 2026 to 9 February 2027: ice skating, markets, family activities and official opening.",
      "lead": "Winter comes to Piazza Mercato in Marghera with an ice rink and a calendar of local celebrations, from 14 November 2026 to 9 February 2027.",
      "sections": [
        [
          "Dates and location",
          "Marghera on Ice takes place in Piazza Mercato. The season starts on 14 November 2026, while the official inauguration is on Saturday 21 November at 16:00. These are two distinct dates."
        ],
        [
          "Skating and special activities",
          "Venezia Unica lists skating lessons and exhibitions, Sunday markets, Cosplay On Ice, Befana activities, hockey, parades and birthday parties. The programme varies by day: do not assume every activity runs throughout the season."
        ],
        [
          "A family-friendly stop",
          "The rink offers a mainland activity to combine with sightseeing in Venice. Check age requirements, skate rental, assistance and prices directly with the organiser before visiting with young children."
        ],
        [
          "Opening hours and tickets",
          "Daily skating hours and charges have not been treated as fixed here, because they can vary. Use the official Venezia Unica calendar for the latest schedule."
        ],
        [
          "Staying in Marghera",
          "If you are staying at Rossi Apartment or Dimora Castelli, you can explore a local festive activity without necessarily going into Venice's historic centre. Check the exact route before leaving."
        ]
      ],
      "tip": "Keep 21 November in mind for the inauguration, and check the calendar for skating and markets before heading out."
    },
    "venezia-a-dicembre-2026": {
      "title": "Venice in December 2026: Christmas, museums, exhibitions and tips",
      "category": "Practical Venice",
      "eventDate": "DECEMBER 2026",
      "description": "Venice in December 2026: Christmas events, winter weather, high tides, museums, exhibitions, activities for kids and easy travel from Marghera.",
      "lead": "December in Venice is all about winter light, festive markets and museums, but shorter days and holiday schedules make planning important. This guide complements our separate Christmas and New Year article.",
      "sections": [
        [
          "Weather and what to pack",
          "Expect cool, damp days with possible rain, fog and high tides. Wear layers and comfortable waterproof shoes, and check the official tide forecast before leaving."
        ],
        [
          "Christmas lights, markets and skating",
          "The official Christmas programme covers Venice and the mainland, with ice rinks in Campo San Polo, Piazza Ferretto and Piazza Mercato, home to Marghera on Ice. Check Venezia Unica for individual event times."
        ],
        [
          "Exhibitions worth planning",
          "The Peggy Guggenheim Collection hosts Fucina degli Angeli until 29 March 2027. From 4 December, Da cosa nasce cosa moves to Casermetta 9 at Forte Marghera until 9 May 2027. M9 Mestre also hosts PLAYERS until 14 February 2027."
        ],
        [
          "Holiday museum openings",
          "Several MUVE museums have extra opening days between late December and early January; the Doge's Palace and Museo Correr also offer selected late openings. Individual museums have different exceptions, so always check each official visitor notice."
        ],
        [
          "Christmas and New Year",
          "For midnight fireworks over St Mark's Basin, the Mestre celebration and detailed festive plans, read our dedicated Christmas and New Year guide rather than relying on outdated information."
        ],
        [
          "Planning from Marghera",
          "Leave your car in the accommodation's free private parking and use bus or train to Venice. Check ACTV and railway holiday schedules and avoid overpacking each day."
        ]
      ],
      "tip": "Plan around one main museum, one neighbourhood and one relaxed evening activity; it is easier to enjoy Venice when you leave room for changes."
    },
    "fucina-degli-angeli-guggenheim-2026": {
      "title": "Fucina degli Angeli in Venice: Peggy Guggenheim and Murano glass",
      "category": "Venice exhibitions",
      "eventDate": "14 NOVEMBER 2026 – 29 MARCH 2027",
      "description": "Fucina degli Angeli at the Peggy Guggenheim Collection, Venice, 14 November 2026–29 March 2027: Egidio Costantini, Murano glass and visiting tips.",
      "lead": "At the Peggy Guggenheim Collection, Murano glass meets modern art through the story of Egidio Costantini's Fucina degli Angeli and Peggy Guggenheim's support.",
      "sections": [
        [
          "Exhibition dates and curator",
          "Fucina degli Angeli. Peggy Guggenheim and 20th-Century Artistic Glass runs from 14 November 2026 to 29 March 2027, curated by Cristina Beltrami. It looks at post-war Murano glassmaking and its links with international modern art."
        ],
        [
          "How the Fucina began",
          "In 1955 Egidio Costantini opened a glass art gallery in Venice's Campo Santi Filippo e Giacomo. Jean Cocteau suggested the name Fucina degli Angeli. The project brought together master glassmakers and artists."
        ],
        [
          "Peggy Guggenheim's contribution",
          "Guggenheim purchased works and helped Costantini forge connections with major artists, supporting the gallery and its international reputation. The exhibition explores this creative network."
        ],
        [
          "Visiting the museum",
          "The collection is at Palazzo Venier dei Leoni, Dorsoduro 701. Standard hours are 10:00–18:00, last entry at 17:00; it closes Tuesdays and on 25 December. Confirm current tickets and any exceptions with the museum."
        ],
        [
          "Explore Dorsoduro and Murano",
          "Pair the museum with the Salute or the Accademia, or plan another day on Murano to explore the island's glassmaking history. Travel into Venice from Marghera by public transport."
        ]
      ],
      "tip": "The article image illustrates Murano glass, not actual exhibition pieces; consult the official museum page for artworks and ticketing."
    },
    "da-cosa-nasce-cosa-forte-marghera-2026": {
      "cardDescription": "At Casermetta 9 until 9 May 2027: MUVE gives 3 December on the Casermette page and 4 December in the exhibition listing. Confirm the first visitor day.",
      "dateModified": "2026-11-24",
      "title": "Da cosa nasce cosa at Forte Marghera: art and creative process",
      "category": "Art in Mestre and Marghera",
      "eventDate": "4 DECEMBER 2026 – 9 MAY 2027",
      "description": "Da cosa nasce cosa at Forte Marghera until 9 May 2027: MUVE sources list 3 or 4 December as the starting date. Exhibition of 28 Atelier artists.",
      "lead": "Forte Marghera hosts the second stage of Da cosa nasce cosa, a group exhibition focused on experimentation and the creative process of 28 artists.",
      "sections": [
        [
          "Dates and venue",
          "The Forte Marghera stage runs from 4 December 2026 to 9 May 2027 at Casermetta 9. The earlier stage is held in Venice from 10 October to 22 November 2026."
        ],
        [
          "Artists and curatorial approach",
          "The exhibition concludes the 2025–26 Ateliers of MUVE and Fondazione Bevilacqua La Masa. Curator Camilla Mozzato worked with 28 artists through studio visits, conversations and workshops."
        ],
        [
          "Why Bruno Munari matters",
          "The title borrows from Bruno Munari's book Da cosa nasce cosa, highlighting experimentation, revision and creative problem-solving. This is not an exhibition solely about Munari."
        ],
        [
          "Visitor information",
          "MUVE confirms the venue and the 9 May 2027 closing date, but its official sources disagree on the opening date. Check the official website for the daily timetable, admission terms and any updates rather than assuming the Venice venue's conditions also apply here. The MUVE exhibition listing gives 4 December 2026 as the start at Casermetta 9, while its Casermette page and MUVE programme say 3 December. It has not been confirmed whether 3 December is an opening ceremony and 4 December the first regular visitor day. Check the actual admission date with MUVE before travelling."
        ],
        [
          "Discover the mainland",
          "Forte Marghera offers a different perspective on Venetian creativity outside the historic centre. Combine it with Mestre or Marghera, allowing time for local transport."
        ]
      ],
      "tip": "Do not confuse the two venues: the exhibition moves to Casermetta 9 at Forte Marghera on 4 December."
    }
  },
  "de": {
    "marghera-on-ice-2026": {
      "title": "Marghera on Ice 2026–27: Eislaufen und Familienprogramm",
      "category": "Veranstaltungen in Marghera",
      "eventDate": "14. NOVEMBER 2026 – 9. FEBRUAR 2027",
      "description": "Marghera on Ice auf der Piazza Mercato: Eislaufen vom 14. November 2026 bis 9. Februar 2027, Märkte, Familienangebote und Eröffnung.",
      "lead": "Auf der Piazza Mercato in Marghera sorgen eine Eisbahn und Veranstaltungen vom 14. November 2026 bis 9. Februar 2027 für Winterstimmung.",
      "sections": [
        [
          "Termine und Ort",
          "Marghera on Ice findet auf der Piazza Mercato statt. Die Saison beginnt am 14. November 2026, die offizielle Eröffnung ist erst am Samstag, 21. November, um 16:00 Uhr."
        ],
        [
          "Programm auf und neben dem Eis",
          "Venezia Unica nennt Eislaufkurse, Kunstlaufvorführungen, Sonntagsmärkte, Cosplay On Ice, Befana-Veranstaltungen, Hockey, Umzüge und Kindergeburtstage. Diese Angebote finden nicht alle täglich statt."
        ],
        [
          "Mit Kindern unterwegs",
          "Die Eisbahn ist eine schöne Ergänzung zum Stadtbesuch in Venedig. Altersregeln, Schlittschuhverleih, Betreuung und Preise sollten Familien vorab direkt prüfen."
        ],
        [
          "Öffnungszeiten und Preise",
          "Tageszeiten und Eintrittspreise können variieren; verlässliche Angaben bietet der aktuelle Veranstalterkalender bei Venezia Unica."
        ],
        [
          "Von Marghera aus",
          "Wer in Rossi Apartment oder Dimora Castelli wohnt, kann hier eine örtliche Winteraktivität erleben, ohne für jeden Ausflug ins historische Zentrum zu fahren."
        ]
      ],
      "tip": "Die Eröffnung ist am 21. November; für Eislaufen und Sonderveranstaltungen unbedingt vorher den aktuellen Kalender prüfen."
    },
    "venezia-a-dicembre-2026": {
      "title": "Venedig im Dezember 2026: Weihnachtszeit, Museen und Tipps",
      "category": "Venedig praktisch",
      "eventDate": "DEZEMBER 2026",
      "description": "Venedig im Dezember 2026: Weihnachtsmärkte, Ausstellungen, Museen, Wetter, Hochwasser, Familienaktivitäten und Anreise ab Marghera.",
      "lead": "Im Dezember zeigt sich Venedig mit Winterlicht und festlicher Stimmung. Kurze Tage, Feiertagsöffnungen und mögliche Hochwasserlagen erfordern jedoch gute Planung.",
      "sections": [
        [
          "Wetter und Kleidung",
          "Kühle, feuchte Tage, Nebel und Regen sind möglich. Warme Schichten, wasserdichte Schuhe und ein Blick auf die offizielle Gezeitenprognose helfen."
        ],
        [
          "Lichter, Märkte und Eisbahnen",
          "Die Weihnachtsangebote verteilen sich auf Venedig, Mestre und Marghera. Eislaufen ist in Campo San Polo, Piazza Ferretto und Piazza Mercato bei Marghera on Ice vorgesehen."
        ],
        [
          "Aktuelle Ausstellungen",
          "Die Peggy Guggenheim Collection zeigt Fucina degli Angeli bis zum 29. März 2027. Ab 4. Dezember zieht Da cosa nasce cosa in die Casermetta 9 im Forte Marghera, wo die Ausstellung bis zum 9. Mai 2027 läuft. M9 in Mestre zeigt PLAYERS bis 14. Februar 2027."
        ],
        [
          "Museen an Feiertagen",
          "MUVE kündigt zusätzliche Öffnungstage und besondere Abendstunden für einzelne Museen an. Die Ausnahmen unterscheiden sich je nach Haus; vor dem Besuch offizielle Hinweise lesen."
        ],
        [
          "Weihnachten und Silvester",
          "Unser eigener Weihnachts- und Silvesterartikel enthält die Informationen zu Feuerwerk im Markusbecken, Fest in Mestre und Zuschauerbereichen."
        ],
        [
          "Anreise ab Marghera",
          "Das Auto kann am Apartment stehen bleiben; mit Bus oder Zug geht es nach Venedig. Überprüfen Sie Feiertagsfahrpläne und planen Sie nicht zu viele Stationen ein."
        ]
      ],
      "tip": "Ein Museum, ein Stadtteil und ein entspannter Abend sind für kurze Wintertage oft die beste Kombination."
    },
    "fucina-degli-angeli-guggenheim-2026": {
      "title": "Fucina degli Angeli: Peggy Guggenheim und Murano-Glas",
      "category": "Kunstausstellungen",
      "eventDate": "14. NOVEMBER 2026 – 29. MÄRZ 2027",
      "description": "Fucina degli Angeli in der Peggy Guggenheim Collection, 14. November 2026–29. März 2027: Egidio Costantini, Murano-Glas und Besuch.",
      "lead": "Die Peggy Guggenheim Collection zeigt, wie Murano-Glas und internationale Kunst der Moderne durch Egidio Costantinis Fucina degli Angeli zusammenfanden.",
      "sections": [
        [
          "Ausstellung und Termine",
          "Fucina degli Angeli. Peggy Guggenheim und die Glaskunst des 20. Jahrhunderts läuft vom 14. November 2026 bis 29. März 2027. Kuratorin ist Cristina Beltrami."
        ],
        [
          "Die Idee von Egidio Costantini",
          "1955 eröffnete Costantini eine Glaskunstgalerie am Campo Santi Filippo e Giacomo in Venedig. Jean Cocteau schlug den Namen Fucina degli Angeli vor; Glasmacher und Künstler arbeiteten zusammen."
        ],
        [
          "Peggy Guggenheims Rolle",
          "Guggenheim sammelte Werke, vermittelte internationale Kontakte und unterstützte die kreative Entwicklung und Bekanntheit des Projekts."
        ],
        [
          "Öffnungszeiten und Eintritt",
          "Die Sammlung befindet sich im Palazzo Venier dei Leoni, Dorsoduro 701. Übliche Öffnung 10–18 Uhr, letzter Einlass 17 Uhr; dienstags und am 25. Dezember geschlossen. Aktuelle Tickets offiziell prüfen."
        ],
        [
          "Dorsoduro und Murano entdecken",
          "Der Museumsbesuch lässt sich mit der Salute und den Gallerie dell'Accademia verbinden. Für die Geschichte des Glases lohnt sich auch ein Ausflug nach Murano."
        ]
      ],
      "tip": "Das Titelbild illustriert Murano-Glas, nicht die konkreten Ausstellungsstücke. Bilder der Werke und Tickets bietet die offizielle Museumsseite."
    },
    "da-cosa-nasce-cosa-forte-marghera-2026": {
      "cardDescription": "Bis 9. Mai 2027 in Casermetta 9: MUVE nennt den 3. Dezember auf der Casermette-Seite, den 4. Dezember auf der Ausstellungsseite. Besuchsbeginn prüfen.",
      "dateModified": "2026-11-24",
      "title": "Da cosa nasce cosa: Ausstellung im Forte Marghera",
      "category": "Kunst in Mestre und Marghera",
      "eventDate": "4. DEZEMBER 2026 – 9. MAI 2027",
      "description": "Da cosa nasce cosa im Forte Marghera bis 9. Mai 2027: MUVE nennt je nach Quelle den 3. oder 4. Dezember als Beginn. Werke von 28 Atelier-Künstlern.",
      "lead": "Die Gruppenausstellung Da cosa nasce cosa kommt ins Forte Marghera und erzählt von Experimenten und kreativen Prozessen von 28 Kunstschaffenden.",
      "sections": [
        [
          "Termine und Ort",
          "Vom 4. Dezember 2026 bis 9. Mai 2027 ist die Ausstellung in Casermetta 9 im Forte Marghera vorgesehen. Zuvor läuft sie vom 10. Oktober bis 22. November 2026 an Standorten in Venedig."
        ],
        [
          "Ateliers und Künstler",
          "Die Ausstellung schließt die Ateliers 2025–26 von MUVE und Fondazione Bevilacqua La Masa ab. Camilla Mozzato begleitet 28 Beteiligte durch Studiobesuche und Workshops."
        ],
        [
          "Bruno Munari als Inspiration",
          "Der Titel greift Bruno Munaris Buch Da cosa nasce cosa auf und betont Entwürfe, Versuche und Veränderungen. Die Ausstellung ist nicht allein Munari gewidmet."
        ],
        [
          "Hinweise zum Besuch",
          "MUVE bestätigt Ort und Enddatum am 9. Mai 2027, aber die offiziellen Quellen nennen unterschiedliche Anfangstage. Öffnungszeiten, Eintritt und Zugänge vor dem Besuch prüfen. Auf der MUVE-Ausstellungsseite steht der 4. Dezember 2026 als Beginn in Casermetta 9, während die offizielle Casermette-Seite und das MUVE-Programm den 3. Dezember nennen. Ob der 3. Dezember eine Vernissage und der 4. Dezember der reguläre Besuchsbeginn ist, wurde nicht bestätigt. Bitte vor der Anreise den ersten Besuchstag bei MUVE prüfen."
        ],
        [
          "Kunst auf dem Festland",
          "Forte Marghera erschließt eine andere Seite der venezianischen Kulturlandschaft; kombinieren Sie die Ausstellung mit Mestre oder Marghera."
        ]
      ],
      "tip": "Achtung bei der Planung: Ab 4. Dezember gilt Casermetta 9 im Forte Marghera als Ausstellungsort."
    }
  },
  "fr": {
    "marghera-on-ice-2026": {
      "title": "Marghera on Ice 2026–27 : patinage et activités en famille",
      "category": "Événements à Marghera",
      "eventDate": "14 NOVEMBRE 2026 – 9 FÉVRIER 2027",
      "description": "Marghera on Ice sur la Piazza Mercato, du 14 novembre 2026 au 9 février 2027 : patinoire, marchés, famille et inauguration.",
      "lead": "Sur la Piazza Mercato de Marghera, une patinoire et des animations apportent une atmosphère hivernale du 14 novembre 2026 au 9 février 2027.",
      "sections": [
        [
          "Dates et emplacement",
          "L'événement se déroule sur la Piazza Mercato. La saison débute le 14 novembre 2026, tandis que l'inauguration officielle aura lieu samedi 21 novembre à 16 h."
        ],
        [
          "Patinage et animations",
          "Venezia Unica annonce cours et démonstrations de patinage, marchés dominicaux, Cosplay On Ice, animations de l'Épiphanie, hockey, défilés et anniversaires. Chaque activité suit son propre calendrier."
        ],
        [
          "Une sortie en famille",
          "La piste offre une pause sur la terre ferme pendant un séjour à Venise. Vérifiez les conditions d'âge, la location des patins, l'accompagnement et les tarifs auprès de l'organisateur."
        ],
        [
          "Horaires et tarifs",
          "Les horaires quotidiens et les prix peuvent évoluer. Consultez le programme officiel plutôt que les informations des éditions précédentes."
        ],
        [
          "Séjourner à Marghera",
          "Depuis Rossi Apartment ou Dimora Castelli, profitez d'une activité locale sans traverser systématiquement le centre historique de Venise."
        ]
      ],
      "tip": "Retenez le 21 novembre pour l'inauguration et consultez le calendrier pour les autres rendez-vous."
    },
    "venezia-a-dicembre-2026": {
      "title": "Venise en décembre 2026 : Noël, musées, expositions et conseils",
      "category": "Venise pratique",
      "eventDate": "DÉCEMBRE 2026",
      "description": "Visiter Venise en décembre 2026 : marchés de Noël, expositions, musées, météo, acqua alta et activités en famille depuis Marghera.",
      "lead": "En décembre, Venise s'illumine tout en retrouvant un rythme hivernal. Les journées courtes et les horaires des fêtes demandent une organisation souple.",
      "sections": [
        [
          "Météo et vêtements",
          "Temps frais et humide, pluie, brume et acqua alta sont possibles. Préparez des vêtements superposés et des chaussures imperméables, puis vérifiez les prévisions officielles des marées."
        ],
        [
          "Lumières, marchés et patinoires",
          "Le programme de Noël couvre Venise et sa terre ferme. Des patinoires sont annoncées à Campo San Polo, Piazza Ferretto et Piazza Mercato pour Marghera on Ice."
        ],
        [
          "Expositions du mois",
          "Fucina degli Angeli est présentée à la Collection Peggy Guggenheim jusqu'au 29 mars 2027. Da cosa nasce cosa s'installe à Casermetta 9, Forte Marghera, du 4 décembre au 9 mai 2027. À Mestre, PLAYERS continue au M9 jusqu'au 14 février 2027."
        ],
        [
          "Musées pendant les fêtes",
          "MUVE annonce des ouvertures exceptionnelles et certaines soirées prolongées. Les exceptions varient selon les musées : consultez les pages officielles avant toute visite."
        ],
        [
          "Noël et Nouvel An",
          "La page dédiée de MVA explique les feux d'artifice du bassin de Saint-Marc, la fête à Mestre et les informations pratiques du réveillon."
        ],
        [
          "Depuis Marghera",
          "Laissez la voiture sur le parking privé du logement et rejoignez Venise en bus ou train. Vérifiez les horaires des jours fériés et gardez du temps libre."
        ]
      ],
      "tip": "En hiver, un grand musée, un quartier et une soirée tranquille composent souvent une très belle journée."
    },
    "fucina-degli-angeli-guggenheim-2026": {
      "title": "Fucina degli Angeli : Peggy Guggenheim et le verre de Murano",
      "category": "Expositions à Venise",
      "eventDate": "14 NOVEMBRE 2026 – 29 MARS 2027",
      "description": "Fucina degli Angeli à la Collection Peggy Guggenheim, du 14 novembre 2026 au 29 mars 2027 : Egidio Costantini, verre de Murano et visite.",
      "lead": "La Collection Peggy Guggenheim retrace la rencontre entre les maîtres verriers de Murano, les artistes du XXe siècle et Egidio Costantini.",
      "sections": [
        [
          "Dates et commissariat",
          "L'exposition se tient du 14 novembre 2026 au 29 mars 2027 sous le commissariat de Cristina Beltrami. Elle explore une aventure majeure du verre artistique d'après-guerre."
        ],
        [
          "Les débuts de la Fucina",
          "En 1955, Egidio Costantini ouvre à Venise une galerie dédiée au verre. Jean Cocteau propose le nom Fucina degli Angeli, qui associe les savoir-faire de Murano et la création moderne."
        ],
        [
          "Peggy Guggenheim, soutien essentiel",
          "Guggenheim acquiert des œuvres, met Costantini en relation avec des artistes internationaux et contribue à la reconnaissance de son projet."
        ],
        [
          "Visiter la Collection",
          "Le musée est situé au Palazzo Venier dei Leoni, Dorsoduro 701. Horaires habituels 10 h–18 h, dernière entrée 17 h ; fermé le mardi et le 25 décembre. Billets à vérifier sur le site officiel."
        ],
        [
          "Découvrir Dorsoduro et Murano",
          "Combinez la visite avec la Salute ou l'Accademia, et consacrez une autre journée à Murano pour découvrir l'histoire du verre."
        ]
      ],
      "tip": "La photo d'illustration montre le verre de Murano et non des œuvres précises de l'exposition. Consultez le musée pour les images officielles."
    },
    "da-cosa-nasce-cosa-forte-marghera-2026": {
      "cardDescription": "À Casermetta 9 jusqu’au 9 mai 2027 : MUVE indique le 3 décembre sur la page Casermette et le 4 décembre sur la fiche exposition. Confirmez l’ouverture au public.",
      "dateModified": "2026-11-24",
      "title": "Da cosa nasce cosa à Forte Marghera : art et création",
      "category": "Art à Mestre et Marghera",
      "eventDate": "4 DÉCEMBRE 2026 – 9 MAI 2027",
      "description": "Da cosa nasce cosa à Forte Marghera jusqu’au 9 mai 2027 : selon les sources MUVE, début annoncé les 3 ou 4 décembre. Exposition de 28 artistes.",
      "lead": "À Forte Marghera, l'exposition Da cosa nasce cosa met en lumière le travail et les expérimentations de vingt-huit artistes.",
      "sections": [
        [
          "Dates et lieu",
          "La seconde étape se tient du 4 décembre 2026 au 9 mai 2027 à Casermetta 9, Forte Marghera. La première étape a lieu à Venise du 10 octobre au 22 novembre 2026."
        ],
        [
          "Les Ateliers 2025–2026",
          "Cette exposition clôt les Ateliers de MUVE et de la Fondazione Bevilacqua La Masa. Camilla Mozzato a travaillé avec 28 artistes à travers visites d'ateliers, échanges et workshops."
        ],
        [
          "L'inspiration de Bruno Munari",
          "Le titre reprend celui du livre Da cosa nasce cosa de Bruno Munari et évoque essais, transformations et processus de création."
        ],
        [
          "Avant la visite",
          "MUVE confirme le lieu et la fin de l’exposition au 9 mai 2027, mais ses sources divergent sur la première journée. Pour les horaires, tarifs et accès, consultez les informations officielles actualisées. La fiche de l’exposition MUVE indique le 4 décembre 2026 pour la Casermetta 9, mais la page officielle Casermette et le programme MUVE annoncent le 3 décembre. Rien ne confirme que le 3 corresponde au vernissage et le 4 à l’ouverture habituelle au public. Vérifiez auprès de MUVE la première journée de visite avant de vous déplacer."
        ],
        [
          "Découvrir la terre ferme",
          "Forte Marghera permet d'explorer un autre visage culturel de Venise, à associer à Mestre ou Marghera."
        ]
      ],
      "tip": "À partir du 4 décembre, rendez-vous à Casermetta 9, Forte Marghera, et non dans les salles de la première étape vénitienne."
    }
  },
  "es": {
    "marghera-on-ice-2026": {
      "title": "Marghera on Ice 2026–27: patinaje y planes para familias",
      "category": "Eventos en Marghera",
      "eventDate": "14 NOVIEMBRE 2026 – 9 FEBRERO 2027",
      "description": "Marghera on Ice en Piazza Mercato, del 14 de noviembre de 2026 al 9 de febrero de 2027: pista, mercadillos e inauguración.",
      "lead": "Piazza Mercato de Marghera acoge una pista de hielo y actividades invernales desde el 14 de noviembre de 2026 hasta el 9 de febrero de 2027.",
      "sections": [
        [
          "Fechas y lugar",
          "Marghera on Ice se celebra en Piazza Mercato. La temporada comienza el 14 de noviembre de 2026 y la inauguración oficial está prevista para el sábado 21 de noviembre a las 16:00."
        ],
        [
          "Actividades sobre hielo y mercadillos",
          "Venezia Unica anuncia clases, exhibiciones de patinaje artístico, mercadillos dominicales, Cosplay On Ice, actividades de Reyes, hockey, desfiles y cumpleaños. No todo se celebra a diario."
        ],
        [
          "Una actividad familiar",
          "Es una opción para combinar Venecia con un plan más tranquilo en tierra firme. Comprueba edades, alquiler de patines, acompañamiento y precios antes de ir con niños pequeños."
        ],
        [
          "Horarios y entradas",
          "Los horarios diarios y las tarifas pueden variar. Consulta el calendario oficial actualizado y no uses los datos de años anteriores."
        ],
        [
          "Alojarse en Marghera",
          "Desde Rossi Apartment o Dimora Castelli puedes disfrutar de una actividad local sin entrar al centro histórico cada día."
        ]
      ],
      "tip": "La inauguración es el 21 de noviembre; revisa el programa antes de acudir a cualquier actividad."
    },
    "venezia-a-dicembre-2026": {
      "title": "Venecia en diciembre de 2026: Navidad, museos y consejos",
      "category": "Venecia práctica",
      "eventDate": "DICIEMBRE 2026",
      "description": "Qué hacer en Venecia en diciembre de 2026: mercados, museos, exposiciones, clima, acqua alta, familias y transporte desde Marghera.",
      "lead": "Diciembre trae luces y una Venecia más invernal, pero también días cortos y horarios especiales. Esta guía reúne ideas prácticas sin repetir el programa completo de Nochevieja.",
      "sections": [
        [
          "Tiempo y ropa",
          "Puede hacer frío y humedad, con lluvia, niebla y episodios de acqua alta. Lleva ropa por capas y calzado impermeable, y consulta la previsión oficial de mareas."
        ],
        [
          "Navidad y patinaje",
          "El programa navideño reúne actividades en Venecia, Mestre y Marghera. Se anuncian pistas en Campo San Polo, Piazza Ferretto y Piazza Mercato, sede de Marghera on Ice."
        ],
        [
          "Exposiciones recomendadas",
          "La Peggy Guggenheim Collection presenta Fucina degli Angeli hasta el 29 de marzo de 2027. Da cosa nasce cosa llega a Casermetta 9, Forte Marghera, el 4 de diciembre y continúa hasta el 9 de mayo de 2027. M9 de Mestre presenta PLAYERS hasta el 14 de febrero de 2027."
        ],
        [
          "Museos en festivos",
          "MUVE anuncia aperturas extraordinarias y algunas noches de horario ampliado. Revisa las excepciones de cada museo antes de ir."
        ],
        [
          "Navidad y Año Nuevo",
          "Nuestra guía específica explica los fuegos de medianoche en el Bacino di San Marco, la fiesta de Mestre y los puntos recomendados para verlos."
        ],
        [
          "Desde Marghera",
          "Deja el coche en el aparcamiento privado del alojamiento y llega a Venecia en bus o tren. Consulta los horarios festivos y no sobrecargues cada día."
        ]
      ],
      "tip": "Un museo, un barrio y un plan nocturno son suficientes para disfrutar de un día invernal sin prisas."
    },
    "fucina-degli-angeli-guggenheim-2026": {
      "title": "Fucina degli Angeli: Peggy Guggenheim y el vidrio de Murano",
      "category": "Exposiciones en Venecia",
      "eventDate": "14 NOVIEMBRE 2026 – 29 MARZO 2027",
      "description": "Fucina degli Angeli en la Peggy Guggenheim Collection del 14 de noviembre de 2026 al 29 de marzo de 2027: Egidio Costantini y vidrio artístico.",
      "lead": "La Peggy Guggenheim Collection cuenta cómo Egidio Costantini, los maestros vidrieros de Murano y los artistas modernos dieron forma a Fucina degli Angeli.",
      "sections": [
        [
          "Fechas y comisariado",
          "La exposición se celebra del 14 de noviembre de 2026 al 29 de marzo de 2027 y está comisariada por Cristina Beltrami. Explora el vidrio artístico de Murano del siglo XX."
        ],
        [
          "Origen de la Fucina",
          "En 1955 Egidio Costantini fundó en Venecia una galería de vidrio artístico. Jean Cocteau propuso el nombre Fucina degli Angeli y nació un diálogo entre vidrio y arte moderno."
        ],
        [
          "La aportación de Peggy Guggenheim",
          "La coleccionista compró obras y ayudó a Costantini a relacionarse con artistas internacionales, impulsando la proyección del proyecto."
        ],
        [
          "Visitar el museo",
          "La sede es Palazzo Venier dei Leoni, Dorsoduro 701. Horario habitual de 10:00 a 18:00, última entrada a las 17:00; cerrado los martes y el 25 de diciembre. Comprueba las entradas oficiales."
        ],
        [
          "Dorsoduro y Murano",
          "Combina la exposición con la Salute o la Accademia, y dedica otra visita a Murano para conocer la tradición vidriera."
        ]
      ],
      "tip": "La fotografía ilustra el vidrio de Murano, no piezas concretas de la exposición. Consulta las imágenes oficiales del museo."
    },
    "da-cosa-nasce-cosa-forte-marghera-2026": {
      "cardDescription": "En Casermetta 9 hasta el 9 de mayo de 2027: MUVE indica el 3 de diciembre en Casermette y el 4 en la ficha de la exposición. Confirma cuándo abre al público.",
      "dateModified": "2026-11-24",
      "title": "Da cosa nasce cosa en Forte Marghera: arte y creación",
      "category": "Arte en Mestre y Marghera",
      "eventDate": "4 DICIEMBRE 2026 – 9 MAYO 2027",
      "description": "Da cosa nasce cosa en Forte Marghera hasta el 9 de mayo de 2027: MUVE señala el 3 o el 4 de diciembre como inicio según la fuente. Exposición de 28 artistas.",
      "lead": "Forte Marghera acoge la segunda etapa de Da cosa nasce cosa, una exposición colectiva dedicada a los procesos creativos de veintiocho artistas.",
      "sections": [
        [
          "Fechas y sede",
          "La etapa en Casermetta 9, Forte Marghera, va del 4 de diciembre de 2026 al 9 de mayo de 2027. Antes se presenta en Venecia entre el 10 de octubre y el 22 de noviembre de 2026."
        ],
        [
          "Ateliers y artistas",
          "La muestra cierra los Ateliers 2025–26 de MUVE y Fondazione Bevilacqua La Masa. Camilla Mozzato ha trabajado con 28 artistas mediante visitas a estudios, encuentros y talleres."
        ],
        [
          "La referencia a Bruno Munari",
          "El título procede del libro Da cosa nasce cosa de Bruno Munari y evoca un diseño abierto a pruebas y transformaciones."
        ],
        [
          "Información práctica",
          "MUVE confirma la sede y el final del 9 de mayo de 2027, pero sus fuentes dan fechas iniciales distintas. Consulta horarios, entradas y accesos en la fuente oficial antes de la visita. La ficha de la exposición MUVE indica el 4 de diciembre de 2026 en Casermetta 9, mientras que la página oficial Casermette y el programa MUVE señalan el 3 de diciembre. No está confirmado que el día 3 sea la inauguración y el 4 el inicio de las visitas ordinarias. Comprueba la primera fecha de acceso público con MUVE antes de ir."
        ],
        [
          "Otra Venecia en tierra firme",
          "Forte Marghera permite acercarse a la cultura local fuera del centro histórico, con la posibilidad de visitar Mestre y Marghera."
        ]
      ],
      "tip": "Desde el 4 de diciembre la sede es Casermetta 9 en Forte Marghera, no las salas anteriores de Venecia."
    }
  },
  "zh": {
    "marghera-on-ice-2026": {
      "title": "2026–27 Marghera on Ice：滑冰、集市与亲子活动",
      "category": "Marghera 活动",
      "eventDate": "2026年11月14日–2027年2月9日",
      "description": "Marghera on Ice 位于 Piazza Mercato，2026年11月14日至2027年2月9日举办滑冰、集市、亲子活动及开幕式。",
      "lead": "Marghera 的 Piazza Mercato 冬季变身滑冰和节庆活动场地，活动持续至2027年2月9日，是游览威尼斯之外的轻松选择。",
      "sections": [
        [
          "日期与地点",
          "活动地点是 Marghera 的 Piazza Mercato。滑冰季从2026年11月14日开始，官方开幕式为11月21日星期六16:00，两者不是同一天。"
        ],
        [
          "活动有哪些",
          "Venezia Unica 公布滑冰课程、花样滑冰表演、周日集市、Cosplay On Ice、主显节活动、冰球、巡游及生日派对等内容。不同活动日期不同，并非每天都有。"
        ],
        [
          "适合亲子吗",
          "可以作为威尼斯市区游览之外的家庭活动。幼童参加前请核实年龄限制、冰鞋租赁、陪护安排和收费。"
        ],
        [
          "开放时间与票价",
          "每日开放时间和票价可能调整，出发前应查看 Venezia Unica 官方活动日历，不能沿用往年安排。"
        ],
        [
          "住在 Marghera 的优势",
          "入住 Rossi Apartment 或 Dimora Castelli 的旅客，可以在当地体验冬日节庆，不必每天都进入威尼斯历史中心。"
        ]
      ],
      "tip": "11月21日是正式开幕式；参加滑冰或集市前请先核对当天节目。"
    },
    "venezia-a-dicembre-2026": {
      "title": "2026年12月威尼斯旅行：圣诞节、博物馆与实用建议",
      "category": "威尼斯实用攻略",
      "eventDate": "2026年12月",
      "description": "2026年12月威尼斯旅游攻略：圣诞活动、博物馆、展览、冬季天气、高潮位、亲子出行和 Marghera 交通。",
      "lead": "12月的威尼斯充满冬季灯饰与节日气氛，但日照时间较短，博物馆节假日开放安排也会变化，需要灵活规划。",
      "sections": [
        [
          "天气与衣物",
          "12月天气偏冷潮湿，可能下雨、有雾或出现高潮位。建议分层保暖、穿防水舒适的鞋，并提前查询官方潮汐预报。"
        ],
        [
          "灯饰、市集和滑冰",
          "官方圣诞节目覆盖威尼斯、Mestre 和 Marghera；Campo San Polo、Piazza Ferretto 以及举办 Marghera on Ice 的 Piazza Mercato 都规划了滑冰场。"
        ],
        [
          "值得关注的展览",
          "佩吉·古根海姆美术馆的 Fucina degli Angeli 持续至2027年3月29日；Da cosa nasce cosa 从2026年12月4日至2027年5月9日在 Forte Marghera 的 Casermetta 9 展出。Mestre M9 的 PLAYERS 展览持续至2027年2月14日。"
        ],
        [
          "节假日博物馆开放",
          "MUVE 公布多个场馆的节日期间特别开放日及部分晚间延长开放安排。不同场馆有不同例外，请查看各馆官方公告。"
        ],
        [
          "圣诞与跨年夜",
          "跨年烟花、Mestre 庆祝活动及最佳观赏地点详见 MVA 独立的圣诞与新年攻略，避免重复已经可能变化的安排。"
        ],
        [
          "从 Marghera 前往威尼斯",
          "可以将车辆留在公寓免费私人停车位，再乘公交或火车进入威尼斯。节日期间务必再次核实交通班次。"
        ]
      ],
      "tip": "冬季一天安排一个重点博物馆、一个街区和一项轻松晚间活动，通常比赶很多地点更舒服。"
    },
    "fucina-degli-angeli-guggenheim-2026": {
      "title": "Fucina degli Angeli：佩吉·古根海姆与穆拉诺艺术玻璃",
      "category": "威尼斯艺术展览",
      "eventDate": "2026年11月14日–2027年3月29日",
      "description": "Fucina degli Angeli 在威尼斯佩吉·古根海姆美术馆举办，展期2026年11月14日至2027年3月29日，介绍 Egidio Costantini 与穆拉诺艺术玻璃。",
      "lead": "佩吉·古根海姆美术馆通过 Fucina degli Angeli 回顾艺术家、Egidio Costantini 与穆拉诺玻璃工匠之间的创新合作。",
      "sections": [
        [
          "展期与策展人",
          "展览于2026年11月14日至2027年3月29日举行，由 Cristina Beltrami 策展，聚焦二战后穆拉诺艺术玻璃与现代艺术的交汇。"
        ],
        [
          "Fucina 的起点",
          "Egidio Costantini 于1955年在威尼斯开办艺术玻璃画廊，Jean Cocteau 建议采用 Fucina degli Angeli 这一名称，让工匠技艺与现代艺术互相启发。"
        ],
        [
          "佩吉·古根海姆的作用",
          "她购买作品、帮助 Costantini 联系国际艺术家，并为项目的发展和国际知名度提供支持。"
        ],
        [
          "参观地点与时间",
          "馆址为 Dorsoduro 701 的 Palazzo Venier dei Leoni。通常10:00–18:00开放，17:00停止入场；周二及12月25日闭馆。票价和例外请查官方页面。"
        ],
        [
          "周边安排",
          "可结合圣母安康大教堂、学院美术馆或 Dorsoduro 街区参观；另一天前往 Murano 了解玻璃工艺。"
        ]
      ],
      "tip": "文章图片仅用于展示穆拉诺玻璃背景，并非展览实物；请以博物馆官方照片及购票信息为准。"
    },
    "da-cosa-nasce-cosa-forte-marghera-2026": {
      "cardDescription": "Casermetta 9 展期至2027年5月9日。MUVE 的 Casermette 页面标注12月3日，展览详情页标注12月4日；请核实首日对公众开放时间。",
      "dateModified": "2026-11-24",
      "title": "Da cosa nasce cosa：Forte Marghera 的艺术创作展",
      "category": "Mestre 与 Marghera 文化",
      "eventDate": "2026年12月4日–2027年5月9日",
      "description": "Forte Marghera 的 Da cosa nasce cosa 展览持续至2027年5月9日。MUVE 官方资料分别标注12月3日或4日开始，涉及28位艺术家。",
      "lead": "Da cosa nasce cosa 在 Forte Marghera 展出，借28位艺术家的探索展现创意过程中不断尝试、调整和变化的意义。",
      "sections": [
        [
          "日期与场馆",
          "Forte Marghera 的 Casermetta 9 展期为2026年12月4日至2027年5月9日。第一阶段于2026年10月10日至11月22日在威尼斯其他场地举办。"
        ],
        [
          "艺术家与驻留项目",
          "展览总结 MUVE 与 Fondazione Bevilacqua La Masa 的2025–26 Atelier 项目，由 Camilla Mozzato 策展，涉及28位艺术家的工作室交流与创作。"
        ],
        [
          "与 Bruno Munari 的联系",
          "展名借自 Bruno Munari 的《Da cosa nasce cosa》，强调设计与艺术中的实验、修改和创造过程，并非单纯介绍这位作者。"
        ],
        [
          "参观提醒",
          "MUVE 已确认举办地点和2027年5月9日闭幕日期，但官方资料对起始日的标注不一致；开放时间、门票及入场方式仍请以官网最新公告为准。 MUVE 展览详情页写明 Casermetta 9 从2026年12月4日开始展出，但官方 Casermette 页面与 MUVE 展览季计划均写为12月3日。尚无官方确认12月3日仅为开幕活动、12月4日才是常规开放日。请在出发前向 MUVE 核实首日公众入场安排。"
        ],
        [
          "走进威尼斯陆地区域",
          "Forte Marghera 提供不同于历史城区的文化体验，也可以搭配 Mestre 和 Marghera 的探索。"
        ]
      ],
      "tip": "12月4日后请前往 Forte Marghera 的 Casermetta 9，不要误往此前威尼斯的展场。"
    }
  }
};

const linkLabels:Record<EventLang,Record<Priority2Slug,string[]>>={
  "it": {
    "marghera-on-ice-2026": [
      "Venezia con bambini",
      "Natale e Capodanno a Venezia"
    ],
    "venezia-a-dicembre-2026": [
      "Natale e Capodanno a Venezia",
      "Acqua alta a Venezia",
      "Dove parcheggiare per Venezia"
    ],
    "fucina-degli-angeli-guggenheim-2026": [
      "Collezione Peggy Guggenheim",
      "Il vetro di Murano"
    ],
    "da-cosa-nasce-cosa-forte-marghera-2026": [
      "Scopri Venezia e la terraferma",
      "Marghera on Ice",
      "Visita Forte Marghera"
    ]
  },
  "en": {
    "marghera-on-ice-2026": [
      "Venice with children",
      "Christmas and New Year in Venice"
    ],
    "venezia-a-dicembre-2026": [
      "Christmas and New Year in Venice",
      "High tide in Venice",
      "Parking for Venice"
    ],
    "fucina-degli-angeli-guggenheim-2026": [
      "Peggy Guggenheim Collection",
      "Murano glass"
    ],
    "da-cosa-nasce-cosa-forte-marghera-2026": [
      "Explore Venice and the mainland",
      "Marghera on Ice",
      "Visit Forte Marghera"
    ]
  },
  "de": {
    "marghera-on-ice-2026": [
      "Venedig mit Kindern",
      "Weihnachten und Silvester in Venedig"
    ],
    "venezia-a-dicembre-2026": [
      "Weihnachten und Silvester in Venedig",
      "Hochwasser in Venedig",
      "Parken für Venedig"
    ],
    "fucina-degli-angeli-guggenheim-2026": [
      "Peggy Guggenheim Collection",
      "Muranoglas"
    ],
    "da-cosa-nasce-cosa-forte-marghera-2026": [
      "Venedig und das Festland entdecken",
      "Marghera on Ice",
      "Forte Marghera besuchen"
    ]
  },
  "fr": {
    "marghera-on-ice-2026": [
      "Venise avec des enfants",
      "Noël et Nouvel An à Venise"
    ],
    "venezia-a-dicembre-2026": [
      "Noël et Nouvel An à Venise",
      "Acqua alta à Venise",
      "Stationner près de Venise"
    ],
    "fucina-degli-angeli-guggenheim-2026": [
      "Collection Peggy Guggenheim",
      "Verre de Murano"
    ],
    "da-cosa-nasce-cosa-forte-marghera-2026": [
      "Découvrir Venise et la terre ferme",
      "Marghera on Ice",
      "Visiter Forte Marghera"
    ]
  },
  "es": {
    "marghera-on-ice-2026": [
      "Venecia con niños",
      "Navidad y Año Nuevo en Venecia"
    ],
    "venezia-a-dicembre-2026": [
      "Navidad y Año Nuevo en Venecia",
      "Acqua alta en Venecia",
      "Dónde aparcar para visitar Venecia"
    ],
    "fucina-degli-angeli-guggenheim-2026": [
      "Colección Peggy Guggenheim",
      "Vidrio de Murano"
    ],
    "da-cosa-nasce-cosa-forte-marghera-2026": [
      "Descubre Venecia y tierra firme",
      "Marghera on Ice",
      "Visitar Forte Marghera"
    ]
  },
  "zh": {
    "marghera-on-ice-2026": [
      "带孩子游览威尼斯",
      "威尼斯圣诞与跨年"
    ],
    "venezia-a-dicembre-2026": [
      "威尼斯圣诞与跨年",
      "威尼斯高潮位",
      "威尼斯停车攻略"
    ],
    "fucina-degli-angeli-guggenheim-2026": [
      "佩吉·古根海姆美术馆",
      "穆拉诺玻璃"
    ],
    "da-cosa-nasce-cosa-forte-marghera-2026": [
      "探索威尼斯及陆地区域",
      "Marghera on Ice",
      "参观 Forte Marghera"
    ]
  }
};

export const journalPriority2Nov2026=Object.fromEntries((Object.keys(localized) as EventLang[]).map(lang=>[
 lang,Object.fromEntries((Object.keys(shared) as Priority2Slug[]).map(slug=>[
  slug,{...shared[slug],...localized[lang][slug],
    relatedLinks:shared[slug].relatedLinks?.map(([label,url],i)=>[linkLabels[lang][slug][i]||label,url] as const),
    metaTitle:localized[lang][slug].metaTitle || (localized[lang][slug].title.length>74?localized[lang][slug].title.slice(0,71)+'…':localized[lang][slug].title)}
 ]))
])) as Record<EventLang,Record<Priority2Slug,EventArticle>>;
