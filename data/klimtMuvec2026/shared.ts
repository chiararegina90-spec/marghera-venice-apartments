import type {SiteLang} from '@/lib/i18n';

export const KLIMT_MUVEC_SLUG='/journal/klimt-schiele-kokoschka-muvec-mestre';
export const KLIMT_MUVEC_START='2026-09-26';
export const KLIMT_MUVEC_END='2027-02-14';
export const KLIMT_MUVEC_PUBLISHED='2026-10-19';
export const KLIMT_MUVEC_MODIFIED='2026-10-19';
export const KLIMT_MUVEC_CARD='/images/journal-klimt-schiele-kokoschka-muvec-card.webp';
export const KLIMT_MUVEC_COVER='/images/journal-klimt-schiele-kokoschka-muvec-cover.webp';
export const KLIMT_MUVEC_OFFICIAL='https://muvemestre.visitmuve.it/mostra/klimt-schiele-kokoschka/';
export const KLIMT_MUVEC_INFO='https://muvemestre.visitmuve.it/muvec/';

type Faq={question:string;answer:string};
export type KlimtMuvecContent={
 title:string;
 metaTitle:string;
 description:string;
 category:string;
 eventDate:string;
 cardTitle:string;
 cardDescription:string;
 imageAlt:string;
 cardImageAlt:string;
 eyebrow:string;
 officialTitle:string;
 lead:string;
 sections:[string,string][];
 quick:{
  title:string;
  whereLabel:string;where:string;
  whenLabel:string;when:string;
  hoursLabel:string;hours:string;
  lastEntryLabel:string;lastEntry:string;
  closedLabel:string;closed:string;
  ticketsLabel:string;tickets:string;
  curatorLabel:string;curator:string;
  idealLabel:string;ideal:string;
  officialLabel:string;
 };
 faqTitle:string;
 faq:Faq[];
 muvecGuideLabel:string;
 muvecGuideText:string;
 sourcesTitle:string;
 officialExhibitionLabel:string;
 officialMuseumLabel:string;
};

export type KlimtMuvecLang=SiteLang;
