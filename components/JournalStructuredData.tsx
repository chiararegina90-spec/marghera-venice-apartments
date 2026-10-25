import type {SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const prefix:Record<SiteLang,string>={it:'',en:'/en',de:'/de',fr:'/fr',es:'/es',zh:'/zh'};
const tag:Record<SiteLang,string>={it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'};
const homeLabel:Record<SiteLang,string>={it:'Home',en:'Home',de:'Startseite',fr:'Accueil',es:'Inicio',zh:'首页'};

export default function JournalStructuredData({
 lang,
 slug,
 title,
 description,
 dateModified,
 datePublished,
 article=true
}:{
 lang:SiteLang;
 slug:string;
 title:string;
 description:string;
 dateModified?:string;
 datePublished?:string;
 article?:boolean;
}){
 const p=prefix[lang];
 const pagePath=`${p}/journal/${slug}`;
 const pageUrl=`${BASE}${pagePath}`;
 const journalUrl=`${BASE}${p}/journal`;
 const homeUrl=`${BASE}${p||''}`;
 const organization={'@type':'Organization',name:'Marghera Venice Apartments',url:BASE};
 const schemas:any[]=[
  {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
   {'@type':'ListItem',position:1,name:homeLabel[lang],item:homeUrl},
   {'@type':'ListItem',position:2,name:'Journal',item:journalUrl},
   {'@type':'ListItem',position:3,name:title,item:pageUrl}
  ]}
 ];
 if(article)schemas.unshift({
  '@context':'https://schema.org','@type':'Article',headline:title,description,inLanguage:tag[lang],
  author:organization,publisher:organization,mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},url:pageUrl,
  ...(datePublished?{datePublished}:{}),...(dateModified?{dateModified}:{})
 });
 return <>{schemas.map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}</>;
}
