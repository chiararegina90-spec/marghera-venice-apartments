import Link from 'next/link';
import EditorialHero from '@/components/EditorialHero';
import type {GuideData} from '@/data/guideTypes';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';

const copy:Record<Lang,{home:string;guides:string;plan:string;back:string;photo:string;breadcrumb:string}>={
 it:{home:'Home',guides:'Guide',plan:'Organizza la visita',back:'← Torna alle guide',photo:'Foto di Stefano Bazzoli su Unsplash',breadcrumb:'Percorso di navigazione'},
 en:{home:'Home',guides:'Guides',plan:'Plan your visit',back:'← Back to guides',photo:'Photo by Stefano Bazzoli on Unsplash',breadcrumb:'Breadcrumb'},
 de:{home:'Startseite',guides:'Reiseführer',plan:'Besuch planen',back:'← Zurück zu den Reiseführern',photo:'Foto: Stefano Bazzoli / Unsplash',breadcrumb:'Brotkrümelnavigation'},
 fr:{home:'Accueil',guides:'Guides',plan:'Organiser la visite',back:'← Retour aux guides',photo:'Photo : Stefano Bazzoli / Unsplash',breadcrumb:'Fil d’Ariane'},
 es:{home:'Inicio',guides:'Guías',plan:'Organizar la visita',back:'← Volver a las guías',photo:'Foto: Stefano Bazzoli / Unsplash',breadcrumb:'Ruta de navegación'},
 zh:{home:'首页',guides:'旅行指南',plan:'规划行程',back:'← 返回旅行指南',photo:'图片：Stefano Bazzoli / Unsplash',breadcrumb:'面包屑导航'}
};
const prefix:Record<Lang,string>={it:'',en:'/en',de:'/de',fr:'/fr',es:'/es',zh:'/zh'};

// Light covers need a little more local contrast behind white copy. Darker images keep the softer overlay.
const strongShadeImages=new Set([
 '/images/lido-venezia-spiaggia.webp',
 '/images/guide-jesolo.webp',
 '/images/veneto-verona-final.webp',
 '/images/guide-certosa-final.webp',
 '/images/veneto-treviso-final.webp',
 '/images/veneto-padova-final.webp',
 '/images/veneto-riviera-brenta-final.webp',
 '/images/veneto-chioggia-pellestrina-final.webp',
 '/images/burano-canale.webp'
]);

export default function GuideHero({lang,data}:{lang:Lang;data:GuideData}){
 const t=copy[lang]; const b=prefix[lang]; const guideHref=lang==='it'?'/guide':`${b}/guide`;
 return <EditorialHero
   image={data.image}
   imageAlt={data.imageAlt}
   crumbs={[{label:t.home,href:lang==='it'?'/':b},{label:t.guides,href:guideHref},{label:data.title}]}
   breadcrumbLabel={t.breadcrumb}
   eyebrow={data.kicker}
   title={data.title}
   subtitle={<><span className="block font-serif text-[clamp(1.2rem,2.5vw,1.7rem)] leading-snug text-white">{data.subtitle}</span><span className="mt-3 block max-w-3xl text-[1rem] leading-7 text-white/82 sm:text-[1.08rem]">{data.description}</span></>}
   strongShade={strongShadeImages.has(data.image)}
   credit={data.slug==='dolomiti'?t.photo:undefined}
  >
   <div className="flex flex-wrap gap-3">
    <a href={lang==='it'?'#itinerario':'#itinerary'} className="rounded-full bg-gold px-6 py-3.5 font-bold text-navy">{t.plan}</a>
    <Link href={guideHref} className="rounded-full border border-white/60 px-6 py-3.5 font-bold text-white">{t.back}</Link>
   </div>
  </EditorialHero>;
}
