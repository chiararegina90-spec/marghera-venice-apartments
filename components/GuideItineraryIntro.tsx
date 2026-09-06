import type {CultureLang} from '@/data/culturePlaces';
import {getGuideEditorial} from '@/data/guideEditorial';
export default function GuideItineraryIntro({slug,lang}:{slug:string;lang:CultureLang}){
 const e=getGuideEditorial(lang,slug); if(!e?.itineraryNote) return null;
 return <p className="mb-8 max-w-4xl rounded-2xl border border-white/15 bg-white/10 p-5 text-white/80">💡 {e.itineraryNote}</p>;
}
