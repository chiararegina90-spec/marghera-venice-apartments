import type {JournalArticleData} from '@/components/LocalizedRich';

type PrimaryLang='it'|'en';
type AuditedArticle=Pick<JournalArticleData,'slug'|'title'|'description'|'image'|'imageAlt'|'category'|'eventDate'|'lead'|'sections'|'tip'|'official'|'related'>;

export const journalAuditPrimary:Record<PrimaryLang,Record<'festa-del-redentore'|'regata-storica-2026',AuditedArticle>>={
 it:{
  'festa-del-redentore':{
   slug:'festa-del-redentore',title:'Festa del Redentore 2027: 17–18 luglio a Venezia',description:'Redentore 2027 a Venezia: notte dei fuochi sabato 17 luglio, celebrazione religiosa domenica 18, ponte votivo e consigli pratici.',image:'/images/journal-redentore.webp',imageAlt:'Festa del Redentore a Venezia con il Bacino di San Marco',category:'Eventi',eventDate:'17–18 luglio 2027',
   lead:'Il Redentore segue una regola tradizionale stabile: la celebrazione religiosa cade la terza domenica di luglio e la grande notte di festa e fuochi si svolge il sabato precedente. Nel 2027 le date sono quindi sabato 17 e domenica 18 luglio.',
   sections:[
    ['Perché le date 2027 sono certe','La Festa del Redentore è legata alla terza domenica di luglio. Nel 2027 la terza domenica cade il 18 luglio: la notte dei fuochi e delle cene in barca è quindi sabato 17 luglio. Non serve attendere un annuncio annuale per stabilire queste due date di calendario.'],
    ['Sabato 17 luglio: la notte dei fuochi','Il sabato sera il Bacino di San Marco diventa il centro della festa, con barche addobbate, cene lungo le rive e il tradizionale spettacolo pirotecnico. L’orario preciso, le aree di visione, eventuali prenotazioni e le regole di accesso vengono però definite per ogni edizione e non vanno copiate dall’anno precedente.'],
    ['Domenica 18 luglio: la celebrazione religiosa','La domenica è dedicata alla tradizione religiosa legata alla Chiesa del Redentore alla Giudecca. Per la festa viene allestito il ponte votivo temporaneo che collega le Zattere alla Giudecca, uno dei simboli più riconoscibili della ricorrenza.'],
    ['Come organizzare arrivo e rientro','È uno dei fine settimana più intensi dell’estate veneziana. Se soggiorni a Marghera, lasciare l’auto al parcheggio dell’appartamento e raggiungere Venezia con i mezzi pubblici evita parte della pressione su Piazzale Roma e Tronchetto. Gli eventuali servizi speciali e le modifiche ACTV vanno ricontrollati poco prima della festa.'],
    ['Quando prenotare e cosa controllare','Le modalità per accedere ad alcune aree, i posti prenotabili e gli orari operativi non sono dati fissi. Appena il Comune pubblica il piano dell’edizione 2027, conviene verificare accessi, eventuali prenotazioni, orario dei fuochi e organizzazione del ponte votivo.']
   ],
   tip:'Segna già il 17 e 18 luglio 2027 sul calendario. Per tutto ciò che è operativo — orario dei fuochi, accessi, prenotazioni e trasporti speciali — controlla invece le comunicazioni ufficiali dell’edizione 2027.',official:['Comune di Venezia – Festa del Redentore','https://www.comune.venezia.it/it/taxonomy/term/478'],
   related:[['Come raggiungere Venezia','/come-raggiungere-venezia'],['Dove parcheggiare per Venezia','/journal/dove-parcheggiare-venezia'],['Venezia con bambini','/journal/venezia-con-bambini'],['Venezia nascosta','/guide/venezia-nascosta']]
  },
  'regata-storica-2026':{
   slug:'regata-storica-2026',title:'Regata Storica Venezia 2026: archivio e informazioni utili',description:'Archivio della Regata Storica del 6 settembre 2026: corteo storico, regate sul Canal Grande, trasporti e indicazioni per le prossime edizioni.',image:'/images/journal-regata-storica-2026.webp',imageAlt:'Corteo della Regata Storica di Venezia sul Canal Grande',category:'Eventi',eventDate:'6 settembre 2026 • evento concluso',
   lead:'La Regata Storica 2026 si è svolta domenica 6 settembre. Manteniamo questa pagina come archivio dell’edizione appena conclusa e come guida alla tradizione, senza trasferire automaticamente orari, viabilità o modalità del 2026 alle edizioni future.',
   sections:[
    ['Il corteo storico del 2026','Il Corteo Storico-Sportivo è partito nel pomeriggio con imbarcazioni storiche, figuranti in costume, gondole e associazioni della voga alla veneta lungo il Bacino di San Marco e il Canal Grande. È il momento che introduce la parte sportiva della giornata.'],
    ['Le regate sul Canal Grande','Nel 2026 si sono disputate le tradizionali regate, comprese caorline, mascarete femminili e gondolini. Gli orari riportati nel programma 2026 appartengono a quell’edizione e non devono essere considerati validi per la successiva.'],
    ['I punti di osservazione più utilizzati','Bacino di San Marco, Punta della Dogana, Rialto, San Marcuola e la zona di Ca’ Foscari sono stati tra i punti più frequentati. In una futura edizione conviene arrivare presto e verificare eventuali aree regolamentate o tribune.'],
    ['Trasporti e navigazione','Il 6 settembre 2026 ACTV ha applicato modifiche e sospensioni alla navigazione durante la manifestazione. Questo tipo di piano cambia in base al programma e va sempre ricontrollato per l’anno specifico.'],
    ['Perché resta una pagina utile','La Regata Storica è uno dei momenti più importanti della voga alla veneta e unisce storia, sport e cultura locale. L’archivio aiuta a capire come si svolge la giornata senza fingere di conoscere già il programma della prossima edizione.'],
    ['Per la prossima Regata Storica','Quando verrà pubblicato il nuovo programma, aggiorneremo data, orari, regate, trasporti e modalità di accesso. Fino ad allora questa pagina resta chiaramente identificata come archivio 2026.']
   ],
   tip:'L’edizione 2026 è conclusa. Per la prossima Regata Storica usa sempre il programma ufficiale dell’anno corretto e ricontrolla anche le variazioni ACTV.',official:['Sito ufficiale Regata Storica','https://www.regatastoricavenezia.it/'],
   related:[['Mostra del Cinema','/journal/mostra-del-cinema'],['Come raggiungere Venezia','/come-raggiungere-venezia'],['Venezia nascosta','/guide/venezia-nascosta'],['Venezia con bambini','/journal/venezia-con-bambini']]
  }
 },
 en:{
  'festa-del-redentore':{
   slug:'festa-del-redentore',title:'Festa del Redentore 2027: 17–18 July in Venice',description:'Venice Redentore 2027: fireworks night on Saturday 17 July, religious celebration on Sunday 18, votive bridge and practical planning tips.',image:'/images/journal-redentore.webp',imageAlt:'Festa del Redentore celebrations in Venice around St Mark’s Basin',category:'Events',eventDate:'17–18 July 2027',
   lead:'The Redentore follows a stable Venetian tradition: the religious celebration falls on the third Sunday in July, while the main night of celebrations and fireworks takes place on the Saturday before. In 2027 that means Saturday 17 and Sunday 18 July.',
   sections:[
    ['Why the 2027 dates are certain','The Festa del Redentore is tied to the third Sunday in July. In 2027 that Sunday is 18 July, so the traditional fireworks night falls on Saturday 17 July. These calendar dates do not depend on a separate annual announcement.'],
    ['Saturday 17 July: fireworks night','On Saturday evening, St Mark’s Basin becomes the focus of the celebration, with decorated boats, dinners along the waterfront and the traditional fireworks. The exact show time, viewing areas, any reservations and access rules are decided for each edition and should not be copied from the previous year.'],
    ['Sunday 18 July: the religious celebration','Sunday centres on the religious tradition around the Church of the Redentore on Giudecca. A temporary votive bridge links the Zattere with Giudecca for the festival and is one of the celebration’s defining symbols.'],
    ['Planning your journey back','This is one of the busiest summer weekends in Venice. If you are staying in Marghera, leaving the car at the apartment and using public transport avoids some of the pressure around Piazzale Roma and Tronchetto. Any special ACTV services or diversions should be checked shortly before the event.'],
    ['What still needs annual confirmation','Public viewing arrangements, bookable areas, exact fireworks time and operational details are not fixed. Once the City publishes the 2027 plan, check access rules, reservations, transport changes and the votive bridge timetable.']
   ],
   tip:'Put 17–18 July 2027 in your calendar now. For the operational details — fireworks time, access, reservations and special transport — use the official 2027 information closer to the event.',official:['City of Venice – Festa del Redentore','https://www.comune.venezia.it/it/taxonomy/term/478'],
   related:[['Getting to Venice','/en/getting-to-venice'],['Where to park for Venice','/en/journal/dove-parcheggiare-venezia'],['Venice with children','/en/journal/venezia-con-bambini'],['Hidden Venice','/en/guide/venezia-nascosta']]
  },
  'regata-storica-2026':{
   slug:'regata-storica-2026',title:'Venice Regata Storica 2026: archive and practical guide',description:'Archive of the Venice Regata Storica held on 6 September 2026: historic water parade, Grand Canal races, transport notes and guidance for future editions.',image:'/images/journal-regata-storica-2026.webp',imageAlt:'Historic parade during the Venice Regata Storica on the Grand Canal',category:'Events',eventDate:'6 September 2026 • event concluded',
   lead:'The 2026 Regata Storica took place on Sunday 6 September. This page now remains online as an archive of that edition and as an introduction to the tradition, without carrying 2026 times or transport arrangements forward to future years.',
   sections:[
    ['The 2026 historic water parade','The Corteo Storico-Sportivo took place in the afternoon with historic boats, costumed figures, gondolas and Venetian rowing associations moving through St Mark’s Basin and the Grand Canal. It is the ceremonial opening before the racing programme.'],
    ['Racing on the Grand Canal','The 2026 programme included the traditional races for caorline, women’s mascarete and gondolini. Times published for 2026 belong to that edition only and should not be treated as the schedule for the next Regata Storica.'],
    ['Popular places to watch','St Mark’s Basin, Punta della Dogana, Rialto, San Marcuola and the Ca’ Foscari area were among the most popular viewing points. For a future edition, arrive early and check whether any spectator areas or stands are regulated.'],
    ['Transport and navigation changes','ACTV introduced navigation changes and suspensions during the 2026 event. These measures depend on the programme and must be checked again for the relevant year.'],
    ['Why this archive still matters','The Regata Storica is a major expression of voga alla veneta and combines history, competitive rowing and local culture. Keeping the archive helps visitors understand the event without pretending that the next programme has already been announced.'],
    ['For the next Regata Storica','When the new official programme is published, date, race times, transport changes and access arrangements should be updated for that edition. Until then, this page is clearly an archive of 2026.']
   ],
   tip:'The 2026 edition is over. For the next Regata Storica, use the official programme for the correct year and re-check ACTV service changes.',official:['Official Regata Storica website','https://www.regatastoricavenezia.it/'],
   related:[['Venice Film Festival','/en/journal/mostra-del-cinema'],['Getting to Venice','/en/getting-to-venice'],['Hidden Venice','/en/guide/venezia-nascosta'],['Venice with children','/en/journal/venezia-con-bambini']]
  }
 }
};
