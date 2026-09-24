export type VespucciAuditLang='it'|'en'|'de'|'fr'|'es'|'zh';
type Copy={
  seoTitle:string;
  description:string;
  eventDate:string;
  title:string;
  labels:{home:string;journal:string;practical:string;faq:string;official:string;source:string;back:string;more:string};
  related:[string,string][];
};

export const amerigoVespucci2026Audit:Record<VespucciAuditLang,Copy>={
  it:{
    seoTitle:'Amerigo Vespucci Venezia 2026: date, visite e prenotazioni',
    description:'Amerigo Vespucci a Venezia dal 2 al 7 ottobre 2026. Visite gratuite il 2, 3 e 4 ottobre: orari, prenotazioni nominali e informazioni utili.',
    eventDate:'2–7 OTTOBRE 2026',
    title:'Amerigo Vespucci a Venezia 2026',
    labels:{home:'Home',journal:'Journal',practical:'Informazioni confermate',faq:'Domande frequenti',official:'Fonti ufficiali',source:'Controlla gli aggiornamenti prima della visita: esigenze operative della nave possono modificare accessi e orari.',back:'Torna al Journal',more:'Continua a esplorare'},
    related:[['Come raggiungere Venezia','/come-raggiungere-venezia'],['Venezia nascosta','/guide/venezia-nascosta']]
  },
  en:{
    seoTitle:'Amerigo Vespucci Venice 2026 | Visits & Booking',
    description:'Amerigo Vespucci in Venice 2–7 October 2026. Free public visits on 2, 3 and 4 October: times, named booking and practical visitor information.',
    eventDate:'2–7 OCTOBER 2026',
    title:'Amerigo Vespucci in Venice 2026',
    labels:{home:'Home',journal:'Journal',practical:'Confirmed information',faq:'Frequently asked questions',official:'Official sources',source:'Re-check before visiting: operational requirements can change access arrangements and times.',back:'Back to Journal',more:'Keep exploring'},
    related:[['Getting to Venice','/en/getting-to-venice'],['Hidden Venice','/en/guide/venezia-nascosta']]
  },
  de:{
    seoTitle:'Amerigo Vespucci Venedig 2026 | Besuch & Reservierung',
    description:'Amerigo Vespucci in Venedig 2.–7. Oktober 2026. Kostenlose Besuche am 2., 3. und 4. Oktober: Zeiten, namentliche Reservierung und praktische Hinweise.',
    eventDate:'2.–7. OKTOBER 2026',
    title:'Amerigo Vespucci in Venedig 2026',
    labels:{home:'Startseite',journal:'Journal',practical:'Bestätigte Informationen',faq:'Häufige Fragen',official:'Offizielle Quellen',source:'Kurz vor dem Besuch erneut prüfen: operative Anforderungen können Zugänge und Zeiten verändern.',back:'Zurück zum Journal',more:'Weiter entdecken'},
    related:[['Anreise nach Venedig','/de/getting-to-venice'],['Verstecktes Venedig','/de/guide/venezia-nascosta']]
  },
  fr:{
    seoTitle:'Amerigo Vespucci Venise 2026 | Visites et réservation',
    description:'Amerigo Vespucci à Venise du 2 au 7 octobre 2026. Visites gratuites les 2, 3 et 4 octobre : horaires, réservation nominative et informations pratiques.',
    eventDate:'2–7 OCTOBRE 2026',
    title:'Amerigo Vespucci à Venise en 2026',
    labels:{home:'Accueil',journal:'Journal',practical:'Informations confirmées',faq:'Questions fréquentes',official:'Sources officielles',source:'Vérifiez à nouveau avant la visite : les impératifs opérationnels peuvent modifier les accès et horaires.',back:'Retour au Journal',more:'Continuer à explorer'},
    related:[['Rejoindre Venise','/fr/getting-to-venice'],['Venise cachée','/fr/guide/venezia-nascosta']]
  },
  es:{
    seoTitle:'Amerigo Vespucci Venecia 2026 | Visitas y reserva',
    description:'Amerigo Vespucci en Venecia del 2 al 7 de octubre de 2026. Visitas gratuitas los días 2, 3 y 4: horarios, reserva nominal e información práctica.',
    eventDate:'2–7 OCTUBRE 2026',
    title:'Amerigo Vespucci en Venecia 2026',
    labels:{home:'Inicio',journal:'Journal',practical:'Información confirmada',faq:'Preguntas frecuentes',official:'Fuentes oficiales',source:'Comprueba de nuevo antes de la visita: las necesidades operativas pueden modificar accesos y horarios.',back:'Volver al Journal',more:'Seguir explorando'},
    related:[['Cómo llegar a Venecia','/es/getting-to-venice'],['Venecia escondida','/es/guide/venezia-nascosta']]
  },
  zh:{
    seoTitle:'Amerigo Vespucci 2026 威尼斯｜参观时间与预约',
    description:'Amerigo Vespucci 2026年10月2日至7日停靠威尼斯；公众参观为10月2、3、4日，免费但需实名预约，并附开放时间与实用信息。',
    eventDate:'2026年10月2–7日',
    title:'Amerigo Vespucci 2026 威尼斯站',
    labels:{home:'首页',journal:'旅行日志',practical:'已确认信息',faq:'常见问题',official:'官方来源',source:'出发前请再次确认：舰船运行需要可能影响入口和时间安排。',back:'返回旅行日志',more:'继续探索'},
    related:[['如何前往威尼斯','/zh/getting-to-venice'],['隐藏的威尼斯','/zh/guide/venezia-nascosta']]
  }
};
