import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideHero from '@/components/GuideHero';
import GuideBody from '@/components/GuideBody';

import type {GuideData} from '@/data/guideTypes';
export type {GuideData} from '@/data/guideTypes';

export default function GuideTemplate({data}:{data:GuideData}){
  return <><Header/><main className="editorial-page" data-guide={data.slug}>
    <GuideHero lang="it" data={data}/>
    <GuideBadges data={data}/>
    <GuideBody data={data} lang="it"/>
  </main><Footer/>
  <Script id={`${data.slug}-schema`} type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    '@context':'https://schema.org','@type':'TouristDestination',name:data.title,
    description:data.description, containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}
  })}}/>
  </>;
}

export function GuideBadges({data}:{data:GuideData}){
 return <section className="relative z-10 -mt-7 px-5 lg:px-8"><div className="mx-auto grid max-w-7xl gap-3 rounded-[1.75rem] bg-white p-5 shadow-soft sm:grid-cols-2 sm:p-6 lg:grid-cols-4">{data.badges.map(([title,text])=><div key={title} className="rounded-[1.25rem] bg-cream p-4 sm:p-5"><p className="text-[11px] font-black uppercase tracking-[.15em] text-gold">{title}</p><p className="mt-1.5 font-serif text-xl text-navy sm:text-2xl">{text}</p></div>)}</div></section>;
}
