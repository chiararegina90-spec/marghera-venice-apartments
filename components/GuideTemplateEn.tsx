import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideHero from '@/components/GuideHero';
import GuideBody from '@/components/GuideBody';
import {GuideBadges} from '@/components/GuideTemplate';
import type {GuideData} from '@/data/guideTypes';

export default function GuideTemplateEn({data}:{data:GuideData}){
  return <><Header lang="en"/><main className="editorial-page" data-guide={data.slug}>
    <GuideHero lang="en" data={data}/><GuideBadges data={data}/><GuideBody data={data} lang="en"/>
  </main><Footer lang="en"/><Script id={`${data.slug}-schema-en`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'TouristDestination',name:data.title,description:data.description,containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}})}}/></>;
}
