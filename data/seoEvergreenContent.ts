import type {SiteLang} from '@/lib/i18n';
import type {JournalFilterItem} from '@/components/JournalFilterGrid';
import type {GuideDirectoryItem} from '@/components/GuideDirectoryIndex';

export const seoJournalSlugs=['contributo-accesso-venezia'] as const;
// Keep the gondola URL in the sitemap for SEO continuity, but do not surface it in the Guide directory.
export const seoGuideSlugs=['venezia-nascosta','gondola-tour-venezia'] as const;

const accessFeeCard:Record<SiteLang,Omit<JournalFilterItem,'href'>>={
  it:{title:'Contributo di accesso a Venezia: devi pagare?',category:'Venezia pratica',text:'Quando si paga, quanto costa, chi è esente e come funziona il voucher: guida aggiornata con le informazioni ufficiali.',image:'/images/access-fee-card.png',alt:'Grafica informativa Need help? per il Contributo di Accesso a Venezia'},
  en:{title:'Venice Access Fee: Do You Have to Pay?',category:'Practical Venice',text:'When it applies, how much it costs, who is exempt and how the voucher works: an up-to-date guide based on official information.',image:'/images/access-fee-card.png',alt:'Need help? information graphic for the Venice Access Fee'},
  de:{title:'Venedig Eintrittsgebühr: Muss man aktuell zahlen?',category:'Venedig praktisch',text:'Wann sie gilt, was sie kostet, wer befreit ist und wie der Voucher funktioniert: ein laufend aktualisierter Guide mit offiziellen Informationen.',image:'/images/access-fee-card.png',alt:'Need help?-Infografik zum Zugangsbeitrag für Venedig'},
  fr:{title:'Contribution d’accès à Venise : faut-il payer ?',category:'Venise pratique',text:'Quand s’applique-t-elle, combien coûte-t-elle, qui est exonéré et comment fonctionne le voucher : guide actualisé à partir des informations officielles.',image:'/images/access-fee-card.png',alt:'Visuel Need help? sur la contribution d’accès à Venise'},
  es:{title:'Tarifa de Acceso a Venecia: ¿hay que pagar?',category:'Venecia práctica',text:'Cuándo se aplica, cuánto cuesta, quién está exento y cómo funciona el voucher: guía actualizada con información oficial.',image:'/images/access-fee-card.png',alt:'Gráfico Need help? sobre la tasa de acceso a Venecia'},
  zh:{title:'威尼斯入城费：现在需要支付吗？',category:'威尼斯实用信息',text:'实施日期、费用、豁免和Voucher办理方式：根据官方信息持续更新的实用指南。',image:'/images/access-fee-card.png',alt:'威尼斯入城费Need help?信息图'}
};

export function seoJournalItems(lang:SiteLang):JournalFilterItem[]{
  const prefix=lang==='it'?'':`/${lang}`;
  return seoJournalSlugs.map(slug=>({...accessFeeCard[lang],href:`${prefix}/journal/${slug}`}));
}

const hiddenGuideCard:Record<SiteLang,Omit<GuideDirectoryItem,'slug'>>={
  it:{title:'Venezia nascosta',subtitle:'3 passeggiate lontano dalla folla',text:'Cannaregio, artigiani di Dorsoduro e Castello orientale: tre percorsi per cambiare ritmo senza inseguire una lista di “luoghi segreti”.',image:'/images/venezia-nascosta-card.png',alt:'Canale veneziano al tramonto incorniciato da antiche colonne'},
  en:{title:'Hidden Venice',subtitle:'3 walks away from the crowds',text:'Cannaregio, Dorsoduro’s artisan side and eastern Castello: three self-guided walks for seeing a quieter side of Venice without chasing “secret spots”.',image:'/images/venezia-nascosta-card.png',alt:'Venetian canal at sunset framed by old stone columns'},
  de:{title:'Venedig Geheimtipps',subtitle:'3 Spaziergänge abseits der Massen',text:'Cannaregio, das Handwerk in Dorsoduro und das östliche Castello: drei ruhige Routen für ein anderes Tempo in Venedig.',image:'/images/venezia-nascosta-card.png',alt:'Venezianischer Kanal bei Sonnenuntergang zwischen alten Steinsäulen'},
  fr:{title:'Venise secrète',subtitle:'3 balades loin de la foule',text:'Cannaregio, le côté artisanal de Dorsoduro et l’est de Castello : trois itinéraires pour ralentir sans collectionner de prétendus « lieux secrets ».',image:'/images/venezia-nascosta-card.png',alt:'Canal vénitien au coucher du soleil encadré par d’anciennes colonnes'},
  es:{title:'Venecia secreta',subtitle:'3 paseos lejos de las multitudes',text:'Cannaregio, la Venecia artesana de Dorsoduro y el este de Castello: tres rutas para bajar el ritmo sin perseguir listas de “lugares secretos”.',image:'/images/venezia-nascosta-card.png',alt:'Canal veneciano al atardecer enmarcado por antiguas columnas'},
  zh:{title:'小众威尼斯',subtitle:'3条远离人群的漫步路线',text:'从卡纳雷吉欧到多尔索杜罗的手工艺街区，再到城堡区东部：三条适合放慢脚步、观察日常威尼斯的路线。',image:'/images/venezia-nascosta-card.png',alt:'夕阳下的威尼斯运河，由古老石柱框景'}
};

export function seoGuideItems(lang:SiteLang):GuideDirectoryItem[]{
  return [{slug:'venezia-nascosta',...hiddenGuideCard[lang]}];
}
