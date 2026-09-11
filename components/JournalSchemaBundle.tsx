import {hreflang,localePath,type SiteLang} from '@/lib/i18n';
const BASE='https://www.margheraveniceapartments.com';
type Props={lang:SiteLang;logicalPath:string;title:string;description:string;image:string;datePublished?:string;dateModified?:string;event?:{startDate:string;endDate:string;status?:'scheduled'|'completed';locationName?:string}};
const crumbLabels:Record<SiteLang,{home:string;journal:string}>={
 it:{home:'Home',journal:'Journal'},
 en:{home:'Home',journal:'Journal'},
 de:{home:'Startseite',journal:'Journal'},
 fr:{home:'Accueil',journal:'Journal'},
 es:{home:'Inicio',journal:'Journal'},
 zh:{home:'首页',journal:'旅行日志'}
};
export default function JournalSchemaBundle({lang,logicalPath,title,description,image,datePublished,dateModified,event}:Props){
 const labels=crumbLabels[lang]; const pagePath=localePath(logicalPath,lang); const pageUrl=`${BASE}${pagePath}`; const imageUrl=image.startsWith('http')?image:`${BASE}${image}`; const org={'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}};
 const article={'@context':'https://schema.org','@type':'Article',headline:title,description,inLanguage:hreflang[lang],image:[imageUrl],url:pageUrl,mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},author:org,publisher:org,...(datePublished?{datePublished}:{}),...(dateModified?{dateModified}:{})};
 const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:labels.home,item:`${BASE}${localePath('/',lang)}`},{'@type':'ListItem',position:2,name:labels.journal,item:`${BASE}${localePath('/journal',lang)}`},{'@type':'ListItem',position:3,name:title,item:pageUrl}]};
 const eventSchema=event?{'@context':'https://schema.org','@type':'Event',name:title,description,startDate:event.startDate,endDate:event.endDate,eventStatus:event.status==='completed'?'https://schema.org/EventCompleted':'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',inLanguage:hreflang[lang],image:[imageUrl],url:pageUrl,location:{'@type':'Place',name:event.locationName||'Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}}:null;
 return <>{[article,breadcrumb,eventSchema].filter(Boolean).map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}</>;
}
