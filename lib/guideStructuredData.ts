import type {GuideData} from '@/data/guideTypes';
import {hreflang,localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const guideLabel:Record<SiteLang,string>={it:'Guide',en:'Guides',de:'Reiseführer',fr:'Guides',es:'Guías',zh:'旅行指南'};
const homeLabel:Record<SiteLang,string>={it:'Home',en:'Home',de:'Startseite',fr:'Accueil',es:'Inicio',zh:'首页'};

export function guideStructuredData(lang:SiteLang,data:GuideData){
  const logical=`/guide/${data.slug}`;
  const path=localePath(logical,lang);
  const url=`${BASE}${path}`;
  const image=data.image.startsWith('http')?data.image:`${BASE}${data.image}`;
  const article={
    '@context':'https://schema.org','@type':'Article',headline:data.title,description:data.description,
    inLanguage:hreflang[lang],dateModified:'2026-09-11',mainEntityOfPage:{'@type':'WebPage','@id':url},
    author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},image
  };
  const destination={
    '@context':'https://schema.org','@type':'TouristDestination',name:data.title,description:data.description,
    url,inLanguage:hreflang[lang],image,containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}
  };
  const breadcrumb={
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:homeLabel[lang],item:`${BASE}${localePath('/',lang)}`},
      {'@type':'ListItem',position:2,name:guideLabel[lang],item:`${BASE}${localePath('/guide',lang)}`},
      {'@type':'ListItem',position:3,name:data.title,item:url}
    ]
  };
  const faq=data.faq.length?{
    '@context':'https://schema.org','@type':'FAQPage',inLanguage:hreflang[lang],
    mainEntity:data.faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))
  }:null;
  return faq?[article,destination,breadcrumb,faq]:[article,destination,breadcrumb];
}
