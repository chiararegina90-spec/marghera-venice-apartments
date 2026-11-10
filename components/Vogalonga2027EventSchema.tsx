import type {SiteLang} from '@/lib/i18n';
const BASE='https://www.margheraveniceapartments.com';
const title:Record<SiteLang,string>={"it":"Vogalonga Venezia 2027","en":"Vogalonga Venice 2027","de":"Vogalonga Venedig 2027","fr":"Vogalonga Venise 2027","es":"Vogalonga Venecia 2027","zh":"2027 威尼斯 Vogalonga"};
const description:Record<SiteLang,string>={"it":"51ª Vogalonga, percorso remiero non competitivo di circa 30 km nella laguna veneziana.","en":"51st non-competitive 30 km rowing celebration in the Venice lagoon.","de":"51. nicht wettkampforientierte Ruderfahrt über rund 30 km durch die Lagune von Venedig.","fr":"51e randonnée à la rame non compétitive sur environ 30 km dans la lagune de Venise.","es":"51.ª manifestación de remo no competitiva de unos 30 km en la laguna de Venecia.","zh":"第51届威尼斯 Vogalonga，全程约30公里的非竞赛划船活动。"};
export default function Vogalonga2027EventSchema({lang}:{lang:SiteLang}){
 const prefix=lang==='it'?'':`/${lang}`;
 const schema={
  '@context':'https://schema.org','@type':'Event',name:title[lang],description:description[lang],
  startDate:'2027-05-16T09:00:00+02:00',eventStatus:'https://schema.org/EventScheduled',
  eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
  location:{'@type':'Place',name:'Laguna di Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}},
  url:`${BASE}${prefix}/journal/vogalonga-2027`,
  image:`${BASE}/images/journal-vogalonga-2027-cover.webp`,
  sameAs:'https://www.veneziaunica.it/it/cosa-fare-a-venezia/eventi/vogalonga-2027'
 };
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>;
}
