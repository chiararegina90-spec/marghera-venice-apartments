import CommonsPhoto from '@/components/CommonsPhoto';
import CultureCard from '@/components/CultureCard';
import SectionTitle from '@/components/SectionTitle';
import {culturePlaces,type CultureLang} from '@/data/culturePlaces';
import {getGuideEditorial} from '@/data/guideEditorial';

const labels:Record<CultureLang,{culture:string;more:string}>={
 it:{culture:'Arte e cultura',more:'Per capire meglio il luogo'},
 en:{culture:'Art & culture',more:'To understand the destination'},
 de:{culture:'Kunst & Kultur',more:'Das Reiseziel besser verstehen'},
 fr:{culture:'Art & culture',more:'Pour mieux comprendre la destination'},
 es:{culture:'Arte y cultura',more:'Para entender mejor el destino'},
 zh:{culture:'艺术与文化',more:'更深入理解目的地'}
};

export default function GuideEditorialEnhancement({slug,lang}:{slug:string;lang:CultureLang}){
 const editorial=getGuideEditorial(lang,slug);
 if(!editorial) return null;
 const related=(editorial.cultureSlugs||[]).map(s=>culturePlaces.find(p=>p.slug===s)).filter(Boolean);
 return <>
   <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
     <SectionTitle eyebrow={editorial.eyebrow} title={editorial.title} text={editorial.intro}/>
     <div className="mt-8 grid items-start gap-7 lg:grid-cols-[.92fr_1.08fr] lg:gap-9">
      <div className="lg:sticky lg:top-28">
       <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-cream shadow-soft sm:min-h-[430px]">
        <CommonsPhoto query={editorial.imageQuery} alt={editorial.imageAlt} lang={lang} className="h-full w-full object-cover" sizes="(min-width:1024px) 44vw, 100vw"/>
       </div>
       {editorial.extraText&&<div className="mt-4 rounded-[1.5rem] border-l-4 border-aqua bg-cream p-5">
        <p className="font-serif text-2xl text-navy">{editorial.extraTitle}</p>
        <p className="mt-2 leading-7 text-slate-600">{editorial.extraText}</p>
       </div>}
      </div>
      <div className="space-y-4">
       {editorial.blocks.map((block,index)=><article key={block.title} className="rounded-[1.65rem] bg-cream p-6 sm:p-7">
        <div className="text-xs font-black uppercase tracking-[.18em] text-gold">0{index+1} · {labels[lang].more}</div>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-navy">{block.title}</h2>
        <div className="mt-4 space-y-3.5 text-[1.02rem] leading-7 text-slate-600 sm:leading-8">{block.paragraphs.map(p=><p key={p}>{p}</p>)}</div>
       </article>)}
      </div>
     </div>
    </div>
   </section>
   {related.length>0&&editorial.cultureScope&&<section className="bg-cream py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
     <SectionTitle eyebrow={labels[lang].culture} title={editorial.cultureTitle||labels[lang].culture} text={editorial.cultureText||''}/>
     <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {related.map(place=><CultureCard key={place!.slug} place={place!} lang={lang} scope={editorial.cultureScope!}/>) }
     </div>
    </div>
   </section>}
 </>;
}
