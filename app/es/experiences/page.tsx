import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedExperiencesPage} from '@/components/LocalizedSecondaryPages';
import type {RichPageData} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
import {gondolaTourContent} from '@/data/gondolaTourContent';

const base=richPages.es['experiences'];
const gondola=gondolaTourContent.es.card;
const data:RichPageData={...base,sections:base.sections.map((section,index)=>index===0?{...section,cards:[
  {title:gondola.title,text:gondola.text,image:'/images/gondola-tour-venezia-card.jpg',alt:gondola.alt,href:'/es/guide/gondola-tour-venezia',label:'Descubrir la experiencia'},
  ...(section.cards||[]).filter(card=>card.title!=='Góndola y laguna')
]}:section)};

export const metadata:Metadata={title:'Experiencias',description:base.subtitle,alternates:languageAlternates('/es/experiences'),openGraph:{type:'website',images:[base.hero]},twitter:{card:'summary_large_image',images:[base.hero]}};
export default function Page(){return <LocalizedExperiencesPage lang="es" data={data}/>}
