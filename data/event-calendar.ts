export type EventCalendarDate={startDate:string;endDate:string};

// Confirmed event dates plus explicit seasonal planning windows shared by the
// public Journal month filter and the private Welcome Book stay-date matcher.
// Undated or unconfirmed events stay out until reliable dates are available.
export const eventCalendarDates={
  'biennale-di-venezia':{startDate:'2026-05-09',endDate:'2026-11-22'},
  'regata-storica-2026':{startDate:'2026-09-06',endDate:'2026-09-06'},
  'mostra-del-cinema':{startDate:'2027-09-01',endDate:'2027-09-11'},
  'homo-faber-2026':{startDate:'2026-09-01',endDate:'2026-09-30'},
  'venice-glass-week-2026':{startDate:'2026-09-12',endDate:'2026-09-20'},
  'salone-alto-artigianato-italiano-2026':{startDate:'2026-10-01',endDate:'2026-10-04'},
  'amerigo-vespucci-venezia-2026':{startDate:'2026-10-02',endDate:'2026-10-07'},
  'venice-design-week-2026':{startDate:'2026-10-09',endDate:'2026-10-18'},
  'veleziana-2026':{startDate:'2026-10-10',endDate:'2026-10-18'},
  'biennale-musica-2026':{startDate:'2026-10-10',endDate:'2026-10-24'},
  'venice-hospitality-challenge-2026':{startDate:'2026-10-17',endDate:'2026-10-17'},
  'venice-fashion-week-2026':{startDate:'2026-10-19',endDate:'2026-10-24'},
  'venice-cocktail-week-2026':{startDate:'2026-10-21',endDate:'2026-10-25'},
  'venicemarathon-2026':{startDate:'2026-10-25',endDate:'2026-10-25'},
  'venezia-a-novembre':{startDate:'2026-11-01',endDate:'2026-11-30'},
  'arte-laguna-prize-2026':{startDate:'2026-11-06',endDate:'2026-11-29'},
  'san-martino-venezia':{startDate:'2026-11-11',endDate:'2026-11-11'},
  'venice-noir-2026':{startDate:'2026-11-12',endDate:'2026-11-15'},
  'festa-madonna-salute-venezia':{startDate:'2026-11-21',endDate:'2026-11-21'},
  'carnevale-di-venezia':{startDate:'2027-01-23',endDate:'2027-02-09'},
  'su-e-zo-per-i-ponti-2027':{startDate:'2027-04-18',endDate:'2027-04-18'},
  'salone-nautico-venezia-2027':{startDate:'2027-05-26',endDate:'2027-05-30'},
  'venice-climate-week-2027':{startDate:'2027-06-03',endDate:'2027-06-08'},
  'concerti-piazza-san-marco-2027':{startDate:'2027-06-25',endDate:'2027-07-10'},
  'biennale-architettura-2027':{startDate:'2027-05-08',endDate:'2027-11-21'},
  'festa-del-redentore':{startDate:'2027-07-17',endDate:'2027-07-17'},
  'regata-storica-2027':{startDate:'2027-09-05',endDate:'2027-09-05'},
  'venicemarathon-2027':{startDate:'2027-10-24',endDate:'2027-10-24'}
} as const satisfies Record<string,EventCalendarDate>;

export type EventCalendarSlug=keyof typeof eventCalendarDates;

export function eventCalendarDate(slug:string):EventCalendarDate|undefined{
  return eventCalendarDates[slug as EventCalendarSlug];
}

export function eventOverlapsRange(event:EventCalendarDate,startDate:string,endDate:string){
  return event.startDate<=endDate&&event.endDate>=startDate;
}
