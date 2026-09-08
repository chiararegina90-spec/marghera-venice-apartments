'use client';
import {useEffect,useState} from 'react';
import {STORAGE_KEY} from '@/components/CommonsPhoto';

type Credit={page:string;artist?:string;license?:string;title?:string;query:string};
type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
const seededCredits:Credit[]=[
 {page:'https://commons.wikimedia.org/wiki/File:Venice_Marathon.jpg',artist:'Dariozo',license:'CC BY-SA 3.0 / GFDL',title:'Venice Marathon',query:'Venicemarathon 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Serenissima_barca.jpg',artist:'Sandro Rossi',license:'CC BY-SA 4.0',title:'Serenissima barca',query:'Veleziana 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Bartender_making_a_cocktail_(Unsplash).jpg',artist:'Adam Jaime',license:'CC0 1.0',title:'Bartender making a cocktail',query:'Venice Cocktail Week 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Atelier_of_Antonia_Sautter.jpg',artist:'Venice3',license:'CC BY-SA 3.0',title:'Atelier of Antonia Sautter',query:'Venice Fashion Week 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Vertigo_Yacht_a_Venezia.jpg',artist:'Giu Pepis',license:'CC BY-SA 4.0',title:'Vertigo Yacht a Venezia',query:'Venice Hospitality Challenge 2026'},
 {page:"https://commons.wikimedia.org/wiki/File:Olivetti_Exhibition_centre_by_Carlo_Scarpa,_St_Mark%27s_Square,_Venice,_Italy.jpg",artist:'fusion-of-horizons',license:'CC BY 2.0',title:'Olivetti Exhibition centre by Carlo Scarpa',query:'Venice Design Week 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Teatro_Piccolo_Arsenale.jpg',artist:'Maxmarwiki',license:'CC BY-SA 4.0',title:'Teatro Piccolo Arsenale',query:'Biennale Musica 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Murano_glassblowing_demo.jpg',artist:'Wknight94',license:'CC BY-SA 3.0 / GFDL',title:'Murano glassblowing demo',query:'Salone dell’Alto Artigianato Italiano 2026'},
 {page:'https://commons.wikimedia.org/wiki/File:Canal_in_Venice_at_night.jpg',artist:'Tesla Delacroix',license:'CC BY-SA 4.0',title:'Canal in Venice at night',query:'Venice Noir 2026'}
];
const copy={
 it:{empty:'I crediti delle immagini Wikimedia Commons visualizzate su questo dispositivo compariranno qui automaticamente.',source:'Fonte',author:'Autore',license:'Licenza',open:'Apri la pagina originale su Wikimedia Commons'},
 en:{empty:'Credits for Wikimedia Commons images viewed on this device will appear here automatically.',source:'Source',author:'Author',license:'License',open:'Open the original page on Wikimedia Commons'},
 de:{empty:'Die Nachweise der auf diesem Gerät angezeigten Wikimedia-Commons-Bilder erscheinen hier automatisch.',source:'Quelle',author:'Urheber',license:'Lizenz',open:'Originalseite auf Wikimedia Commons öffnen'},
 fr:{empty:'Les crédits des images Wikimedia Commons affichées sur cet appareil apparaîtront ici automatiquement.',source:'Source',author:'Auteur',license:'Licence',open:'Ouvrir la page originale sur Wikimedia Commons'},
 es:{empty:'Los créditos de las imágenes de Wikimedia Commons vistas en este dispositivo aparecerán aquí automáticamente.',source:'Fuente',author:'Autor',license:'Licencia',open:'Abrir la página original en Wikimedia Commons'},
 zh:{empty:'本设备浏览过的 Wikimedia Commons 图片署名信息会自动显示在这里。',source:'来源',author:'作者',license:'许可',open:'在 Wikimedia Commons 打开原始页面'}
} as const;
function clean(value?:string){return (value||'').replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim();}
export default function ImageCreditsClient({lang}:{lang:Lang}){
 const [credits,setCredits]=useState<Credit[]>([]); const t=copy[lang];
 useEffect(()=>{try{const viewed:Credit[]=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');const merged=[...viewed.reverse(),...seededCredits.filter(seed=>!viewed.some(x=>x.page===seed.page))];setCredits(merged)}catch{setCredits(seededCredits)}},[]);
 if(!credits.length) return <p className="rounded-3xl bg-cream p-6 leading-7 text-slate-600">{t.empty}</p>;
 return <div className="grid gap-4 md:grid-cols-2">{credits.map(c=><article key={c.page} className="rounded-3xl border border-slate-200 bg-white p-6"><h2 className="font-serif text-2xl text-navy">{clean(c.title)||c.query}</h2><dl className="mt-4 space-y-2 text-sm text-slate-600"><div><dt className="inline font-bold text-navy">{t.author}: </dt><dd className="inline">{clean(c.artist)||'Wikimedia Commons contributor'}</dd></div><div><dt className="inline font-bold text-navy">{t.license}: </dt><dd className="inline">{clean(c.license)||'See source page'}</dd></div><div><dt className="inline font-bold text-navy">{t.source}: </dt><dd className="inline">Wikimedia Commons</dd></div></dl><a href={c.page} target="_blank" rel="noopener noreferrer license" className="mt-5 inline-flex rounded-full border border-navy px-5 py-2.5 text-sm font-bold text-navy">{t.open} ↗</a></article>)}</div>;
}
