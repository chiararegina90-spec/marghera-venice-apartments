export type JournalEventImagePair={card:string;cover:string};
export const journalEventImages:Record<string,JournalEventImagePair>={
  'venicemarathon-2026':{card:'/images/journal-events/venicemarathon-2026-card.webp',cover:'/images/journal-events/venicemarathon-2026-cover.webp'},
  'veleziana-2026':{card:'/images/journal-events/veleziana-2026-card.webp',cover:'/images/journal-events/veleziana-2026-cover.webp'},
  'venice-cocktail-week-2026':{card:'/images/journal-events/venice-cocktail-week-2026-card.webp',cover:'/images/journal-events/venice-cocktail-week-2026-cover.webp'},
  'venice-fashion-week-2026':{card:'/images/journal-events/venice-fashion-week-2026-card.webp',cover:'/images/journal-events/venice-fashion-week-2026-cover.webp'},
  'venice-hospitality-challenge-2026':{card:'/images/journal-events/venice-hospitality-challenge-2026-card.webp',cover:'/images/journal-events/venice-hospitality-challenge-2026-cover.webp'},
  'venice-design-week-2026':{card:'/images/journal-events/venice-design-week-2026-card.webp',cover:'/images/journal-events/venice-design-week-2026-cover.webp'},
  'biennale-musica-2026':{card:'/images/journal-events/biennale-musica-2026-card.webp',cover:'/images/journal-events/biennale-musica-2026-cover.webp'},
  'salone-alto-artigianato-italiano-2026':{card:'/images/journal-events/salone-alto-artigianato-italiano-2026-card.webp',cover:'/images/journal-events/salone-alto-artigianato-italiano-2026-cover.webp'},
  'venice-noir-2026':{card:'/images/journal-events/venice-noir-2026-card.webp',cover:'/images/journal-events/venice-noir-2026-cover.webp'},
};
export function journalEventImagePair(slug:string){return journalEventImages[slug];}
