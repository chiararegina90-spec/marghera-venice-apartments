import {stockImages,type StockImageCreditKey} from '@/data/stockImages';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';

const ui={
  it:{title:'Fotografie Unsplash',lead:'Immagini editoriali selezionate per completare le sezioni che ne erano prive.',author:'Autore',source:'Fonte',license:'Licenza',usage:'Utilizzo nel sito',open:'Apri la foto originale',licenseName:'Unsplash License'},
  en:{title:'Unsplash photography',lead:'Editorial images selected to complete sections that previously had no photography.',author:'Author',source:'Source',license:'License',usage:'Used on the site',open:'Open original photo',licenseName:'Unsplash License'},
  de:{title:'Unsplash-Fotografie',lead:'Redaktionell ausgewählte Bilder für Bereiche, in denen bisher passende Fotos fehlten.',author:'Urheber',source:'Quelle',license:'Lizenz',usage:'Verwendung auf der Website',open:'Originalfoto öffnen',licenseName:'Unsplash License'},
  fr:{title:'Photographies Unsplash',lead:'Images éditoriales sélectionnées pour compléter les sections qui ne disposaient pas encore de photo adaptée.',author:'Auteur',source:'Source',license:'Licence',usage:'Utilisation sur le site',open:'Ouvrir la photo originale',licenseName:'Unsplash License'},
  es:{title:'Fotografías de Unsplash',lead:'Imágenes editoriales seleccionadas para completar las secciones que todavía no tenían una fotografía adecuada.',author:'Autor',source:'Fuente',license:'Licencia',usage:'Uso en el sitio',open:'Abrir la foto original',licenseName:'Unsplash License'},
  zh:{title:'Unsplash 图片',lead:'为原先缺少合适照片的编辑内容补充所选图片。',author:'作者',source:'来源',license:'许可',usage:'网站使用位置',open:'打开原始图片',licenseName:'Unsplash License'},
} as const;

const usage:Record<Lang,Record<StockImageCreditKey,string>>={
  it:{tourGuide:'Esperienze · Guide turistiche',gondola:'Esperienze · Gondole e barche',cycling:'Esperienze · Biciclette',food:'Esperienze · Ristorazione',transfer:'Esperienze · Transfer e NCC',quietVenice:'Scopri Venezia · Quartieri più tranquilli (DE/FR/ES/ZH)'},
  en:{tourGuide:'Experiences · Licensed tour guides',gondola:'Experiences · Gondolas & boats',cycling:'Experiences · Bicycles',food:'Experiences · Food & dining',transfer:'Experiences · Transfers & private drivers',quietVenice:'Discover Venice · Quieter neighbourhoods (DE/FR/ES/ZH)'},
  de:{tourGuide:'Erlebnisse · Lizenzierte Stadtführungen',gondola:'Erlebnisse · Gondel & Lagune',cycling:'Erlebnisse · Radfahren',food:'Erlebnisse · Lokale Küche',transfer:'Erlebnisse · Transfers',quietVenice:'Venedig entdecken · Ruhigere Viertel'},
  fr:{tourGuide:'Expériences · Guides officiels',gondola:'Expériences · Gondole & lagune',cycling:'Expériences · Vélo',food:'Expériences · Cuisine locale',transfer:'Expériences · Transferts',quietVenice:'Découvrir Venise · Quartiers plus tranquilles'},
  es:{tourGuide:'Experiencias · Guías oficiales',gondola:'Experiencias · Góndola y laguna',cycling:'Experiencias · Bicicleta',food:'Experiencias · Cocina local',transfer:'Experiencias · Traslados',quietVenice:'Descubrir Venecia · Barrios más tranquilos'},
  zh:{tourGuide:'精选体验 · 持证导游',gondola:'精选体验 · 贡多拉与泻湖',cycling:'精选体验 · 骑行',food:'精选体验 · 当地美食',transfer:'精选体验 · 接送服务',quietVenice:'探索威尼斯 · 更安静的街区'},
};

export default function StaticImageCredits({lang}:{lang:Lang}){
  const t=ui[lang];
  return <section>
    <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Unsplash</p>
    <h2 className="mt-3 font-serif text-4xl text-navy">{t.title}</h2>
    <p className="mt-4 max-w-3xl leading-7 text-slate-600">{t.lead}</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {(Object.entries(stockImages) as [StockImageCreditKey,(typeof stockImages)[StockImageCreditKey]][]).map(([key,c])=><article key={key} className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-serif text-2xl text-navy">{usage[lang][key]}</h3>
        <dl className="mt-4 space-y-2 text-sm text-slate-600">
          <div><dt className="inline font-bold text-navy">{t.author}: </dt><dd className="inline">{c.author}</dd></div>
          <div><dt className="inline font-bold text-navy">{t.source}: </dt><dd className="inline">{c.source}</dd></div>
          <div><dt className="inline font-bold text-navy">{t.license}: </dt><dd className="inline">{t.licenseName}</dd></div>
        </dl>
        <a href={c.sourcePage} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-navy px-5 py-2.5 text-sm font-bold text-navy">{t.open} ↗</a>
      </article>)}
    </div>
  </section>;
}
