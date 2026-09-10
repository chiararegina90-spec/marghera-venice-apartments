import type {SiteLang} from '@/lib/i18n';
import type {JournalFilterItem} from '@/components/JournalFilterGrid';
import type {GuideDirectoryItem} from '@/components/GuideDirectoryIndex';

export const seoJournalSlugs=['contributo-accesso-venezia'] as const;
export const seoGuideSlugs=['venezia-nascosta'] as const;

const accessFeeCard:Record<SiteLang,Omit<JournalFilterItem,'href'>>={
  it:{title:'Contributo di accesso a Venezia 2026/2027: devi pagare?',category:'Venezia pratica',text:'La sperimentazione 2026 è terminata il 26 luglio. Dal 27 luglio non serve pagare né chiedere esenzione: ecco cosa sappiamo sul 2027.',image:'/images/access-fee-card.png',alt:'Grafica informativa Need help? per il Contributo di Accesso a Venezia'},
  en:{title:'Venice Access Fee 2026/2027: Do You Have to Pay?',category:'Practical Venice',text:'Venice’s 2026 Access Fee ended on 26 July. No payment or exemption is required from 27 July; here is the latest official status for 2027.',image:'/images/access-fee-card.png',alt:'Need help? information graphic for the Venice Access Fee'},
  de:{title:'Venedig Eintrittsgebühr 2026/2027: Muss man aktuell zahlen?',category:'Venedig praktisch',text:'Die Testphase 2026 endete am 26. Juli. Seit dem 27. Juli sind weder Zahlung noch Befreiungsantrag nötig. Das ist der offizielle Stand für 2027.',image:'/images/access-fee-card.png',alt:'Need help?-Infografik zum Zugangsbeitrag für Venedig'},
  fr:{title:'Taxe d’accès à Venise 2026/2027 : faut-il payer ?',category:'Venise pratique',text:'La phase 2026 s’est terminée le 26 juillet. Depuis le 27 juillet, aucun paiement ni demande d’exonération n’est requis. Voici le point officiel pour 2027.',image:'/images/access-fee-card.png',alt:'Visuel Need help? sur la contribution d’accès à Venise'},
  es:{title:'Tasa de acceso a Venecia 2026/2027: ¿hay que pagar?',category:'Venecia práctica',text:'La fase de prueba de 2026 terminó el 26 de julio. Desde el 27 de julio no hay que pagar ni solicitar exención. Este es el estado oficial para 2027.',image:'/images/access-fee-card.png',alt:'Gráfico Need help? sobre la tasa de acceso a Venecia'},
  zh:{title:'2026/2027威尼斯入城费：现在需要支付吗？',category:'威尼斯实用信息',text:'2026年威尼斯入城费试行期已于7月26日结束。自7月27日起无需付费，也无需申请豁免。这里整理2027年的最新官方状态。',image:'/images/access-fee-card.png',alt:'威尼斯入城费Need help?信息图'}
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
  return seoGuideSlugs.map(slug=>({slug,...hiddenGuideCard[lang]}));
}
