import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuideHero from '@/components/GuideHero';
import GuideBody from '@/components/GuideBody';
import EditorialStayCta from '@/components/EditorialStayCta';
import {GuideBadges} from '@/components/GuideTemplate';
import type {GuideData} from '@/data/guideTypes';
import type {SiteLang} from '@/lib/i18n';
import {guideStructuredData} from '@/lib/guideStructuredData';

export default function BookQrGuidePage({lang,data}:{lang:SiteLang;data:GuideData}){
 const structured=guideStructuredData(lang,data).map(node=>node['@type']==='Article'?{...node,dateModified:'2026-11-05'}:node);
 return <><Header lang={lang}/><main className="editorial-page" data-guide={data.slug}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured)}}/>
  <GuideHero lang={lang} data={data}/><GuideBadges data={data}/><GuideBody data={data} lang={lang}/>
  <EditorialStayCta lang={lang} context="guide"/>
 </main><Footer lang={lang}/></>;
}
