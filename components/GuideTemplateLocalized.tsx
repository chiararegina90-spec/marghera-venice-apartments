import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideHero from '@/components/GuideHero';
import GuideBody from '@/components/GuideBody';
import {GuideBadges} from '@/components/GuideTemplate';
import type {GuideData} from '@/data/guideTypes';

type Lang='de'|'fr'|'es'|'zh';
export default function GuideTemplateLocalized({lang,data}:{lang:Lang;data:GuideData}){
 return <><Header lang={lang}/><main className="editorial-page" data-guide={data.slug}>
   <GuideHero lang={lang} data={data}/><GuideBadges data={data}/><GuideBody data={data} lang={lang}/>
  </main><Footer lang={lang}/><Script id={`${data.slug}-schema-${lang}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'TouristDestination',name:data.title,description:data.description,containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}})}}/></>;
}
