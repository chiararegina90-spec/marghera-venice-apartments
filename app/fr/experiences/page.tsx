import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedExperiencesPage} from '@/components/LocalizedSecondaryPages';
import type {RichPageData} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
import {gondolaTourContent} from '@/data/gondolaTourContent';

const base=richPages.fr['experiences'];
const gondola=gondolaTourContent.fr.card;
const data:RichPageData={...base,sections:base.sections.map((section,index)=>index===0?{...section,cards:[
  {title:gondola.title,text:gondola.text,image:'/images/gondola-tour-venezia-card.jpg',alt:gondola.alt,href:'/fr/guide/gondola-tour-venezia',label:'Découvrir l’expérience'},
  ...(section.cards||[]).filter(card=>card.title!=='Gondole & lagune')
]}:section)};

export const metadata:Metadata={title:'Expériences',description:base.subtitle,alternates:languageAlternates('/fr/experiences'),openGraph:{type:'website',images:[base.hero]},twitter:{card:'summary_large_image',images:[base.hero]}};
export default function Page(){return <LocalizedExperiencesPage lang="fr" data={data}/>}
