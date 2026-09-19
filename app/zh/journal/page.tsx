import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalIndex} from '@/components/LocalizedRich';
import {journalZh} from '@/data/journal-zh';
import {eventArticle} from '@/data/journal-events-2026';
const recentSlugs=['san-martino-venezia','venezia-a-novembre','biennale-architettura-2027','regata-storica-2027','venicemarathon-2027'] as const;
const recentItems=recentSlugs.flatMap(slug=>{const a=eventArticle('zh',slug);return a?[{slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.image,eventDate:a.eventDate}]:[];});
const items=[...Object.values(journalZh).map(a=>({slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.cardImage,eventDate:a.eventDate})),...recentItems];
export const metadata:Metadata={title:'威尼斯旅行日志',description:'节庆、传统、美食、亲子、宠物与实用旅行建议。',alternates:languageAlternates('/zh/journal'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedJournalIndex lang="zh" title='威尼斯旅行日志' subtitle='节庆、传统、美食、亲子、宠物与实用旅行建议。' items={items} readLabel='阅读文章' guideLabel='查看全部旅行指南'/>}
