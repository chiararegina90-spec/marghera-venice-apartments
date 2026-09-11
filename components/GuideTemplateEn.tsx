import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideHero from '@/components/GuideHero';
import GuideBody from '@/components/GuideBody';
import EditorialStayCta from '@/components/EditorialStayCta';
import {GuideBadges} from '@/components/GuideTemplate';
import type {GuideData} from '@/data/guideTypes';
import {guideStructuredData} from '@/lib/guideStructuredData';

export default function GuideTemplateEn({data}:{data:GuideData}){
  return <><Header lang="en"/><main className="editorial-page" data-guide={data.slug}>
    <GuideHero lang="en" data={data}/><GuideBadges data={data}/><GuideBody data={data} lang="en"/>
    <EditorialStayCta lang="en" context="guide"/>
  </main><Footer lang="en"/><Script id={`${data.slug}-schema-en`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(guideStructuredData('en',data))}}/></>;
}
