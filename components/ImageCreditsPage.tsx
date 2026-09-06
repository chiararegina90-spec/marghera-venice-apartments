import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageCreditsClient from '@/components/ImageCreditsClient';
type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
const c={
 it:{title:'Crediti immagini',lead:'Le fotografie provenienti da Wikimedia Commons mantengono qui autore, fonte e licenza senza sovrapporre riquadri alle immagini del sito.'},
 en:{title:'Image credits',lead:'Photos sourced from Wikimedia Commons keep their author, source and licence information here, without placing credit boxes over the images.'},
 de:{title:'Bildnachweise',lead:'Für Fotos von Wikimedia Commons werden hier Urheber, Quelle und Lizenz aufgeführt, ohne die Bilder auf der Website mit Hinweisen zu überlagern.'},
 fr:{title:'Crédits images',lead:'Les photos provenant de Wikimedia Commons conservent ici les informations d’auteur, de source et de licence, sans encadré superposé aux images.'},
 es:{title:'Créditos de imágenes',lead:'Las fotos procedentes de Wikimedia Commons mantienen aquí la información de autor, fuente y licencia sin superponer recuadros sobre las imágenes.'},
 zh:{title:'图片署名',lead:'来自 Wikimedia Commons 的图片在此保留作者、来源与许可信息，同时不在网站图片上叠加署名框。'}
} as const;
export default function ImageCreditsPage({lang}:{lang:Lang}){const t=c[lang];return <><Header lang={lang}/><main><section className="bg-navy px-5 pb-16 pt-36 text-white lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Apartments</p><h1 className="mt-4 font-serif text-6xl md:text-8xl">{t.title}</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-white/75">{t.lead}</p></div></section><section className="py-20"><div className="mx-auto max-w-6xl px-5 lg:px-8"><ImageCreditsClient lang={lang}/></div></section></main><Footer lang={lang}/></>}
