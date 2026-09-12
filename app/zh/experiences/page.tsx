import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedExperiencesPage} from '@/components/LocalizedSecondaryPages';
import type {RichPageData} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
import {gondolaTourContent} from '@/data/gondolaTourContent';

const base=richPages.zh['experiences'];
const gondola=gondolaTourContent.zh.card;
const data:RichPageData={...base,sections:base.sections.map((section,index)=>index===0?{...section,cards:[
  {title:gondola.title,text:gondola.text,image:'/images/gondola-tour-venezia-card.jpg',alt:gondola.alt,href:'/zh/guide/gondola-tour-venezia',label:'查看体验'},
  ...(section.cards||[]).filter(card=>card.title!=='贡多拉与泻湖')
]}:section)};

export const metadata:Metadata={title:'精选体验',description:base.subtitle,alternates:languageAlternates('/zh/experiences'),openGraph:{type:'website',images:[base.hero]},twitter:{card:'summary_large_image',images:[base.hero]}};
export default function Page(){return <LocalizedExperiencesPage lang="zh" data={data}/>}
