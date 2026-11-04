import type {EventArticle,EventLang} from './journal-events-2026';

const replacements:Record<EventLang,[string,string]>={
  it:[
    'con prenotazione dedicata disponibile dall’8 novembre alle 10:00.',
    'con prenotazione online obbligatoria.'
  ],
  en:[
    'with dedicated booking opening on 8 November at 10 am.',
    'with advance online booking required.'
  ],
  de:[
    'die separate Reservierung öffnet am 8. November um 10:00 Uhr.',
    'mit verpflichtender Online-Reservierung.'
  ],
  fr:[
    'avec réservation dédiée à partir du 8 novembre à 10 h.',
    'sur réservation en ligne obligatoire.'
  ],
  es:[
    'con reserva específica desde el 8 de noviembre a las 10:00.',
    'con reserva online obligatoria.'
  ],
  zh:[
    '专门预约自11月8日10:00开放。',
    '需提前在线预约。'
  ]
};

export function applyJournalCatchup20261104(item:EventArticle,lang:EventLang,slug:string){
  if(slug!=='venezia-a-novembre')return;

  const [from,to]=replacements[lang];
  item.sections=(item.sections||[]).map(([title,text])=>[
    title,
    text.includes(from)?text.replace(from,to):text
  ] as const);

  item.dateModified='2026-11-04';
}
