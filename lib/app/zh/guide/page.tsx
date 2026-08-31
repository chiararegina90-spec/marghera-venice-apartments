import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGuideIndex} from '@/components/LocalizedRich';
import {guideDataZh} from '@/data/guides-zh';
const items=Object.values(guideDataZh).map(g=>({title:g.title,subtitle:g.subtitle,text:g.description,image:g.image,alt:g.imageAlt,slug:g.slug}));
export const metadata:Metadata={title:'威尼斯与威尼托旅行指南',description:'从威尼斯、泻湖岛屿到威尼托一日游的实用指南。',alternates:languageAlternates('/zh/guide'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedGuideIndex lang="zh" title='威尼斯与威尼托旅行指南' subtitle='从威尼斯、泻湖岛屿到威尼托一日游的实用指南。' items={items} openLabel='查看指南'/>}
